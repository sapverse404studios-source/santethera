import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    text: "SanteThera has completely transformed my chronic back pain. The therapist is incredibly skilled and professional. The convenience of home service is truly unmatched!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Corporate Executive",
    text: "After years of suffering from migraines, the head & neck therapy has given me profound relief. The 60-minute sessions are deeply healing and worth every rupee.",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    role: "Yoga Instructor",
    text: "The reflexology sessions are absolutely divine. I feel completely restored after each visit. I highly recommend SanteThera to anyone seeking authentic wellness.",
    rating: 5,
  },
  {
    name: "Sunita Rao",
    role: "Homemaker",
    text: "The Thai Deep Tissue massage was life-changing. Decades of stress melted away in a single session. The therapist's expertise and warmth made it a truly sacred experience.",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative max-w-4xl mx-auto"
      data-ocid="testimonials-carousel"
    >
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden rounded-3xl">
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex-none w-full md:w-[calc(50%_+_2rem)] px-3"
            >
              <div
                className="glass-soft p-7 md:p-9 rounded-3xl shadow-elevated h-full flex flex-col"
                data-ocid={`testimonial-slide-${i}`}
              >
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.23 330 / 0.12), oklch(0.68 0.18 280 / 0.12))",
                  }}
                >
                  <Quote
                    size={18}
                    style={{ color: "oklch(0.58 0.23 330)" }}
                    fill="oklch(0.58 0.23 330)"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 text-base leading-relaxed mb-6 italic flex-1">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm font-display shadow-wellness"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.58 0.23 330), oklch(0.68 0.18 280))",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full flex items-center justify-center shadow-elevated transition-smooth hover:scale-110 glow-ring"
        style={{
          background: "white",
          color: "oklch(0.55 0.22 330)",
        }}
        aria-label="Previous testimonial"
        data-ocid="testimonial-prev"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full flex items-center justify-center shadow-elevated transition-smooth hover:scale-110 glow-ring"
        style={{
          background: "white",
          color: "oklch(0.55 0.22 330)",
        }}
        aria-label="Next testimonial"
        data-ocid="testimonial-next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((snap, i) => (
          <button
            key={`dot-snap-${snap}`}
            type="button"
            onClick={() => scrollTo(i)}
            className="rounded-full transition-smooth glow-ring"
            style={{
              width: i === selectedIndex ? "24px" : "8px",
              height: "8px",
              background:
                i === selectedIndex
                  ? "oklch(0.58 0.23 330)"
                  : "oklch(0.58 0.23 330 / 0.25)",
            }}
            aria-label={`Go to testimonial ${i + 1}`}
            data-ocid={`testimonial-dot-${i}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
