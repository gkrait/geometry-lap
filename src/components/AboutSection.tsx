import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7 },
  };

  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Who we are */}
          <motion.div {...fadeUp} className="glass-hover rounded-2xl p-10">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
              Who we are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Geometry Lap is a collaborative group of experts in algorithm design,
              optimization, computational geometry, and applied AI for 3D environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to make advanced geometry methods accessible for
              real-world visualization, design automation, and robotics-oriented workflows.
            </p>
          </motion.div>

          {/* What we build */}
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="glass-hover rounded-2xl p-10">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
              What we build
            </h2>
            <ul className="space-y-4">
              {[
                "Geometry-processing tools for modeling, analysis, and automation",
                "Certified and robust numerical methods for complex geometric structures",
                "3D pipeline utilities for planning, simulation, and visualization tasks",
                "Practical integrations that bridge research-grade math and production software",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
