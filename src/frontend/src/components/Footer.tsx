import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { WaveDivider } from "./WaveDivider";

const WHATSAPP_NUMBER = "919876543210";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="relative" style={{ background: "oklch(0.20 0.04 330)" }}>
      <WaveDivider color="oklch(0.20 0.04 330)" flip />

      <div className="container mx-auto px-4 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/logo.webp"
                alt="SanteThera"
                className="h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1) opacity(0.9)" }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Premium door-to-door massage therapy bringing certified healing to
              your home. 20+ years of international expertise.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="text-white" size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110 bg-white/10 hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110 bg-white/10 hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Our Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/55 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-primary mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="text-white/55 hover:text-white text-sm transition-smooth"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@santethera.com"
                  className="text-white/55 hover:text-white text-sm transition-smooth"
                >
                  hello@santethera.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  Home visits across Mumbai & suburbs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {year} SanteThera. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
