import { motion } from "framer-motion";

import ConsultingContactForm from "@/components/ConsultingContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary tracking-[0.2em] uppercase">
            Contact us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Algorithm design &amp; computational geometry
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-hover rounded-2xl p-20 md:p-20 border border-primary/15 max-w-8xl mx-auto"
        >
          <p className="text-muted-foreground leading-relaxed mb-8 text-center md:text-left">
            If you need expert guidance on algorithms, computational geometry, or related
            implementation challenges, we are available for technical collaboration. Use the
            form below to send your name, email, and message—we will follow up to explore
            how we can help.
          </p>
          <div className="flex justify-center md:justify-start">
            <ConsultingContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
