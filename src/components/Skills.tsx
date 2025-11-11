import { Code, Database, Cloud, Wrench, GitBranch, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "C", "Solidity"],
    },
    {
      icon: Wrench,
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js"],
    },
    {
      icon: Cpu,
      title: "Frameworks & Libraries",
      skills: ["Pandas", "Numpy", "PyTorch", "OpenCV", "YOLOv5"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "SQL", "Firebase"],
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Arduino IDE"],
    },
    {
      icon: Cloud,
      title: "Technologies",
      skills: ["Blockchain", "GenAI", "IoT", "REST API", "JSON"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:glow transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-heading font-semibold mb-6">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {["OOP", "Problem-Solving", "Agile/Scrum", "Teamwork", "Communication", "Adaptability"].map((skill, index) => (
              <span
                key={index}
                className="glass px-6 py-3 rounded-full hover:glow transition-all hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
