import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timeStr: string) => {
  if (!timeStr) return "N/A";

  const [h, m] = timeStr.split(":");
  let hour = Number(h);

  const suffix = hour < 12 ? " a.m" : " p.m";

  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;

  return `${hour}:${m} ${suffix}`;
};

/** Parse a Strapi date (YYYY-MM-DD) as local midnight — not UTC. */
export function parseLocalDate(date: string): Date {
  const [year, month, day] = date.split("T")[0].split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** Inclusive local calendar-day voting window. */
export function isWithinVotingWindow(
  votingDateStart: string,
  votingDateEnd: string,
  now: Date = new Date(),
): boolean {
  const start = parseLocalDate(votingDateStart);
  const end = parseLocalDate(votingDateEnd);
  end.setHours(23, 59, 59, 999);
  return start <= now && end >= now;
}
