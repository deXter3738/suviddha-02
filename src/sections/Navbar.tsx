import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "../data/content";

const ease = [0.16, 1, 0.3, 1] as const;

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="fixed left-1/2 top-0 z-50 max-w-[calc(100vw-2rem)] -translate-x-1/2"
      >
        <motion.div
          className={`rounded-b-3xl bg-black/85 shadow-nav backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "px-4 py-2 md:px-7 md:py-2" : "px-4 py-2 md:px-8 md:py-3"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
        <div className="flex h-12 items-center justify-center gap-3 sm:gap-6 md:h-14 md:gap-8 lg:gap-10">
          <a
            href="#home"
            className="hidden whitespace-nowrap text-[10px] font-semibold uppercase leading-none tracking-normal text-text sm:block"
          >
            Saanidhiya
          </a>
          <div className="hidden items-center justify-center gap-6 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap text-xs font-medium leading-none tracking-normal transition-colors duration-300 ${
                  active === item.id ? "text-text" : "text-text/70 hover:text-text"
                }`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -1 }}
              >
                {item.label}
                {active === item.id ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-3 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary"
                    transition={{ duration: 0.35, ease }}
                  />
                ) : null}
              </motion.a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden whitespace-nowrap text-xs font-medium leading-none tracking-normal text-text transition-colors duration-300 hover:text-primary md:block"
          >
            Book Visit
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-[18px] w-[18px]" strokeWidth={1.75} /> : <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} />}
          </button>
        </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-background px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <motion.div
              className="flex flex-col items-center gap-8 text-center"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.12 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-medium leading-none text-text transition-colors duration-300 hover:text-primary"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.65, ease }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
