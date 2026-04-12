import { createRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SiWhatsapp } from "react-icons/si";
import { WaveDivider } from "../components/WaveDivider";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const WHATSAPP_NUMBER = "919999999999";

const serviceOptions = [
  {
    label: "Head, Neck and Shoulder Therapy — 60 Min — ₹4,000",
    value: "Head, Neck and Shoulder Therapy (60 min - ₹4,000)",
  },
  {
    label: "Backache Full Therapy — 45 Min — ₹3,500",
    value: "Backache Full Therapy (45 min - ₹3,500)",
  },
  {
    label: "Palm and Feet Reflexology — 60 Min — ₹4,000",
    value: "Palm and Feet Reflexology (60 min - ₹4,000)",
  },
  {
    label: "Thai Deep Tissue Massage — 4 Sessions — ₹35,000",
    value: "Thai Deep Tissue Massage (4 Sessions - ₹35,000)",
  },
  {
    label: "Thai Deep Tissue Massage — 6 Sessions — ₹45,000",
    value: "Thai Deep Tissue Massage (6 Sessions - ₹45,000)",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

interface BookingForm {
  name: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
}

function buildWhatsAppMessage(data: BookingForm): string {
  const msg = [
    "New Appointment Request:",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Address: ${data.address}`,
    `Service: ${data.service}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
  ].join("\n");
  return encodeURIComponent(msg);
}

const contactDetails = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 99999 99999",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Mumbai & surrounding suburbs",
    href: undefined as string | undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sun, 9 AM – 8 PM",
    href: undefined as string | undefined,
  },
];

const trustPoints = [
  "All materials & equipment included",
  "International certified therapist",
  "20+ years of clinical experience",
  "Home visits — no travel needed",
  "Flexible scheduling 7 days/week",
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 glow-ring transition-smooth placeholder:text-muted-foreground/60";

function ContactPage() {
  const [redirecting, setRedirecting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>();

  const onSubmit = (data: BookingForm) => {
    setRedirecting(true);
    const msg = buildWhatsAppMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setRedirecting(false);
    }, 1200);
  };

  const today = new Date().toISOString().split("T")[0];
  const busy = isSubmitting || redirecting;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-4 overflow-hidden section-alt">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.18 330), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.68 0.18 280), transparent)",
            }}
          />
          {/* Floating leaf */}
          <svg
            aria-hidden="true"
            className="absolute top-28 left-12 opacity-20 animate-float-slow"
            width="48"
            height="60"
            viewBox="0 0 48 60"
            fill="none"
          >
            <path
              d="M24 2C24 2 44 16 44 34C44 47 35 56 24 58C13 56 4 47 4 34C4 16 24 2 24 2Z"
              fill="oklch(0.58 0.23 330)"
            />
          </svg>
          <svg
            aria-hidden="true"
            className="absolute top-48 right-20 opacity-15 animate-float-slow"
            width="32"
            height="40"
            viewBox="0 0 48 60"
            fill="none"
            style={{ animationDelay: "1.5s" }}
          >
            <path
              d="M24 2C24 2 44 16 44 34C44 47 35 56 24 58C13 56 4 47 4 34C4 16 24 2 24 2Z"
              fill="oklch(0.74 0.18 58)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              <Sparkles size={13} /> Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-2 mb-5 text-foreground leading-tight">
              Book <span className="text-gradient">Your Session</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Fill in the details below and we'll confirm your appointment via
              WhatsApp within minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="oklch(0.98 0.01 320)" />

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-1 space-y-5"
            >
              {/* WhatsApp card */}
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <div
                  className="p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  <SiWhatsapp className="text-white mb-3" size={30} />
                  <h3 className="text-white font-display text-xl font-bold mb-1">
                    Quick Connect
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Prefer chatting directly? Message us instantly on WhatsApp.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-semibold transition-smooth hover:scale-105 hover:shadow-lg"
                    style={{ color: "#128C7E" }}
                    data-ocid="contact-whatsapp-direct"
                  >
                    <SiWhatsapp size={14} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-subtle">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactDetails.map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl gradient-glow flex items-center justify-center shrink-0 shadow-wellness">
                        <c.icon size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground text-sm font-medium hover:text-primary transition-smooth"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm font-medium">
                            {c.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-subtle">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  Why Book With Us
                </h3>
                <ul className="space-y-2.5">
                  {trustPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service note */}
              <div
                className="rounded-3xl p-5 border"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.95 0.04 330 / 0.5), oklch(0.96 0.03 280 / 0.4))",
                  borderColor: "oklch(0.85 0.08 330 / 0.4)",
                }}
              >
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Note:</span> All
                  treatments include materials and visiting charges by a highly
                  experienced international certified therapist with 20+ years
                  of experience.
                </p>
              </div>
            </motion.aside>

            {/* Booking form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="lg:col-span-2"
            >
              {/* Glassmorphism card */}
              <div
                className="rounded-3xl overflow-hidden shadow-elevated"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(220,120,180,0.25)",
                }}
              >
                {/* Form header with gradient */}
                <div
                  className="p-6 border-b"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.94 0.06 330 / 0.7) 0%, oklch(0.95 0.04 280 / 0.6) 50%, oklch(0.96 0.04 60 / 0.4) 100%)",
                    borderColor: "oklch(0.85 0.08 330 / 0.3)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-glow flex items-center justify-center shadow-wellness">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground">
                        Appointment Request
                      </h2>
                      <p className="text-muted-foreground text-xs">
                        We'll confirm via WhatsApp — usually within 30 minutes
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-6 md:p-8 space-y-5"
                  noValidate
                  data-ocid="booking-form"
                >
                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-semibold text-foreground"
                        htmlFor="name"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={`${inputBase} ${errors.name ? "border-destructive" : "border-input"}`}
                        data-ocid="form-name"
                        {...register("name", {
                          required: "This field is required",
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {errors.name && (
                          <motion.p
                            key="name-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-destructive text-xs"
                            role="alert"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-semibold text-foreground"
                        htmlFor="phone"
                      >
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 99999 99999"
                        className={`${inputBase} ${errors.phone ? "border-destructive" : "border-input"}`}
                        data-ocid="form-phone"
                        {...register("phone", {
                          required: "This field is required",
                          validate: (v) =>
                            /^\+?[\d\s\-()]{10,}$/.test(v.trim()) ||
                            "Please enter a valid phone number (minimum 10 digits)",
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {errors.phone && (
                          <motion.p
                            key="phone-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-destructive text-xs"
                            role="alert"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5">
                    <label
                      className="text-sm font-semibold text-foreground"
                      htmlFor="address"
                    >
                      Home Address <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="address"
                      rows={2}
                      placeholder="Building, street, area, city"
                      className={`${inputBase} resize-none ${errors.address ? "border-destructive" : "border-input"}`}
                      data-ocid="form-address"
                      {...register("address", {
                        required: "This field is required",
                      })}
                    />
                    <AnimatePresence mode="wait">
                      {errors.address && (
                        <motion.p
                          key="address-err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-destructive text-xs"
                          role="alert"
                        >
                          {errors.address.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label
                      className="text-sm font-semibold text-foreground"
                      htmlFor="service"
                    >
                      Select Service <span className="text-primary">*</span>
                    </label>
                    <select
                      id="service"
                      className={`${inputBase} ${errors.service ? "border-destructive" : "border-input"}`}
                      data-ocid="form-service"
                      {...register("service", {
                        required: "This field is required",
                      })}
                    >
                      <option value="">Choose a therapy</option>
                      {serviceOptions.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <AnimatePresence mode="wait">
                      {errors.service && (
                        <motion.p
                          key="service-err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-destructive text-xs"
                          role="alert"
                        >
                          {errors.service.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Date */}
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-semibold text-foreground"
                        htmlFor="date"
                      >
                        Preferred Date <span className="text-primary">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={today}
                        className={`${inputBase} ${errors.date ? "border-destructive" : "border-input"}`}
                        data-ocid="form-date"
                        {...register("date", {
                          required: "This field is required",
                        })}
                      />
                      <AnimatePresence mode="wait">
                        {errors.date && (
                          <motion.p
                            key="date-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-destructive text-xs"
                            role="alert"
                          >
                            {errors.date.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Time */}
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-semibold text-foreground"
                        htmlFor="time"
                      >
                        Preferred Time <span className="text-primary">*</span>
                      </label>
                      <select
                        id="time"
                        className={`${inputBase} ${errors.time ? "border-destructive" : "border-input"}`}
                        data-ocid="form-time"
                        {...register("time", {
                          required: "This field is required",
                        })}
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence mode="wait">
                        {errors.time && (
                          <motion.p
                            key="time-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-destructive text-xs"
                            role="alert"
                          >
                            {errors.time.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Redirecting status */}
                  <AnimatePresence>
                    {redirecting && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 rounded-2xl px-5 py-3.5"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.95 0.04 140 / 0.3), oklch(0.96 0.03 150 / 0.2))",
                          border: "1px solid oklch(0.75 0.14 140 / 0.4)",
                        }}
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <SiWhatsapp size={18} style={{ color: "#25D366" }} />
                        <p className="text-sm font-medium text-foreground">
                          Redirecting to WhatsApp…
                        </p>
                        <span className="ml-auto flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{
                                background: "#25D366",
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={busy}
                    className="btn-primary w-full py-4 text-base mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      boxShadow: busy
                        ? "none"
                        : "0 6px 28px oklch(0.58 0.23 330 / 0.42), 0 0 0 0 oklch(0.58 0.23 330 / 0)",
                    }}
                    data-ocid="form-submit"
                  >
                    <SiWhatsapp size={18} className="mr-2.5" />
                    {busy ? "Booking…" : "Book via WhatsApp"}
                  </button>

                  <p className="text-center text-xs text-muted-foreground leading-relaxed">
                    You'll be redirected to WhatsApp to confirm your
                    appointment.{" "}
                    <span className="font-medium text-primary/80">
                      We typically respond within 30 minutes.
                    </span>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 section-alt relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.68 0.18 280), transparent)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions? We're Here
            </h2>
            <p className="text-muted-foreground mb-7 leading-relaxed max-w-lg mx-auto">
              Reach out directly via WhatsApp for instant answers, service
              enquiries, or to reschedule your appointment.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5"
              data-ocid="contact-whatsapp-cta"
            >
              <SiWhatsapp size={18} />
              Message Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
