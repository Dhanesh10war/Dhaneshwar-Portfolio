import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Embedded System & IoT Intern",
      company: "ARMADA Industrial Automation",
      location: "Thanjavur, Tamil Nadu",
      period: "June 2025 - July 2025",
      description: [
        "Developed IoT-based solutions including a Drone Detection System for aerial activity tracking in simulated defense scenarios",
        "Created a 4-wheel IR-controlled vehicle and explored fundamentals of image processing",
        "Gained practical experience in sensor interfacing, wireless communication, and embedded systems design",
        "Collaborated with Indian Air Force on AI-driven defense training simulator",
      ],
      tools: ["Arduino IDE", "Python", "C", "IoT", "Sensors"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4 md:justify-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 glow z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </div>

              <div className="ml-12 md:ml-0 md:flex md:items-start">
                <div className="md:w-1/2 md:pr-12">
                  <div className="glass p-6 rounded-2xl hover:glow transition-all hover:scale-105">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
            Positions of <span className="gradient-text">Responsibility</span> & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm">
                Core team member in TANSAM Hackathon finale round (5-member team)
              </p>
            </div>
            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-sm">
                5G Hackathon regional round qualifier, awaiting prototype funding
              </p>
            </div>
            <div className="glass p-6 rounded-2xl hover:glow transition-all">
              <div className="text-3xl mb-2">💡</div>
              <p className="text-sm">
                Stratify Startup Hackathon pre-finalist through technical contributions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
