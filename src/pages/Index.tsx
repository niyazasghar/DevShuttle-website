import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import FooterSection from "@/components/FooterSection";
import SectionReveal from "@/components/SectionReveal";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <ScrollToTop />
        <HeroSection />
        <SectionReveal>
          <FeaturedWork />
        </SectionReveal>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <ServicesSection />
        </SectionReveal>
        <SectionReveal>
          <InsightsSection />
        </SectionReveal>
        <SectionReveal>
          <FooterSection />
        </SectionReveal>
      </div>
    </PageTransition>
  );
};

export default Index;
