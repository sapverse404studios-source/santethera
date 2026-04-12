import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export interface ServiceCardData {
  title: string;
  desc: string;
  price: string;
  img: string;
  index: number;
}

export function ServiceCard({
  title,
  desc,
  price,
  img,
  index,
}: ServiceCardData) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card group"
      data-ocid={`service-card-${index}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-smooth"
          style={{
            background:
              "linear-gradient(to top, oklch(0.18 0.06 330 / 0.78) 0%, oklch(0.18 0.06 330 / 0.1) 50%, transparent 100%)",
          }}
        />
        {/* Price badge */}
        <span
          className="absolute bottom-3 right-3 font-display font-bold text-base px-3 py-1 rounded-full text-white"
          style={{
            background: "oklch(0.55 0.23 330 / 0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          {price}
        </span>
        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1.5px oklch(0.70 0.18 330 / 0.4)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 pb-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {desc}
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-smooth group/link"
          data-ocid={`service-card-link-${index}`}
        >
          Discover more{" "}
          <ArrowRight
            size={14}
            className="transition-smooth group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}
