import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { SectionHeading } from "../components/SectionHeading";
import { galleryHighlights, galleryItems } from "../data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value === null ? value : (value + 1) % galleryItems.length));
      if (event.key === "ArrowLeft") setActive((value) => (value === null ? value : (value - 1 + galleryItems.length) % galleryItems.length));
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  const goTo = (direction: 1 | -1) => {
    setActive((value) => (value === null ? value : (value + direction + galleryItems.length) % galleryItems.length));
  };

  return (
    <section id="gallery" className="relative min-h-screen bg-background bg-noise section-divider">
      <Container className="py-28">
        <SectionHeading
          label="Gallery"
          heading={[
            { text: "Experience" },
            { text: "Saanidhiya Greens.", className: "font-serif text-primary" },
          ]}
          description="Explore thoughtfully designed landscapes, premium infrastructure and moments that define everyday life inside Saanidhiya Greens."
        />

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.caption}
              type="button"
              className={`group relative overflow-hidden rounded-3xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${item.aspect} ${item.span}`}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease, delay: index * 0.12 }}
              onClick={() => setActive(index)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent transition-opacity duration-700 group-hover:opacity-40" />
              <span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-normal text-text/85">
                {item.caption}
              </span>
            </motion.button>
          ))}
        </div>

        <FadeUp className="mx-auto mt-28 max-w-4xl text-center font-serif text-4xl leading-tight text-primary md:text-5xl lg:text-6xl">
          "Some places are visited. Others become part of your story."
        </FadeUp>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <FadeUp key={highlight.title} delay={index * 0.1} className="rounded-2xl bg-card p-6 transition-colors duration-300 hover:bg-[#24211d]">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-6 text-lg font-medium text-text">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-secondary">{highlight.description}</p>
              </FadeUp>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen gallery"
          >
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-text transition-colors duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-text transition-colors duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:left-8"
              onClick={() => goTo(-1)}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <motion.img
              key={active}
              src={galleryItems[active].src}
              alt={galleryItems[active].caption}
              className="max-h-[82vh] max-w-[88vw] rounded-3xl object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease }}
            />
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-text transition-colors duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:right-8"
              onClick={() => goTo(1)}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
