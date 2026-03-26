import { motion } from "framer-motion";
import geoParametric from "@/assets/geo-parametric.png";
import geoScatter from "@/assets/geo-scatter.png";

const features = [
  "500+ production-ready meshes and curves",
  "Polyhedra, parametric, implicit, and TPMS forms",
  "Available directly in Blender 3D Viewport",
  "Design, shading, rendering, animation & exploration",
];

const ProductSection = () => {
  return (
    <section id="product" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glow-border rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-glow-secondary/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-mono text-primary tracking-[0.2em] uppercase">
                Featured Product
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Mesh Encyclopedia
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A Blender add-on that provides a continuously updated library of
                production-ready meshes and curves for professional workflows.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-secondary-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{f}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="https://superhivemarket.com/products/mesh-encyclopedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[var(--shadow-glow)] text-lg"
              >
                Get Mesh Encyclopedia
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>

            {/* Product images showcase */}
            <div className="hidden md:flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-border/30"
              >
                <img
                  src={geoParametric}
                  alt="Parametric mesh shapes from Mesh Encyclopedia"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl overflow-hidden border border-border/30"
              >
                <img
                  src={geoScatter}
                  alt="Scattered polyhedra from Mesh Encyclopedia library"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
