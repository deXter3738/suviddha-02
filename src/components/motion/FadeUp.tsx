import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "span" | "section";
};

const ease = [0.16, 1, 0.3, 1] as const;

export function FadeUp({ children, className = "", delay = 0, as = "div" }: FadeUpProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}
