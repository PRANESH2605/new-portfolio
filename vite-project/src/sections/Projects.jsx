import { Github, ExternalLink } from "lucide-react";

const projects = [
   {
      title: "AI Road Accident Deductor",
      description: "An Al Road accident Deductor. An Al-based system that automatically deduct an road accident by taking snap using our app that sense what type of accident happen there. And send a info to the nearby Hospital.",
      tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      image: "project1.jpeg",
      github: "https://github.com/PRANESH2605/Tejus_main01",
      live: "#"
   },
   {
      title: "AI Crop Yield Predictor",
      description: "It's an complete Al crop yield prediction web site and have additional features like weather prediction, disease prediction, soil type, use google map API for finding a nearby fertilizer shop and also recommend the suitable fertilizer.",
      tech: ["TypeScript", "React", "Node.js", "Socket.io"],
      image: "project2.jpeg",
      github: "https://github.com/PRANESH2605",
      live: "#"
   },
   {
      title: "Bus Tracking App",
      description: "An App for College Students to Track their Bus. It as an Admin, Driver, & Student Dashboard. Each Dashboard has an Unique features. This app helps students to find their bus and track the bus and also admin also find the bus where it is.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      image: "project3.jpeg",
      github: "https://github.com/PRANESH2605",
      live: "#"
   }
];

export const Projects = () => {
   return (
      <section id="projects" className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                  My Work
               </span>
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary glow-text">Projects</span></h2>
               <p className="text-muted-foreground">Here are some of my recent projects. Each represents a unique challenge and a solution I'm proud of.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div key={idx} className="glass rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-500 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                     <div className="relative aspect-video overflow-hidden">
                        <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                           <a href={project.github} className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-colors">
                              <Github className="w-6 h-6" />
                           </a>
                           <a href={project.live} className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-colors">
                              <ExternalLink className="w-6 h-6" />
                           </a>
                        </div>
                     </div>
                     <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {project.tech.map((tech, techIdx) => (
                              <span key={techIdx} className="text-xs font-medium px-3 py-1 rounded-full bg-surface text-foreground border border-border">
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   ); 
};