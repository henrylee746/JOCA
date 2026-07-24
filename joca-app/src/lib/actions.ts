"use server";

import { Prisma } from "../../prisma/generated/prisma/client";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Member } from "@/lib/types";
import {
  CREATE_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER_BY_EMAIL,
} from "./queries";

const STRAPI_GRAPHQL_URL =
  process.env.NODE_ENV !== "development"
    ? process.env.STRAPI_GRAPHQL_URL!
    : "http://localhost:1337/graphql";

// Generic helper for Strapi GraphQL requests.
// T represents the shape of json.data - NOT the entity itself.
// Strapi wraps every response under a key matching the operation name, e.g.:
//   { "data": { "createMember": { ... } } }
async function strapiRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(STRAPI_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return json.data as T;
}

export async function getMemberByEmail(email: string): Promise<Member | null> {
  try {
    const { members } = await strapiRequest<{ members: Member[] }>(
      GET_MEMBER_BY_EMAIL,
      { email },
    );
    return members[0] ?? null;
  } catch (error) {
    throw new Error("Failed to get member, " + error);
  }
}

export async function deleteMemberByEmail(email: string): Promise<void> {
  const member = await getMemberByEmail(email);
  if (member?.documentId) {
    await strapiRequest(DELETE_MEMBER, { documentId: member.documentId });
  }
}

export async function createMember(
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
): Promise<Member> {
  try {
    // Destructure to unwrap the operation-name key Strapi uses.
    // json.data arrives as { createMember: Member }, so we pull out createMember
    const { createMember } = await strapiRequest<{ createMember: Member }>(
      CREATE_MEMBER,
      { data: { firstName, lastName, email, phoneNumber } },
    );
    return createMember;
  } catch (error) {
    throw new Error("Failed to create member, " + error);
  }
}

export async function voteForCandidate(
  candidateId: string,
  electionId: string,
): Promise<{ voteCount: number }> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) throw new Error("You must be logged in to vote.");

  const activeSubscription = await prisma.subscription.findFirst({
    where: { referenceId: session.user.id, status: "active" },
  });
  if (!activeSubscription)
    throw new Error("An active membership is required to vote.");

  const userId = session.user.id;

  // Single atomic DB write. Unique(userId, electionId) prevents double-votes
  // and races — no denormalized Strapi voteCount to drift under concurrency.
  try {
    await prisma.vote.create({
      data: {
        userId,
        electionId,
        candidateId,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      /* P2002: Unique constraint violation: When you attempt to create/update a record
      that would result in duplicate entries
      In this case, the unique constraint is on the combination of userId and electionId 
      (voting more than once on the same user)
      */
      error.code === "P2002"
    ) {
      throw new Error("You have already voted in this election.");
    }
    throw error;
  }

  const voteCount = await prisma.vote.count({
    where: { candidateId },
  });

  return { voteCount };
}

export async function checkIfVoted(electionId: string): Promise<boolean> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) return false;
  const userId = session.user.id;
  try {
    const vote = await prisma.vote.findUnique({
      where: { userId_electionId: { userId, electionId } },
      select: { id: true },
    });
    return vote ? true : false;
  } catch (error) {
    throw error;
  }
}
