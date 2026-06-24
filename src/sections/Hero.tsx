import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { VideoBackground } from "../components/VideoBackground";
import { FadeUp } from "../components/motion/FadeUp";
import { WordsPullUp } from "../components/motion/WordsPullUp";
import { media } from "../data/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background p-4 md:p-6">
      <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-3xl md:min-h-[calc(100vh-3rem)] md:rounded-[2rem]">
        <VideoBackground image={media.hero} alt="Sunrise landscape with a quiet nature-led weekend home setting" />

        <motion.div
          className="pointer-events-none absolute left-8 top-[32%] hidden text-[11px] tracking-normal text-text/55 md:left-12 lg:left-16 lg:top-[42%] lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          Nature. Community. Legacy.
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-8 top-[32%] hidden text-right text-[11px] tracking-normal text-text/55 md:right-12 lg:right-16 lg:top-[42%] lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          Designed for slower living.
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-12 md:pb-12 lg:px-16">
          <div className="mb-8 border-t border-white/10 opacity-70" />
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <h1 className="text-6xl font-medium leading-[0.92] tracking-normal text-text sm:text-7xl md:text-8xl lg:col-span-7 xl:text-9xl">
              <WordsPullUp
                delay={0.2}
                segments={[
                  { text: "Live" },
                  { text: "Beyond", className: "font-serif text-primary" },
                  { text: "The City." },
                ]}
              />
            </h1>
            <div className="max-w-[420px] lg:col-span-5">
              <FadeUp delay={0.5} className="text-sm leading-[1.55] text-text/75 md:text-base">
                Discover premium gated farmland and weekend homes where nature, thoughtful planning and long-term investment come
                together to create a destination designed for generations.
              </FadeUp>
              <FadeUp delay={0.65} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#contact" fullWidth={false}>
                  Book a Site Visit
                </Button>
                <a
                  href="#master-plan"
                  className="inline-flex min-h-12 items-center justify-center rounded-full px-4 text-sm font-medium text-text underline-offset-4 transition-colors duration-300 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:justify-start"
                >
                  View Master Plan
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
