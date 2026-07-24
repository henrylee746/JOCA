import { SESSION_FRESH_AGE_SECONDS } from "@/lib/auth-constants";

type SessionLike = {
  session?: { createdAt?: string | Date } | null;
} | null;

export function isSessionFresh(
  session: SessionLike,
  freshAgeSeconds: number = SESSION_FRESH_AGE_SECONDS,
): boolean {
  const createdAt = session?.session?.createdAt;
  if (!createdAt) return false;
  const createdMs = new Date(createdAt).getTime();
  if (Number.isNaN(createdMs)) return false;
  return Date.now() - createdMs < freshAgeSeconds * 1000;
}

export function isFreshSessionError(error: {
  code?: string | null;
  message?: string | null;
} | null | undefined): boolean {
  if (!error) return false;
  const code = error.code?.toUpperCase() ?? "";
  const message = error.message?.toLowerCase() ?? "";
  return (
    code === "SESSION_NOT_FRESH" ||
    code === "SESSION_EXPIRED" ||
    message.includes("session is not fresh") ||
    message.includes("session expired") ||
    message.includes("re-authenticate")
  );
}
