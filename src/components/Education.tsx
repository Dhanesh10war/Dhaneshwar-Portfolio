import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "A.V.C. College of Engineering",
      location: "Mayiladuthurai, Tamil Nadu",
      year: "2022 - 2026",
      grade: "CGPA: 7.0",
      icon: "🎓",
    },
    {
      degree: "HSC (XII), State Board",
      institution: "DBTR National Higher Secondary School",
      location: "Mayiladuthurai, Tamil Nadu",
      year: "2022",
      grade: "Score: 78.3%",
      icon: "📚",
    },
    {
      degree: "SSLC (X), State Board",
      institution: "DBTR National Higher Secondary School",
      location: "Mayiladuthurai, Tamil Nadu",
      year: "2020",
      grade: "Score: 74.4%",
      icon: "📖",
    },
  ];

  const certifications = [
    {
      title: "Amazon Junior Software Developer Professional Certificate",
      issuer: "Amazon via Coursera",
      status: "Completed",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Academic Background
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:glow transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{edu.icon}</div>
                <h4 className="font-heading font-bold text-lg mb-2">{edu.degree}</h4>
                <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                  <span className="text-sm font-semibold text-accent">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2">
            <Award className="text-primary" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:glow transition-all hover:scale-105 flex items-start gap-4"
              >
                <div className="p-3 bg-primary/20 rounded-lg">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Courses Highlight */}
        <div className="mt-12 glass p-8 rounded-2xl">
          <h3 className="text-xl font-heading font-semibold mb-4 text-center">
            Key <span className="gradient-text">Focus Areas</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Data Structures & Algorithms",
              "Machine Learning",
              "Cloud Computing",
              "Embedded Systems",
              "Web Development",
              "Database Management",
              "Object-Oriented Programming",
              "Blockchain Technology",
            ].map((course, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
