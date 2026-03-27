const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
              </svg>
            </div>
            <span className="font-heading font-semibold text-sm text-muted-foreground">
              GEOMETRY LAP
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
           
            <a
              href="https://superhivemarket.com/products/mesh-encyclopedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Mesh Encyclopedia
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Geometry Lap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
