import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ImageReveal({ children, className = "", delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { scale: 0.97, opacity: 0 }}
      whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
