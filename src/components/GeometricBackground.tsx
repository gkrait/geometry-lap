import { motion } from "framer-motion";

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Floating wireframe shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-64 h-64 border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-32 right-[18%] w-48 h-48 border border-glow-secondary/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Icosahedron-ish wireframe SVG */}
      <motion.svg
        className="absolute top-16 right-[10%] w-80 h-80 text-primary/10"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" />
        <line x1="100" y1="10" x2="100" y2="190" />
        <line x1="10" y1="60" x2="190" y2="140" />
        <line x1="190" y1="60" x2="10" y2="140" />
        <line x1="100" y1="10" x2="10" y2="140" />
        <line x1="100" y1="10" x2="190" y2="140" />
        <line x1="100" y1="190" x2="10" y2="60" />
        <line x1="100" y1="190" x2="190" y2="60" />
      </motion.svg>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-glow-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default GeometricBackground;
