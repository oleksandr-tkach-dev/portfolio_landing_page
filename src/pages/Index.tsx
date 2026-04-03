import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
