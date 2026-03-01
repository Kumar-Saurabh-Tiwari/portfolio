/**
 * Utility to merge Tailwind class names safely (simple approach, no external dep).
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
