import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useVisitorCount } from "@/hooks/useVisitorCount";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const visitorCount = useVisitorCount();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              © {currentYear} Dhaneshwar R. Built with{" "}
              <Heart className="h-4 w-4 text-primary inline" /> using React & Lovable Cloud
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/dhanesh10war"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:glow transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/dhaneshwar-r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:glow transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:dhanesh10war@gmail.com"
              className="p-2 glass rounded-full hover:glow transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Visitor Counter */}
          <div className="text-sm text-muted-foreground">
            <span className="glass px-4 py-2 rounded-full">
              👥 Visitors: <span className="text-primary font-semibold">{visitorCount.toLocaleString()}</span>
            </span>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Designed with modern web technologies | Powered by Lovable Cloud Analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
