import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusSection from "@/components/FocusSection";
import ContactSection from "@/components/ContactSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
