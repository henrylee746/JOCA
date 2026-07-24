export function isEmailVerificationSkipped(): boolean {
  return process.env.NEXT_PUBLIC_SKIP_EMAIL_VERIFICATION === "true";
}

export function isEmailUnverified(user: {
  emailVerified?: boolean | null;
} | null | undefined): boolean {
  return Boolean(user) && !user?.emailVerified && !isEmailVerificationSkipped();
}
