"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/** No blur — iOS Safari often leaves blur+opacity animations stuck invisible */
const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
        // Positive bottom margin = trigger slightly before fully on screen (mobile-friendly)
        margin: "0px 0px 120px 0px",
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
