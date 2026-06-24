import { motion } from "framer-motion";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { WordsPullUp } from "../components/motion/WordsPullUp";
import { navItems, socialLinks } from "../data/content";

const footerLinks = navItems.filter((item) => item.label !== "Home");
const contactLinks = ["Phone", "Email", "Sales Office", "WhatsApp", "Instagram"];
const ease = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  return (
    <footer className="relative bg-[#080808] bg-noise pb-10 pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp className="mb-6 text-[10px] font-medium uppercase tracking-normal text-primary sm:text-xs">
              Saanidhiya Greens
            </FadeUp>
            <h2 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-normal text-text sm:text-5xl md:text-6xl lg:text-7xl">
              <WordsPullUp
                segments={[
                  { text: "Built around" },
                  { text: "nature.", className: "font-serif text-primary" },
                  { text: "Designed for generations." },
                ]}
              />
            </h2>
            <FadeUp delay={0.3} className="mt-8 max-w-lg text-sm leading-[1.7] text-secondary md:text-base">
              Saanidhiya Greens is a thoughtfully planned gated community where architecture, landscape and lifestyle come together
              to create a place that grows in value for generations.
            </FadeUp>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <motion.nav
              aria-label="Footer navigation"
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ show: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
            >
              {footerLinks.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-secondary transition-all duration-300 hover:translate-x-1 hover:text-text"
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.55, ease }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            <div>
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ show: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
              >
                {contactLinks.map((item) => (
                  <motion.a
                    key={item}
                    href="#contact"
                    className="block text-sm text-secondary transition-colors duration-300 hover:text-text"
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.55, ease }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
              <div className="mt-8 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#contact"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted transition-all duration-300 hover:scale-[1.08] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <p className="text-xs tracking-normal text-muted">&copy; 2026 Saanidhiya Greens. All Rights Reserved.</p>
            <p className="text-xs uppercase tracking-normal text-muted">Vadodara, Gujarat</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#contact" className="text-xs text-muted transition-colors duration-300 hover:text-text">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <FadeUp delay={0.7} className="mt-20 text-center font-serif text-xl text-primary/70 md:text-2xl">
          "Where every journey begins with nature."
        </FadeUp>
      </Container>
    </footer>
  );
}
