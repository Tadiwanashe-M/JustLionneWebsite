"use client";

import {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * iOS Safari often never fires Framer's `whileInView` for content already in the
 * viewport, leaving sections stuck at opacity: 0. We detect "already visible"
 * synchronously in useLayoutEffect, then fall back to IntersectionObserver.
 */
function useRevealVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const h = window.innerHeight;
    // In or just entering viewport — treat as visible before first paint
    if (rect.top < h + 160 && rect.bottom > -100) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { root: null, rootMargin: "0px 0px 20% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return { ref, visible };
}

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
  const { ref, visible } = useRevealVisible();

  if (reduceMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
