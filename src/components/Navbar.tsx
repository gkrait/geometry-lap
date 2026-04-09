import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="8" x2="22" y2="16" />
            </svg>
          </div>
          <span className="font-heading font-semibold text-foreground tracking-tight">
            GEOMETRY LAP
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Focus", id: "focus" },
            { label: "Product", id: "product" },
            { label: "Contact us", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-body tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://superhivemarket.com/products/mesh-encyclopedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Mesh Encyclopedia
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
