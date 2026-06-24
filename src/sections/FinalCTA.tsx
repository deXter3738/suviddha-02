import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container } from "../components/layout/Container";
import { FadeUp } from "../components/motion/FadeUp";
import { WordsPullUp } from "../components/motion/WordsPullUp";
import { Button } from "../components/ui/Button";
import { VideoBackground } from "../components/VideoBackground";
import { contactItems, media } from "../data/content";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  date: z.string().min(1, "Please choose a preferred visit date."),
  message: z.string().max(500, "Please keep the message under 500 characters.").optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

function downloadBrochure() {
  const brochure = [
    "Saanidhiya Greens",
    "",
    "Premium gated farmland and weekend homes designed around nature, thoughtful planning, and long-term value.",
    "",
    "Highlights:",
    "- Thoughtfully planned roads and green corridors",
    "- Open landscapes and community spaces",
    "- Secure gated planning",
    "- Weekend living with long-term investment confidence",
    "",
    "To book a site visit, contact hello@saanidhiyagreens.com.",
  ].join("\n");
  const blob = new Blob([brochure], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "saanidhiya-greens-brochure.txt";
  link.click();
  URL.revokeObjectURL(url);
}

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-background section-divider">
      <VideoBackground image={media.hero} alt="Golden hour landscape at Saanidhiya Greens" />
      <div className="cta-radial absolute inset-0" />
      <Container className="relative flex min-h-screen items-center justify-center py-28">
        <div className="w-full text-center">
          <div className="mx-auto max-w-[900px]">
            <FadeUp className="text-[10px] font-medium uppercase tracking-normal text-primary sm:text-xs">
              Visit Saanidhiya Greens
            </FadeUp>
            <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-normal text-text sm:text-5xl md:text-6xl lg:text-7xl">
              <WordsPullUp
                center
                segments={[
                  { text: "Your next chapter" },
                  { text: "begins here.", className: "font-serif text-primary" },
                ]}
              />
            </h2>
            <FadeUp delay={0.35} className="mx-auto mt-6 max-w-2xl text-sm leading-[1.6] text-secondary md:text-lg">
              Experience the landscape, explore the master plan and discover why Saanidhiya Greens is designed to become a
              destination for generations to come.
            </FadeUp>
            <FadeUp delay={0.55} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#contact">Book a Site Visit</Button>
              <Button type="button" variant="outline" onClick={downloadBrochure}>
                Download Brochure
              </Button>
            </FadeUp>
          </div>

          <FadeUp delay={0.65} className="mx-auto mt-20 max-w-5xl rounded-3xl border border-white/5 bg-card/70 p-6 text-left shadow-ambient backdrop-blur-xl md:p-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-medium text-text">Let's Talk</h3>
                <p className="mt-4 max-w-sm text-sm leading-[1.7] text-secondary">
                  Share a little about your plans and our team will help you schedule a calm, unhurried visit.
                </p>
                <div className="mt-8 grid gap-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <Icon className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                        <div>
                          <p className="text-sm font-medium text-text">{item.label}</p>
                          <p className="mt-1 text-xs uppercase tracking-normal text-muted">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <form className="grid gap-4 lg:col-span-7" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      className="w-full rounded-2xl border border-white/5 bg-background px-5 py-4 text-sm text-text outline-none transition-colors duration-300 placeholder:text-muted focus:border-primary"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      className="w-full rounded-2xl border border-white/5 bg-background px-5 py-4 text-sm text-text outline-none transition-colors duration-300 placeholder:text-muted focus:border-primary"
                      placeholder="Phone number"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-2xl border border-white/5 bg-background px-5 py-4 text-sm text-text outline-none transition-colors duration-300 placeholder:text-muted focus:border-primary"
                      placeholder="Email address"
                    />
                  </Field>
                  <Field label="Preferred Visit Date" error={errors.date?.message}>
                    <input
                      {...register("date")}
                      type="date"
                      className="field-date w-full rounded-2xl border border-white/5 bg-background px-5 py-4 text-sm text-text outline-none transition-colors duration-300 placeholder:text-muted focus:border-primary"
                    />
                  </Field>
                </div>
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    className="min-h-32 w-full resize-none rounded-2xl border border-white/5 bg-background px-5 py-4 text-sm text-text outline-none transition-colors duration-300 placeholder:text-muted focus:border-primary"
                    placeholder="Tell us what kind of visit you have in mind"
                  />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-2 py-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-[#eadbb8] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span className="px-4">{isSubmitting ? "Booking..." : submitted ? "Request Sent" : "Book My Visit"}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary transition-transform duration-300 group-hover:scale-105">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
                  </span>
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-primary">{error}</span> : null}
    </label>
  );
}
