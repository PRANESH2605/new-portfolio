import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights =[
   {
      icon: Code2,
      tittle: "Clean Code",
      description: "Writing maintainable, Scalable code that stands the test of time."
   },
   {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and delivering lightning-fast user experiences."
   },
   {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life."
   },
   {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices."
   }
]

export const About = () => {
   return (
      <section id="about" className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Left Column - Image/Visuals */}
               <div className="relative order-2 lg:order-1 animate-fade-in animation-delay-200">
                  <div className="relative max-w-lg mx-auto lg:mr-auto">
                     <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/5 blur-xl"></div>
                     <div className="relative glass rounded-[2rem] p-6 glow-border">
                        <div className="grid grid-cols-2 gap-4">
                           {highlights.map((item, idx) => (
                              <div key={idx} className="glass p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                                 <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6 text-primary" />
                                 </div>
                                 <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                 <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Column - Text */}
               <div className="space-y-8 order-1 lg:order-2">
                  <div className="animate-fade-in">
                     <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                        About Me
                     </span>
                  </div>
                  
                  <div className="space-y-6 animate-fade-in animation-delay-100">
                     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Bridging the gap between <span className="text-primary glow-text">design</span> and <span className="text-primary glow-text">code</span>
                     </h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        I am passionate about creating seamless digital experiences. With a strong foundation in both UI/UX design and frontend development, I approach building web applications from a holistic perspective—ensuring they look stunning and perform flawlessly.
                     </p>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        My journey began with a fascination for interactive digital spaces. Over the years, I've honed my skills in modern web technologies, always aiming to craft user-centric interfaces that solve real business problems effectively.
                     </p>
                  </div>

                  <div className="pt-6 border-t border-border animate-fade-in animation-delay-300">
                     <div className="flex gap-12">
                        
                        <div>
                           <div className="text-4xl font-bold text-foreground">2+</div>
                           <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
   ); 
};