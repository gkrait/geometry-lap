import { motion } from "framer-motion";
import geoStellation from "@/assets/geo-stellation.png";
import geoGyroid from "@/assets/geo-gyroid.png";
import geoRibbon from "@/assets/geo-ribbon.png";

const areas = [
  {
    title: "Computational Geometry",
    description: "Algorithms for topology-aware shape processing, curves, surfaces, and polyhedral structures.",
    image: geoStellation,
    alt: "Stellation polyhedron — computational geometry",
  },
  {
    title: "Optimization + AI",
    description: "Constraint-based generation and optimization for spatial layouts and design decisions.",
    image: geoGyroid,
    alt: "Gyroid TPMS surface — optimization and AI",
  },
  {
    title: "3D Tooling",
    description: "Blender-centered tools that accelerate modeling, geometry exploration, and iteration.",
    image: geoRibbon,
    alt: "Smooth ribbon surface — 3D tooling",
  },
];

const FocusSection = () => {
  return (
    <section id="focus" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-[0.2em] uppercase">
            Focus Areas
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Where we operate
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
