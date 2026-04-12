import { Link, createRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
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
  img: string;
  tag: string;
  tagGradient: string;
  glowColor: string;
  conditions: string[];
  description: string;
}

const services: Service[] = [
  {
    id: "head-neck",
    title: "Head, Neck & Shoulder Therapy",
    subtitle: "60 Min Power Therapy",
    price: "₹4,000",
    priceOptions: null,
    duration: "60 min",
    img: "/assets/generated/service-neck-shoulder.dim_800x600.jpg",
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
      "A focused power therapy targeting the upper body's most tension-prone zones. Advanced pressure techniques and therapeutic movements alleviate chronic pain, improve circulation, and restore natural mobility.",
  },
  {
    id: "back",
    title: "Backache Full Therapy",
    subtitle: "Chiropractic Bone Adjustment + Dynamic Theramassage",
    price: "₹3,500",
    priceOptions: null,
    duration: "45 min",
    img: "/assets/generated/service-back.dim_800x600.jpg",
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
      "Comprehensive back treatment combining gentle chiropractic adjustments with dynamic theramassage. This dual approach addresses structural imbalances and muscular tension for lasting relief.",
  },
  {
    id: "reflexology",
    title: "Palm & Feet Reflexology",
    subtitle: "60 Min Relaxation",
    price: "₹4,000",
    priceOptions: null,
    duration: "60 min",
    img: "/assets/generated/service-reflexology.dim_800x600.jpg",
    tag: "Full Body Reset",
    tagGradient:
      "linear-gradient(135deg, oklch(0.65 0.17 58), oklch(0.7 0.15 45))",
    glowColor: "oklch(0.74 0.18 58 / 0.35)",
    conditions: ["Numbness", "Cramps", "Sciatica", "Peripheral Neuropathy"],
    description:
      "Ancient reflexology wisdom applied with precision. Stimulating pressure points in the hands and feet activates the body's natural healing pathways, bringing relief from nerve-related conditions.",
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
    img: "/assets/generated/service-thai.dim_800x600.jpg",
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
      "Our signature 2-hour journey combining traditional Thai stretching with deep tissue techniques. Systematically releases tension from every muscle group for profound restoration.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      key={service.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="service-grid-card group flex flex-col"
      data-ocid={`service-card-${service.id}`}
      style={{ "--glow": service.glowColor } as React.CSSProperties}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl shrink-0">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-108"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, rgba(20,5,18,0.72) 100%)",
          }}
        />
        {/* Tag badge */}
        <span
          className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg"
          style={{ background: service.tagGradient }}
        >
          {service.tag}
        </span>
        {/* Duration badge */}
        <span className="absolute top-4 right-4 flex items-center gap-1 glass-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          <Clock size={11} />
          {service.duration}
        </span>
        {/* Title overlay on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h2 className="font-display text-xl font-bold text-white leading-snug drop-shadow-md">
            {service.title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Subtitle */}
        <p className="text-primary text-sm font-semibold leading-snug -mt-1">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Condition tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.conditions.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/15"
            >
              <CheckCircle2 size={10} />
              {c}
            </span>
          ))}
        </div>

        {/* Spacer pushes price + CTA to bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          {service.priceOptions ? (
            <div className="flex gap-2.5">
              {service.priceOptions.map((opt) => (
                <div
                  key={opt.sessions}
                  className="text-center px-3.5 py-2 rounded-2xl border border-primary/20 bg-primary/5"
                >
                  <p className="font-display text-base font-bold text-primary leading-none">
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
            Book Now
            <ArrowRight size={15} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.94 0.05 330) 0%, oklch(0.96 0.04 290) 50%, oklch(0.97 0.03 60) 100%)",
          }}
        />
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.22 330), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, oklch(0.68 0.18 280), transparent 70%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(0.74 0.18 58), transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 glass-soft px-5 py-2 rounded-full mb-5 shadow-wellness">
              <Star size={14} className="text-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Signature Offerings
              </span>
              <Star size={14} className="text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-1 mb-5 text-foreground">
              Our <span className="text-gradient">Therapies</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Delivered by a highly experienced international certified
              therapist with{" "}
              <strong className="text-primary">20+ years of expertise</strong> —
              right at your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="oklch(0.98 0.01 320)" />

      {/* ── Service Cards Grid ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Note callout ── */}
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
                boxShadow:
                  "0 4px 32px oklch(0.74 0.18 58 / 0.12), 0 0 0 1px oklch(0.74 0.18 58 / 0.08)",
              }}
            >
              {/* Gold accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-32 rounded-b-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.74 0.18 58), transparent)",
                }}
              />
              {/* Sparkle icon */}
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

              {/* CTA */}
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="btn-primary"
                  data-ocid="services-bottom-cta"
                >
                  Book an Appointment
                  <ArrowRight size={17} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
