import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type WordSegment = {
  text: string;
  className?: string;
};

type WordsPullUpProps = {
  text?: string;
  segments?: WordSegment[];
  className?: string;
  delay?: number;
  center?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function WordsPullUp({ text, segments, className = "", delay = 0, center = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const allSegments = segments ?? [{ text: text ?? "" }];

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.24em] gap-y-2 ${center ? "justify-center" : "justify-start"} ${className}`}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.08,
          },
        },
      }}
      initial={reduce ? false : "hidden"}
      animate={reduce || inView ? "show" : "hidden"}
    >
      {allSegments.map((segment, segmentIndex) =>
        segment.text.split(" ").map((word, wordIndex) => {
          const isSerif = segment.className?.includes("font-serif");

          return (
          <motion.span
            key={`${segment.text}-${segmentIndex}-${word}-${wordIndex}`}
            className={`inline-block ${isSerif ? "serif-accent" : ""} ${segment.className ?? ""}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease }}
          >
            {word}
          </motion.span>
          );
        }),
      )}
    </motion.span>
  );
}
