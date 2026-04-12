import { Link, createRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Home, Shield, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { WaveDivider } from "../components/WaveDivider";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const services = [
  {
    title: "Head, Neck & Shoulder",
    desc: "Migraine, sinus, cervical pain & frozen shoulder relief with 60-min power therapy",
    price: "₹4,000",
    img: "/assets/generated/service-neck-shoulder.dim_800x600.jpg",
  },
  {
    title: "Backache Full Therapy",
    desc: "Chiropractic bone adjustment + dynamic theramassage in 45-min session",
    price: "₹3,500",
    img: "/assets/generated/service-back.dim_800x600.jpg",
  },
  {
    title: "Palm & Feet Reflexology",
    desc: "Numbness, cramps & sciatica relief — 60-min deep relaxation experience",
    price: "₹4,000",
    img: "/assets/generated/service-reflexology.dim_800x600.jpg",
  },
  {
    title: "Thai Deep Tissue Massage",
    desc: "120-min intensive Thai sessions with curated multi-session packages",
    price: "from ₹35,000",
    img: "/assets/generated/service-thai.dim_800x600.jpg",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Certified Therapist",
    desc: "International certifications backed by 20+ years of clinical expertise",
  },
  {
    icon: Home,
    title: "Home Service",
    desc: "Premium wellness brought to your doorstep — zero travel, pure relaxation",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Book sessions at your convenience, available 7 days a week",
  },
  {
    icon: Star,
    title: "Holistic Healing",
    desc: "Traditional and modern techniques fused for complete body restoration",
  },
];

function FloatingOrbs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-10 w-36 h-36 rounded-full opacity-20"
        style={{ background: "oklch(0.85 0.12 330)" }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-48 right-12 w-24 h-24 rounded-full opacity-15"
        style={{ background: "oklch(0.78 0.16 280)" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3.5,
        }}
        className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full opacity-20"
        style={{ background: "oklch(0.82 0.12 58)" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-24 right-1/3 w-16 h-16 rounded-full opacity-12"
        style={{ background: "oklch(0.80 0.14 310)" }}
      />
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-massage.dim_1600x900.jpg')",
          }}
        />
        {/* Gradient overlay — pink/magenta/purple */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.10 335 / 0.88) 0%, oklch(0.26 0.12 300 / 0.72) 55%, oklch(0.22 0.07 270 / 0.55) 100%)",
          }}
        />
        <FloatingOrbs />

        <div className="relative container mx-auto px-4 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            {/* Eyebrow badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "oklch(0.58 0.23 330 / 0.28)",
                color: "oklch(0.95 0.05 320)",
                border: "1px solid oklch(0.75 0.15 330 / 0.4)",
              }}
            >
              <Sparkles size={12} />
              Premium Door-to-Door Wellness
            </motion.span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Experience Healing
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.90 0.10 330), oklch(0.82 0.14 60))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                at Your Doorstep
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              A premium therapy experience crafted for your well-being —
              certified techniques, healing touch, and total restoration,
              delivered right to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary text-base"
                data-ocid="hero-cta-book"
              >
                Book Appointment <ArrowRight size={18} className="ml-1.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-3.5 transition-smooth cursor-pointer border-2 text-base"
                style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
                data-ocid="hero-cta-services"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Wave → Services ──────────────────────────────────── */}
      <WaveDivider color="oklch(0.98 0.01 320)" />

      {/* ── Services preview ─────────────────────────────────── */}
      <section className="py-20 bg-background" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              Signature Therapies
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Each treatment is tailored by a highly experienced international
              certified therapist with 20+ years of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="btn-outline text-sm"
              data-ocid="services-view-all"
            >
              View All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Wave → Why Us ────────────────────────────────────── */}
      <section className="section-alt relative">
        <WaveDivider color="oklch(0.98 0.01 320)" flip />

        <div className="py-20 relative">
          {/* Background decorative orbs */}
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div
              className="absolute -top-8 -right-8 w-64 h-64 rounded-full opacity-8"
              style={{ background: "oklch(0.85 0.10 330)" }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-8"
              style={{ background: "oklch(0.82 0.12 280)" }}
            />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Why SanteThera
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
                The SanteThera Difference
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto text-base">
                Healing that comes to you — professionally, safely, and with
                genuine care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="glass-soft p-7 text-center group hover:shadow-elevated transition-smooth"
                  data-ocid={`why-us-card-${i}`}
                >
                  <div className="w-14 h-14 rounded-2xl gradient-glow flex items-center justify-center mx-auto mb-4 shadow-wellness group-hover:scale-110 transition-smooth">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <WaveDivider color="oklch(0.98 0.01 320)" />
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Client Love
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Real stories from real people who've felt the SanteThera
              difference
            </p>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.42 0.22 335) 0%, oklch(0.48 0.20 295) 55%, oklch(0.44 0.18 270) 100%)",
          }}
        />

        {/* Decorative floating circles */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10"
            style={{
              background: "oklch(0.92 0.08 60)",
              transform: "translate(-45%, -45%)",
            }}
          />
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{
              background: "oklch(0.85 0.10 280)",
              transform: "translate(40%, 40%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
            style={{ background: "white" }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 text-white/80 border border-white/20">
              <Sparkles size={12} />
              Begin Today
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Begin Your Healing
              <br />
              Journey Today
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Let our certified therapist bring premium wellness to your home.
              Your transformation awaits.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 font-semibold rounded-full px-9 py-4 transition-smooth text-base hover:scale-105 hover:shadow-elevated"
              style={{
                background: "white",
                color: "oklch(0.48 0.22 330)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              data-ocid="cta-banner-book"
            >
              Book Your Session <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
