import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { trackResumeDownload } from "@/hooks/useAnalytics";

const Resume = () => {
  const handleDownload = () => {
    trackResumeDownload();
    window.open("/Dhaneshwar_Resume.pdf", "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Resume <span className="gradient-text">Download</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="p-6 bg-primary/20 rounded-full">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-heading font-bold">
                Download My Resume
              </h3>
              <p className="text-muted-foreground">
                Get a comprehensive overview of my skills, experience, and achievements
              </p>
            </div>

            <Button
              onClick={handleDownload}
              size="lg"
              className="glow hover:scale-105 transition-transform"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">6+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-muted-foreground">Skills</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">1+</div>
                <div className="text-xs text-muted-foreground">Internship</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-xs text-muted-foreground">Hackathons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
