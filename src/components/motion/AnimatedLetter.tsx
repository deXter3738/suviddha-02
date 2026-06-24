import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimatedLetterProps = {
  text: string;
  className?: string;
};

function Character({ character, index, total, progress }: { character: string; index: number; total: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const point = total <= 1 ? 1 : index / (total - 1);
  const opacity = useTransform(progress, [Math.max(0, point - 0.1), Math.min(1, point + 0.05)], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {character}
    </motion.span>
  );
}

export function AnimatedLetter({ text, className = "" }: AnimatedLetterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((character, index) => (
        <Character
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
