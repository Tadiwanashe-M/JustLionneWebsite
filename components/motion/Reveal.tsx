"use client";

import { cn } from "@/lib/utils";

/**
 * Scroll-in animations were removed: iOS Safari repeatedly left Framer Motion
 * blocks stuck at opacity:0, and broke hydration/interaction for some users.
 * Content is always visible; layout classes still pass through.
 */
export function Reveal({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  /** @deprecated kept for call-site compatibility */
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
