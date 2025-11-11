import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { submitContactForm } from "@/hooks/useAnalytics";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Submit form to database
    const result = await submitContactForm(formData);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4">
            Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:dhanesh10war@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dhanesh10war@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+919360752317"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9360752317
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Mayiladuthurai, Tamil Nadu<br />
                    India - 609001
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-heading font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/dhanesh10war"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all text-center"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dhaneshwar-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all text-center"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
