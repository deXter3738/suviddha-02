import { FadeUp } from "./motion/FadeUp";
import { WordsPullUp } from "./motion/WordsPullUp";

type Segment = {
  text: string;
  className?: string;
};

type SectionHeadingProps = {
  label: string;
  heading: Segment[];
  description?: string;
  center?: boolean;
  className?: string;
  maxWidth?: string;
};

export function SectionHeading({ label, heading, description, center = false, className = "", maxWidth = "max-w-4xl" }: SectionHeadingProps) {
  return (
    <header className={`${center ? "mx-auto text-center" : ""} ${maxWidth} ${className}`}>
      <FadeUp className="mb-6 text-[10px] font-medium uppercase tracking-normal text-primary sm:text-xs">{label}</FadeUp>
      <h2 className="text-3xl font-medium leading-[0.95] tracking-normal text-text sm:text-4xl md:text-5xl lg:text-6xl">
        <WordsPullUp segments={heading} center={center} />
      </h2>
      {description ? (
        <FadeUp
          delay={0.35}
          className={`mt-6 text-sm leading-[1.6] text-secondary md:text-base ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </FadeUp>
      ) : null}
    </header>
  );
}
