import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackProjectClick } from "@/hooks/useAnalytics";

const Projects = () => {
  const projects = [
    {
      title: "Phoenix 360 - AI-Powered Women's Safety System",
      description: "AI-powered gender detection and audio distress recognition system using pre-trained CNN models, OpenCV, and blockchain for tamper-proof logging. Instant alert generation and threat tracking for public safety deployment.",
      tags: ["Python", "OpenCV", "CNN", "Blockchain", "Flask"],
      achievement: "18% accuracy improvement through dataset augmentation",
      event: "TANSAM Hackathon 2025",
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Driven Defense Training Simulator",
      description: "Real-time object detection using YOLOv5, PyTorch, and OpenCV to detect drones and track soldier engagement in simulated combat. Data-driven feedback loops for performance evaluation.",
      tags: ["YOLOv5", "PyTorch", "OpenCV", "Python"],
      achievement: "22% increase in target recognition speed",
      event: "ARMADA Internship - Indian Air Force Collaboration",
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Drone Detection System",
      description: "IoT-based solution for tracking aerial activity in simulated defense scenarios. Integrated sensor interfacing, wireless communication, and embedded systems design.",
      tags: ["Arduino", "IoT", "C", "Python", "Sensors"],
      achievement: "Real-time aerial threat detection",
      event: "ARMADA Industrial Automation Internship",
      github: "#",
      demo: "#",
    },
    {
      title: "Geospatial ML Pipeline",
      description: "Machine learning pipeline for geospatial data analysis using Streamlit and Google Earth Engine. Automated data processing and visualization for environmental monitoring.",
      tags: ["Python", "Streamlit", "GEE", "ML"],
      achievement: "Automated environmental data analysis",
      event: "Academic Project",
      github: "#",
      demo: "#",
    },
    {
      title: "Loan Eligibility LSP Portal",
      description: "Full-stack web application for loan eligibility assessment. React frontend with Firebase backend for real-time data processing and user authentication.",
      tags: ["React", "Firebase", "JavaScript", "REST API"],
      achievement: "Streamlined loan approval process",
      event: "Web Development Project",
      github: "#",
      demo: "#",
    },
    {
      title: "IR-Controlled Vehicle System",
      description: "4-wheel infrared-controlled vehicle with embedded systems design. Explored fundamentals of image processing and wireless control mechanisms.",
      tags: ["Arduino", "C", "Embedded Systems", "IoT"],
      achievement: "Hands-on embedded systems learning",
      event: "ARMADA Internship Project",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML, IoT, and Full-Stack Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:glow transition-all hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
                <div className="absolute bottom-0 right-0 p-4">
                  <span className="glass px-3 py-1 rounded-full text-xs text-primary">
                    {project.event}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-accent">
                  <span className="text-primary">⚡</span>
                  {project.achievement}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass"
                    onClick={() => {
                      trackProjectClick(project.title, "demo");
                      window.open(project.demo, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass"
                    onClick={() => {
                      trackProjectClick(project.title, "github");
                      window.open(project.github, "_blank");
                    }}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
