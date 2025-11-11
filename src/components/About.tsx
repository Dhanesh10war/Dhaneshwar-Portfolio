import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="glass glow p-8 rounded-2xl aspect-square flex items-center justify-center hover:scale-105 transition-transform">
              <User className="h-64 w-64 text-primary opacity-50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl -z-10 group-hover:blur-2xl transition-all"></div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              I'm an adaptable and results-driven Software Developer with a passion for creating innovative solutions that make a real impact. My expertise spans Full-Stack Development, Machine Learning, and Embedded Systems, allowing me to tackle complex challenges from multiple angles.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in AI-powered systems, API development, and real-time data processing, I excel at delivering high-performance applications that improve efficiency and accuracy. I thrive in collaborative environments and embrace Agile methodologies to ensure rapid iteration and continuous improvement.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-lg">
                <p className="text-primary font-bold text-2xl mb-1">Full Stack</p>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-primary font-bold text-2xl mb-1">AI & ML</p>
                <p className="text-sm text-muted-foreground">Systems</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-primary font-bold text-2xl mb-1">Cloud</p>
                <p className="text-sm text-muted-foreground">Architecture</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-primary font-bold text-2xl mb-1">Embedded</p>
                <p className="text-sm text-muted-foreground">Systems</p>
              </div>
            </div>

            <div className="glass p-6 rounded-lg mt-6">
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">Location & Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📍 Mayiladuthurai, Tamil Nadu - 609001</p>
                <p>📞 +91 9360752317</p>
                <p>✉️ dhanesh10war@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
