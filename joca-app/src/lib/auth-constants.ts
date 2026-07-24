/** Must stay in sync with `session.freshAge` in `auth.ts`. */
export const SESSION_FRESH_AGE_SECONDS = 60 * 60 * 2; // 2 hours

/** Human-readable label for dialog copy (e.g. "2 hours", "5 seconds"). */
export function formatFreshAgeLabel(
  seconds: number = SESSION_FRESH_AGE_SECONDS,
): string {
  if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
  }
  if (seconds < 3600) {
    const minutes = Math.round(seconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }
  const hours = Math.round((seconds / 3600) * 10) / 10;
  const display = Number.isInteger(hours) ? String(hours) : hours.toFixed(1);
  return `${display} ${hours === 1 ? "hour" : "hours"}`;
}
