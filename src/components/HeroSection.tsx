import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import geoStellation from "@/assets/geo-stellation.png";
import geoGyroid from "@/assets/geo-gyroid.png";
import geoRibbon from "@/assets/geo-ribbon.png";
import GeometricBackground from "./GeometricBackground";

const heroImages = [
  {
    src: geoStellation,
    alt: "Stellation polyhedron — computational geometry",
  },
  {
    src: geoGyroid,
    alt: "Gyroid TPMS surface — optimization and AI",
  },
  {
    src: geoRibbon,
    alt: "Smooth ribbon surface — 3D tooling",
  },
];

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <GeometricBackground />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-mono text-primary tracking-[0.3em] uppercase mb-6">
                Computational Geometry · 3D Tooling · AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-5xl md:text-7xl font-bold leading-[1.05] mb-8"
            >
              Expert group for{" "}
              <span className="text-gradient">computational geometry</span>{" "}
              and 3D tool development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Practical geometry technology for production teams, combining
              mathematically rigorous algorithms with artist-friendly 3D workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)]"
              >
                Explore focus areas
              </button>
              <button
                onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 glass-hover rounded-lg font-heading font-medium text-foreground"
              >
                See featured product →
              </button>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroImages[activeImage].src}
                  src={heroImages[activeImage].src}
                  alt={heroImages[activeImage].alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {heroImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                  {heroImages.map((image, i) => (
                    <button
                      key={image.src}
                      type="button"
                      aria-label={`Go to image ${i + 1}`}
                      onClick={() => setActiveImage(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        i === activeImage ? "w-6 bg-primary" : "w-2.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Floating glow behind image */}
            <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
