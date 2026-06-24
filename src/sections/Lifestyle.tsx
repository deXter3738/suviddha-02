import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { ImageReveal } from "../components/motion/ImageReveal";
import { SectionHeading } from "../components/SectionHeading";
import { media } from "../data/content";

const cards = [
  {
    number: "01",
    title: "Nature Trails.",
    image: media.trail,
    highlights: ["Walking trails", "Landscaped gardens", "Fresh morning air"],
    cta: "Discover",
  },
  {
    number: "02",
    title: "Weekend Living.",
    image: media.cottage,
    highlights: ["Private retreats", "Community spaces", "Family gatherings"],
    cta: "Explore",
  },
  {
    number: "03",
    title: "Community.",
    image: media.community,
    highlights: ["Gated security", "Shared amenities", "Thoughtfully planned spaces"],
    cta: "Learn more",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Lifestyle() {
  return (
    <section id="lifestyle" className="relative min-h-screen bg-background bg-noise section-divider">
      <Container className="pt-24">
        <SectionHeading
          label="Lifestyle"
          center
          maxWidth="max-w-4xl"
          heading={[
            { text: "A slower way of" },
            { text: "living.", className: "font-serif text-primary" },
          ]}
          description="Every road, garden and shared space has been designed to encourage slower mornings, meaningful weekends and lasting memories surrounded by nature."
        />

        <div className="mt-20 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ImageReveal className="group relative min-h-[500px] overflow-hidden rounded-3xl md:col-span-2 xl:col-span-1">
            <img
              src={media.lifestyleVideo}
              alt="Open nature landscape representing slow weekend living"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="image-overlay absolute inset-0" />
            <h3 className="absolute bottom-8 left-8 max-w-xs text-xl font-medium leading-tight text-text md:text-2xl">
              Morning begins differently here.
            </h3>
          </ImageReveal>

          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group flex min-h-[500px] flex-col justify-between rounded-3xl bg-card p-8 transition-colors duration-300 hover:bg-[#24211d]"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="flex items-center justify-between text-primary">
                  <span className="text-xs font-medium uppercase tracking-normal">{card.number}</span>
                  <img
                    src={card.image}
                    alt=""
                    className="h-14 w-14 rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-10 text-2xl font-medium text-text">{card.title}</h3>
                <ul className="mt-8 space-y-4">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-[1.5] text-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {card.cta}
                <ArrowUpRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
            </motion.article>
          ))}
        </div>

        <FadeUp className="mx-auto mt-28 max-w-4xl pb-24 text-center font-serif text-4xl leading-tight text-primary md:text-6xl">
          "The best investment isn't just land. It's the life you build on it."
        </FadeUp>
      </Container>
    </section>
  );
}
