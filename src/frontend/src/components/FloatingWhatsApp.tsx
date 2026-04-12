import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello SanteThera! I'd like to book a therapy session.",
);

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
      data-ocid="floating-whatsapp"
    >
      {/* Pulse rings */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: "#25D366", opacity: 0.4 }}
      />
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: "#25D366", opacity: 0.25, animationDelay: "0.6s" }}
      />

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-smooth group-hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <SiWhatsapp className="text-white" size={26} />
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-elevated">
        Chat on WhatsApp
      </span>
    </a>
  );
}
