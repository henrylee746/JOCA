"use client";

import { parseLocalDate } from "@/lib/utils";

export function ClientDate({ date }: { date: string }) {
  if (!date) return <span>N/A</span>;

  // Local midnight — prevents UTC offset from shifting the displayed day.
  const localDate = parseLocalDate(date);

  return <span>{localDate.toLocaleDateString()}</span>;
}
