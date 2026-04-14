import { Link, createRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { WaveDivider } from "../components/WaveDivider";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

interface PriceOption {
  sessions: string;
  price: string;
}

interface Service {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceOptions: PriceOption[] | null;
  duration: string;
  images: string[];
  tag: string;
  tagGradient: string;
  glowColor: string;
  conditions: string[];
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: "head-neck",
    title: "Head, Neck & Shoulder Therapy",
    subtitle: "60 Min Power Therapy",
    price: "₹4,000",
    priceOptions: null,
    duration: "60 min",
    images: [
      "/assets/generated/service-neck-shoulder.dim_800x600.jpg",
      "/assets/generated/service-neck-2.dim_800x600.jpg",
      "/assets/generated/service-neck-3.dim_800x600.jpg",
    ],
    tag: "Most Popular",
    tagGradient:
      "linear-gradient(135deg, oklch(0.58 0.23 330), oklch(0.62 0.2 305))",
    glowColor: "oklch(0.58 0.23 330 / 0.35)",
    conditions: [
      "Migraine Relief",
      "Sinus Therapy",
      "Cervical Pain",
      "Frozen Shoulder",
    ],
    description:
      "A focused power therapy targeting the upper body's most tension-prone zones. Advanced pressure techniques and therapeutic movements alleviate chronic pain, improve circulation, and restore natural mobility to the head, neck, and shoulder region.",
    details: [
      "Deep tissue pressure on trigger points",
      "Cervical spine decompression techniques",
      "Shoulder joint mobility restoration",
      "Headache and migraine relief protocol",
    ],
  },
  {
    id: "back",
    title: "Backache Full Therapy",
    subtitle: "Chiropractic Bone Adjustment + Dynamic Theramassage",
    price: "₹3,500",
    priceOptions: null,
    duration: "45 min",
    images: [
      "/assets/generated/service-back.dim_800x600.jpg",
      "/assets/generated/service-back-2.dim_800x600.jpg",
      "/assets/generated/service-back-3.dim_800x600.jpg",
    ],
    tag: "Deep Relief",
    tagGradient:
      "linear-gradient(135deg, oklch(0.52 0.2 280), oklch(0.6 0.18 300))",
    glowColor: "oklch(0.62 0.18 280 / 0.35)",
    conditions: [
      "Lower Back Pain",
      "Disc Issues",
      "Muscle Tension",
      "Postural Correction",
    ],
    description:
      "Comprehensive back treatment combining gentle chiropractic adjustments with dynamic theramassage. This dual approach addresses structural imbalances and muscular tension for lasting relief from chronic backache.",
    details: [
      "Gentle chiropractic bone adjustment",
      "Dynamic theramassage along spine",
      "Lumbar decompression techniques",
      "Posture realignment therapy",
    ],
  },
  {
    id: "reflexology",
    title: "Palm & Feet Reflexology",
    subtitle: "60 Min Relaxation",
    price: "₹4,000",
    priceOptions: null,
    duration: "60 min",
    images: [
      "/assets/generated/service-reflexology.dim_800x600.jpg",
      "/assets/generated/service-reflexology-2.dim_800x600.jpg",
      "/assets/generated/service-reflexology-3.dim_800x600.jpg",
    ],
    tag: "Full Body Reset",
    tagGradient:
      "linear-gradient(135deg, oklch(0.65 0.17 58), oklch(0.7 0.15 45))",
    glowColor: "oklch(0.74 0.18 58 / 0.35)",
    conditions: ["Numbness", "Cramps", "Sciatica", "Peripheral Neuropathy"],
    description:
      "Ancient reflexology wisdom applied with precision. Stimulating pressure points in the hands and feet activates the body's natural healing pathways, bringing relief from nerve-related conditions and restoring whole-body balance.",
    details: [
      "Zone therapy on all reflex points",
      "Sciatic nerve release techniques",
      "Circulation enhancement protocols",
      "Nervous system calming massage",
    ],
  },
  {
    id: "thai",
    title: "Thai Deep Tissue Massage",
    subtitle: "120 Min Intensive Sessions",
    price: "",
    priceOptions: [
      { sessions: "4 Sessions", price: "₹35,000" },
      { sessions: "6 Sessions", price: "₹45,000" },
    ],
    duration: "120 min",
    images: [
      "/assets/generated/service-thai.dim_800x600.jpg",
      "/assets/generated/service-thai-2.dim_800x600.jpg",
      "/assets/generated/service-thai-3.dim_800x600.jpg",
    ],
    tag: "Signature",
    tagGradient:
      "linear-gradient(135deg, oklch(0.48 0.24 340), oklch(0.55 0.22 320))",
    glowColor: "oklch(0.55 0.22 330 / 0.35)",
    conditions: [
      "Full Body Tension",
      "Flexibility",
      "Chronic Fatigue",
      "Stress Relief",
    ],
    description:
      "Our signature 2-hour journey combining traditional Thai stretching with deep tissue techniques. Systematically releases tension from every muscle group, improving flexibility and delivering profound restoration.",
    details: [
      "Traditional Thai yoga stretching",
      "Deep tissue fascial release",
      "Pressure point meridian therapy",
      "Full body energy restoration",
    ],
  },
];

function ServiceCarousel({
  images,
  title,
}: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-0 group overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={`${title}-${current}`}
          src={images[current]}
          alt={`${title} therapy session ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 55%, rgba(10,2,15,0.38) 100%)",
        }}
      />

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-dark flex items-center justify-center opacity-70 hover:opacity-100 transition-smooth hover:scale-110 focus-visible:opacity-100"
      >
        <ArrowLeft size={16} className="text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-dark flex items-center justify-center opacity-70 hover:opacity-100 transition-smooth hover:scale-110 focus-visible:opacity-100"
      >
        <ArrowRight size={16} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            aria-label={`View session ${images.indexOf(src) + 1}`}
            onClick={() => setCurrent(images.indexOf(src))}
            className="transition-smooth cursor-pointer"
            style={{
              width: images.indexOf(src) === current ? "20px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background:
                images.indexOf(src) === current
                  ? "white"
                  : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceSplitCard({
  service,
  index,
}: { service: Service; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl shadow-elevated bg-card"
      data-ocid={`service-card-${service.id}`}
    >
      <div className="grid lg:grid-cols-2 min-h-[420px] lg:min-h-[460px]">
        {/* Carousel side */}
        <div
          className={`relative overflow-hidden ${
            isEven
              ? "order-1 lg:order-2 rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl"
              : "order-1 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl"
          }`}
          style={{ minHeight: "300px" }}
        >
          <ServiceCarousel images={service.images} title={service.title} />
        </div>

        {/* Content side */}
        <div
          className={`flex flex-col justify-center p-7 lg:p-10 gap-4 ${
            isEven ? "order-2 lg:order-1" : "order-2"
          }`}
        >
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide"
              style={{ background: service.tagGradient }}
            >
              {service.tag}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              <Clock size={11} />
              {service.duration}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-1">
              {service.title}
            </h2>
            <p className="text-primary text-sm font-semibold">
              {service.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>

          {/* Details */}
          <ul className="space-y-1.5">
            {service.details.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  size={14}
                  className="text-primary mt-0.5 shrink-0"
                />
                {d}
              </li>
            ))}
          </ul>

          {/* Condition tags */}
          <div className="flex flex-wrap gap-1.5">
            {service.conditions.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/15"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-4 pt-3 border-t border-border">
            {service.priceOptions ? (
              <div className="flex gap-2 flex-wrap">
                {service.priceOptions.map((opt) => (
                  <div
                    key={opt.sessions}
                    className="text-center px-3 py-2 rounded-2xl border border-primary/20 bg-primary/5"
                  >
                    <p className="font-display text-sm font-bold text-primary leading-none">
                      {opt.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {opt.sessions}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="font-display text-3xl font-bold text-primary leading-none">
                  {service.price}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  per session
                </p>
              </div>
            )}
            <Link
              to="/contact"
              className="btn-primary text-sm whitespace-nowrap shrink-0"
              data-ocid={`service-book-${service.id}`}
            >
              Book Now <ArrowRight size={15} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ServicesPage() {
  return (
    <>
      {/* ── Hero with background image & animations ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        {/* Background image with subtle zoom */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/services-hero-bg.dim_1600x900.jpg')",
          }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.22 0.12 330 / 0.85) 0%, oklch(0.28 0.12 295 / 0.72) 55%, oklch(0.20 0.08 270 / 0.6) 100%)",
          }}
        />

        {/* Floating orbs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-8 w-48 h-48 rounded-full opacity-20"
            style={{ background: "oklch(0.80 0.14 330)" }}
          />
          <motion.div
            animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-24 right-12 w-36 h-36 rounded-full opacity-15"
            style={{ background: "oklch(0.78 0.16 280)" }}
          />
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo in hero */}
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-dark px-5 py-2 rounded-full mb-5"
            >
              <Star size={13} className="text-white/80" />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
                Signature Offerings
              </span>
              <Star size={13} className="text-white/80" />
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-1 mb-5 text-white leading-tight">
              Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.90 0.10 330), oklch(0.82 0.14 60))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Therapies
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Delivered by a highly experienced international certified
              therapist with{" "}
              <strong className="text-white font-semibold">
                20+ years of expertise
              </strong>{" "}
              — right at your doorstep.
            </p>

            {/* Animated scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col items-center gap-2 mt-10"
              aria-hidden="true"
            >
              <span className="text-white/50 text-xs tracking-widest uppercase">
                Scroll to explore
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
          </motion.div>
        </div>
      </section>

      <WaveDivider color="oklch(0.98 0.01 320)" />

      {/* ── Services — split layout with carousels ── */}
      <section className="py-20 bg-background">
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
              Explore Each <span className="text-gradient">Therapy</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Each treatment is tailored — description on one side, real session
              photos with a carousel on the other
            </p>
          </motion.div>

          <div className="space-y-10 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <ServiceSplitCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── All-inclusive callout ── */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="relative rounded-3xl p-8 md:p-10 text-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.98 0.03 330 / 0.9), oklch(0.97 0.03 290 / 0.9))",
                border: "1.5px solid oklch(0.74 0.18 58 / 0.4)",
                boxShadow: "0 4px 32px oklch(0.74 0.18 58 / 0.12)",
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-32 rounded-b-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.74 0.18 58), transparent)",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.74 0.18 58 / 0.15), oklch(0.74 0.18 58 / 0.05))",
                  border: "1px solid oklch(0.74 0.18 58 / 0.25)",
                }}
              >
                <Sparkles size={26} style={{ color: "oklch(0.62 0.18 55)" }} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                All-Inclusive Premium Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
                All treatments include materials and visiting charges by a
                highly experienced international certified therapist with{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "oklch(0.55 0.18 55)" }}
                >
                  20+ years of experience
                </strong>
                . No hidden costs — complete healing delivered to your home.
              </p>
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="btn-primary"
                  data-ocid="services-bottom-cta"
                >
                  Book an Appointment <ArrowRight size={17} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
