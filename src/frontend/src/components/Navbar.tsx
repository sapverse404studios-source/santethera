import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Book Now" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPath = router.state.location.pathname;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass-soft shadow-wellness py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand with logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav-brand"
        >
          <img
            src="/assets/logo.webp"
            alt="SanteThera logo"
            className="h-12 w-auto object-contain drop-shadow-md transition-smooth group-hover:scale-105"
            style={{ maxWidth: "160px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth glow-ring ${
                currentPath === link.to
                  ? "text-primary bg-primary/8"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
              data-ocid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary ml-2 py-2.5 px-6 text-sm"
            data-ocid="nav-cta"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-foreground/70 hover:text-primary hover:bg-primary/8 transition-smooth glow-ring"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-ocid="nav-hamburger"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-smooth overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-soft mx-4 mt-2 mb-1 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-smooth glow-ring ${
                currentPath === link.to
                  ? "text-primary bg-primary/8 font-semibold"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              } ${link.label === "Book Now" ? "mt-2 btn-primary text-center py-3" : ""}`}
              data-ocid={`mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
