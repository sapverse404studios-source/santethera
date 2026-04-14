import { Link, createRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Home } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { WaveDivider } from "../components/WaveDivider";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const missionValues = [
  {
    icon: Home,
    title: "Healing at Home",
    desc: "We bring the full spa experience to your doorstep — all equipment, oils, and materials included. Your space becomes your sanctuary.",
  },
  {
    icon: Award,
    title: "Expert Care",
    desc: "20+ years of international certifications across Thai massage, reflexology, and chiropractic therapy. Every technique meets global clinical standards.",
  },
  {
    icon: Heart,
    title: "Your Comfort First",
    desc: "Sessions are fully customized to your unique needs. Your comfort, privacy, and healing are our unwavering priorities.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.75]);

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center min-h-[70vh] overflow-hidden"
        aria-label="About hero"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-massage.dim_1600x900.jpg')",
            y: bgY,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background:
              "linear-gradient(160deg, oklch(0.30 0.14 330) 0%, oklch(0.25 0.12 290) 50%, oklch(0.20 0.08 320) 100%)",
          }}
        />

        {/* Floating decorative orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.18 330 / 0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <img
                src="/assets/logo.webp"
                alt="SanteThera"
                className="h-14 w-auto object-contain"
                style={{
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 2px 12px rgba(255,255,255,0.3))",
                }}
              />
            </motion.div>

            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
            >
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Healing is{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.15 58), oklch(0.90 0.12 330))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Calling
              </span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Born from a passion for authentic healing, SanteThera bridges the
              gap between clinical excellence and the comfort of your home.
            </p>
          </motion.div>
        </div>

        <WaveDivider color="oklch(0.98 0.01 320)" />
      </section>

      {/* ── Section 1: Our Story — text left, image right ── */}
      <section className="py-24 bg-background" aria-label="Our story">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div {...fadeUp()} className="order-2 lg:order-1">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                How We Began
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground leading-tight">
                The Vision Behind{" "}
                <span className="text-gradient">SanteThera</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SanteThera was founded on one powerful belief: that everyone
                  deserves access to world-class therapeutic care — without the
                  hassle of travel, waiting rooms, or impersonal clinic
                  environments.
                </p>
                <p>
                  Our mission has always been{" "}
                  <strong className="text-foreground font-semibold">
                    Healing at Home
                  </strong>{" "}
                  — bringing certified, deeply personalised wellness care
                  directly to you. Whether you're recovering from chronic pain,
                  seeking stress relief, or simply gifting yourself the care you
                  deserve, we arrive prepared with every tool and technique you
                  need.
                </p>
                <p>
                  We believe healing is most powerful when it happens in a place
                  where you feel truly safe. That's why every SanteThera session
                  is designed around your comfort, your schedule, and your
                  unique needs.
                </p>
              </div>
              <div className="mt-8 flex gap-4 items-center">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    500+
                  </p>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-0.5">
                    Happy Clients
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    20+
                  </p>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-0.5">
                    Years Experience
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    4
                  </p>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-0.5">
                    Core Therapies
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              {...fadeUp(0.15)}
              className="order-1 lg:order-2 relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated col-span-2">
                  <img
                    src="/assets/generated/about-story-bg.dim_1200x700.jpg"
                    alt="SanteThera wellness sanctuary"
                    className="w-full object-cover"
                    style={{ maxHeight: "320px" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.58 0.23 330 / 0.12), transparent)",
                    }}
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/assets/generated/about-massage-2.dim_800x600.jpg"
                    alt="SanteThera therapist at work"
                    className="w-full object-cover"
                    style={{ height: "180px" }}
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="/assets/generated/home-wellness-1.dim_800x600.jpg"
                    alt="Wellness relaxation experience"
                    className="w-full object-cover"
                    style={{ height: "180px" }}
                  />
                </div>
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full -z-10 blur-xl"
                style={{ background: "oklch(0.78 0.15 330 / 0.35)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider color="oklch(0.97 0.02 320)" flip />

      {/* ── Section 2: Therapist — image left, text right ── */}
      <section className="py-24 section-alt" aria-label="Our therapist">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div {...fadeUp()} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/about-therapist.dim_800x1000.jpg"
                  alt="SanteThera Lead Therapist"
                  className="w-full object-cover"
                  style={{ maxHeight: "600px" }}
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    boxShadow: "inset 0 -80px 100px oklch(0.58 0.23 330 / 0.2)",
                  }}
                />
              </div>

              {/* Floating years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 glass-soft p-5 rounded-2xl shadow-elevated"
              >
                <p className="font-display text-4xl font-bold text-primary leading-none">
                  20+
                </p>
                <p className="text-muted-foreground text-sm font-medium mt-1">
                  Years of Expertise
                </p>
              </motion.div>

              {/* Decorative accent */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full -z-10 blur-xl"
                style={{ background: "oklch(0.72 0.18 58 / 0.4)" }}
              />
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.15)}>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Meet Your Therapist
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground leading-tight">
                Where Expertise Meets{" "}
                <span className="text-gradient">Compassion</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our lead therapist brings over{" "}
                  <strong className="text-foreground font-semibold">
                    20 years of international clinical experience
                  </strong>{" "}
                  spanning Thai massage, palm & feet reflexology, chiropractic
                  bone adjustment, and deep tissue therapy.
                </p>
                <p>
                  Trained and certified at prestigious wellness institutions
                  across Thailand, India, and Europe, every technique is
                  grounded in both ancient Eastern wisdom and evidence-based
                  modern science. This rare fusion ensures treatments that are
                  not just relaxing — but genuinely transformative.
                </p>
                <p>
                  With international certifications and a track record of 500+
                  satisfied clients, you are in expert hands every single
                  session.
                </p>
              </div>

              {/* Certification badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Thai Massage Certified",
                  "Reflexology Expert",
                  "Chiropractic Trained",
                  "Deep Tissue Specialist",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: "oklch(0.58 0.23 330 / 0.3)",
                      color: "oklch(0.50 0.22 330)",
                      background: "oklch(0.58 0.23 330 / 0.06)",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider color="oklch(0.98 0.01 320)" />

      {/* ── Section 3: Mission & Values ── */}
      <section className="py-24 bg-background" aria-label="Mission and values">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              Our Mission & <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Every session is guided by a clear philosophy — healing should be
              accessible, expert, and always centred on you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {missionValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.12,
                }}
                className="glass-soft p-8 hover:shadow-elevated transition-smooth group text-center"
                data-ocid={`value-card-${i}`}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-wellness group-hover:scale-110 transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.23 330), oklch(0.68 0.18 280), oklch(0.74 0.18 58))",
                  }}
                >
                  <v.icon size={26} className="text-white" aria-hidden="true" />
                </div>
                {/* Gold accent line */}
                <div
                  className="w-10 h-0.5 mx-auto mb-4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.74 0.18 58), oklch(0.80 0.16 58 / 0.5))",
                  }}
                />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Brand philosophy"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.025 330) 0%, oklch(0.96 0.03 290) 50%, oklch(0.97 0.02 60) 100%)",
        }}
      >
        {/* Decorative background orbs */}
        <div
          className="absolute top-8 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.85 0.12 330 / 0.25)" }}
        />
        <div
          className="absolute bottom-8 right-1/4 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.82 0.13 290 / 0.2)" }}
        />

        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            {/* Opening quote mark */}
            <div
              className="font-display text-8xl leading-none mb-4 select-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.74 0.18 58), oklch(0.70 0.20 330))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "0.8",
              }}
              aria-hidden="true"
            >
              "
            </div>

            <blockquote>
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic mb-6">
                True wellness is not found in a clinic — it is felt in the quiet
                of your own space, held in experienced hands, and nurtured with
                genuine care.
              </p>
              <footer>
                <div
                  className="w-12 h-0.5 mx-auto mb-4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.74 0.18 58), oklch(0.70 0.20 330))",
                  }}
                />
                <cite className="text-primary font-semibold text-sm uppercase tracking-widest not-italic">
                  — SanteThera Philosophy
                </cite>
              </footer>
            </blockquote>

            {/* Closing quote mark */}
            <div
              className="font-display text-8xl leading-none mt-2 select-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.20 330), oklch(0.74 0.18 58))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "0.8",
              }}
              aria-hidden="true"
            >
              "
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Book appointment"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.45 0.22 330) 0%, oklch(0.38 0.18 300) 50%, oklch(0.32 0.14 270) 100%)",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/3 -left-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.72 0.18 58 / 0.25)" }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-12 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "oklch(0.75 0.15 330 / 0.2)" }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Begin Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your Healing Awaits
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Experience the SanteThera difference — authentic, certified, and
              deeply personal wellness care delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5 transition-smooth"
                style={{
                  background: "white",
                  color: "oklch(0.45 0.22 330)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
                data-ocid="about-final-cta-book"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 12px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.2)";
                }}
              >
                Book an Appointment <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5 transition-smooth border-2"
                style={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "white",
                  background: "transparent",
                }}
                data-ocid="about-view-services-cta"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
