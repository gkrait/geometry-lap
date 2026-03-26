import { motion } from "framer-motion";
import geoStellation from "@/assets/geo-stellation.png";
import GeometricBackground from "./GeometricBackground";

const HeroSection = () => {
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
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={geoStellation}
                alt="3D stellation polyhedron rendered in Geometry Lap"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
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
