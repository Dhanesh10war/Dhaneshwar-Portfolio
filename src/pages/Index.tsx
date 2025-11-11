import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import { usePageView } from "@/hooks/useAnalytics";

const Index = () => {
  // Track page views with analytics
  usePageView();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
