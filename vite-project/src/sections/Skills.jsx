import { Code2, Database, Layout, Smartphone, Server, Paintbrush } from "lucide-react";

const skillCategories = [
   {
      title: "Frontend Engineering",
      icon: Layout,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
   },
   {
      title: "UI/UX Design",
      icon: Paintbrush,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"]
   },
   {
      title: "Core Technologies",
      icon: Code2,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git/GitHub", "Docker"]
   }
];

export const Skills = () => {
   return (
      <section id="skills" className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                  Expertise
               </span>
               <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary glow-text">Skills</span></h2>
               <p className="text-muted-foreground">A comprehensive overview of my technical toolkit and areas of proficiency.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {skillCategories.map((category, idx) => (
                  <div key={idx} className="glass p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 animate-fade-in group" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                     <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all shrink-0">
                        <category.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
                     <div className="flex flex-wrap gap-2 mt-4">
                        {category.skills.map((skill, sIdx) => (
                           <span key={sIdx} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-surface/50 text-muted-foreground border border-border/50 group-hover:border-primary/30 transition-colors">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   ); 
};
