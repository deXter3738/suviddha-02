import { AnimatedLetter } from "../components/motion/AnimatedLetter";
import { FadeUp } from "../components/motion/FadeUp";
import { ImageReveal } from "../components/motion/ImageReveal";
import { WordsPullUp } from "../components/motion/WordsPullUp";
import { Container } from "../components/layout/Container";
import { media } from "../data/content";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-background py-24 md:py-36">
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
          <FadeUp className="text-[10px] font-medium uppercase tracking-normal text-primary sm:text-xs">Our Philosophy</FadeUp>
          <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-[0.95] tracking-normal text-text sm:text-5xl md:text-6xl lg:text-7xl">
            <WordsPullUp
              center
              segments={[
                { text: "Designed around" },
                { text: "nature,", className: "font-serif text-primary" },
                { text: "built for generations." },
              ]}
            />
          </h2>
          <AnimatedLetter
            text="Saanidhiya Greens was envisioned as more than a plotted development. Every avenue, landscape, and shared space has been thoughtfully planned to create a peaceful environment where families can reconnect with nature while building a lasting investment for future generations."
            className="max-w-3xl text-sm leading-[1.75] text-secondary sm:text-base md:text-lg"
          />
          <FadeUp delay={0.3} className="font-serif text-3xl text-primary md:text-5xl">
            "The greatest luxury is having space to slow down."
          </FadeUp>
        </div>

        <ImageReveal className="relative mt-24 overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[16/8]">
          <img
            src={media.philosophy}
            alt="Morning sunlight passing through a tree-lined avenue"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="image-overlay absolute inset-0" />
          <p className="absolute bottom-8 left-8 max-w-sm text-sm leading-[1.55] text-text">
            Thoughtfully planned landscapes.
            <br />
            Built to be experienced for generations.
          </p>
        </ImageReveal>
      </Container>
    </section>
  );
}
