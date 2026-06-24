import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { ImageReveal } from "../components/motion/ImageReveal";
import { SectionHeading } from "../components/SectionHeading";
import { masterPlanCards, media } from "../data/content";

const hotspots = [
  { title: "Entrance", description: "A calm arrival boulevard framed by native planting.", x: "22%", y: "68%" },
  { title: "Clubhouse", description: "Shared spaces for gathering, wellness and weekends.", x: "58%", y: "38%" },
  { title: "Central Park", description: "Open landscape at the heart of community life.", x: "44%", y: "55%" },
  { title: "Walking Trail", description: "Soft circulation routes woven through green corridors.", x: "72%", y: "62%" },
  { title: "Children's Zone", description: "Safe, visible recreation spaces near family areas.", x: "35%", y: "30%" },
];

const metrics = [
  { value: "100+", label: "Acres Planned" },
  { value: "70%", label: "Open Green Spaces" },
  { value: "24x7", label: "Security" },
  { value: "Future", label: "Growth Corridor" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function MasterPlan() {
  return (
    <section id="master-plan" className="relative min-h-screen bg-background bg-noise section-divider">
      <Container className="py-28">
        <SectionHeading
          label="Master Plan"
          heading={[
            { text: "Thoughtfully planned" },
            { text: "for generations.", className: "font-serif text-primary" },
          ]}
          description="Every road, green corridor and shared amenity has been positioned to create an environment that balances privacy, community and long-term value."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <ImageReveal className="relative overflow-hidden rounded-3xl bg-surface aspect-[4/3] lg:col-span-7">
            <img
              src={media.masterPlan}
              alt="Aerial landscape used as an interactive master plan view"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.45))]" />
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.title}
                className="group absolute"
                style={{ left: hotspot.x, top: hotspot.y }}
              >
                <button
                  type="button"
                  className="relative flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={hotspot.title}
                >
                  <span className="absolute h-8 w-8 animate-ping rounded-full bg-primary/30" />
                  <span className="relative h-3 w-3 rounded-full bg-primary" />
                </button>
                <div className="pointer-events-none absolute left-4 top-4 w-60 origin-top-left rounded-2xl bg-black/80 p-5 opacity-0 shadow-ambient backdrop-blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-text">{hotspot.title}</p>
                      <p className="mt-2 text-xs leading-[1.55] text-secondary">{hotspot.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  </div>
                </div>
              </div>
            ))}
          </ImageReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {masterPlanCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  className="group rounded-3xl border border-white/5 bg-card p-8 transition-colors duration-300 hover:bg-[#24211d]"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease, delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs font-medium uppercase tracking-normal text-primary">{card.number}</span>
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-text">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-secondary">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <FadeUp key={metric.label} delay={index * 0.1} className="rounded-3xl bg-surface p-8">
              <p className="text-5xl font-medium leading-none text-text">{metric.value}</p>
              <p className="mt-4 text-sm text-secondary">{metric.label}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mx-auto mt-24 max-w-5xl text-center font-serif text-4xl leading-tight text-primary lg:text-6xl">
          "A master plan is more than lines on paper. It's the foundation of a lasting community."
        </FadeUp>
      </Container>
    </section>
  );
}
