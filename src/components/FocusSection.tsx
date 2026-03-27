import { motion } from "framer-motion";
import geoStellation from "@/assets/geo-stellation.png";
import GG from "@/assets/GG.jpeg";
import geoRibbon from "@/assets/geo-ribbon.png";
import CG from "@/assets/CG.png";
import tools_3d from "@/assets/3d_tools.png";

const areas = [
  {
    title: "Computational Geometry",
    description: "From mesh processing and procedural modeling to geometric optimization, we combine mathematical rigor with visual creativity. Our goal is to bridge theory and practice—bringing geometric ideas to life in a dynamic, visual environment.",
    image: CG,
    alt: "Stellation polyhedron — computational geometry",
  },
  {
    title: "Generative Geometry",
    description: "Instead of modeling shapes by hand, we build procedural systems that generate them—unlocking rich patterns, complexity, and unexpected forms. Blending mathematics, computation, and Blender’s powerful toolset, GG empowers creators to explore geometry in a more dynamic, iterative way—redefining how structure, space, and design come to life.",
    image: GG,
    alt: "Gyroid TPMS surface — optimization and AI",
  },
  {
    title: "3D Tooling",
    description: "Accelerate 3D editing workflow with faster modeling, deeper geometry exploration, and seamless iteration—all in one intuitive experience.",
    image: tools_3d,
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
