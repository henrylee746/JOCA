import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { EmailVerification } from "./EmailVerificationPage";

interface Props {
  searchParams: Promise<{ name?: string; email?: string }>;
}

export default async function EmailVerificationPage({ searchParams }: Props) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.user?.emailVerified) redirect("/payment");

  const { name, email } = await searchParams;

  return <EmailVerification name={name ?? ""} email={email ?? ""} />;
}
