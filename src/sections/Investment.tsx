import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { ImageReveal } from "../components/motion/ImageReveal";
import { SectionHeading } from "../components/SectionHeading";
import { investmentCards, locationStats, media } from "../data/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Investment() {
  return (
    <section id="investment" className="relative min-h-screen bg-background bg-noise section-divider">
      <Container className="py-28">
        <SectionHeading
          label="Investment"
          heading={[
            { text: "Invest in" },
            { text: "your future.", className: "font-serif text-primary" },
          ]}
          description="Saanidhiya Greens combines thoughtful planning, premium infrastructure and a strategic location to create a destination designed for both peaceful living and long-term appreciation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <ImageReveal className="group relative overflow-hidden rounded-3xl aspect-[16/10] lg:col-span-7">
            <img
              src={media.location}
              alt="Regional landscape representing prime location and connectivity"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="image-overlay absolute inset-0" />
            <p className="absolute bottom-8 left-8 max-w-sm text-sm text-text">Prime location with effortless connectivity.</p>
          </ImageReveal>

          <div className="rounded-3xl bg-card p-6 lg:col-span-5 lg:p-8">
            <div className="grid gap-5">
              {investmentCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    className="group rounded-2xl border border-white/5 bg-[#1D1B18] p-6 transition-colors duration-300 hover:bg-[#26231f]"
                    initial={{ opacity: 0, scale: 0.97, y: 18 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.75, ease, delay: index * 0.15 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-xs font-medium uppercase tracking-normal text-primary">{card.number}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-lg font-medium text-text">{card.title}</h3>
                          <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                        </div>
                        <p className="mt-3 text-sm leading-[1.6] text-secondary">{card.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {locationStats.map((item, index) => (
            <FadeUp key={item.label} delay={index * 0.1} className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <div>
                <p className="text-4xl font-medium leading-none text-text">{item.value}</p>
                <p className="mt-3 text-sm text-secondary">{item.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mx-auto mt-24 max-w-5xl text-center font-serif text-4xl leading-tight text-primary lg:text-6xl">
          "The best investments are measured not only by returns, but by the life they create."
        </FadeUp>
        <FadeUp delay={0.5} className="mt-10 flex justify-center">
          <Button href="#master-plan">Explore the Master Plan</Button>
        </FadeUp>
      </Container>
    </section>
  );
}
