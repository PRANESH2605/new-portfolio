import { Github, ExternalLink, Trophy, Award, Star } from "lucide-react";

const achievements = [
   {
      title: "Top 10 in HackXelarate in KPRIET",
      description: "Developed an AI-based road accident detection system that ranked in the Top 10 among 100+ teams and earned free domain access.",
      icon: Trophy,
      date: "Apr 2025"
   },
   {
      title: "Smart India Hackathon 2025 Grand Finale",
      description: "Selected as one of only 5 teams among 500+ teams for the SIH 2025 Grand Finale.",
      icon: Star,
      date: "Dec 2025"
   },
   {
      title: "Build Expo First Place 2025-26",
      description: "Secured 1st place in Build Expo under the Emerging Engineer category for the AI-based Road Accident Detection project, winning a ₹15,000 cash prize.",
      icon: Trophy,
      date: "Jan 2026"
   },
   {
      title: "Achievers Day Award",
      description: "Honored with the Achievers Award for my overall winning project at the college Achievers Day event.",
      icon: Award,
      date: "Mar 2026"
   }
];

export const Achievements = () => {
   return (
      <section id="achievements" className="py-32 relative overflow-hidden bg-surface/30">
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                  Milestones
               </span>
               <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary glow-text">Achievements</span></h2>
               <p className="text-muted-foreground">A showcase of awards and recognitions I've received throughout my career.</p>
            </div>

            {/* Grid View as Requested */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {achievements.map((achievement, idx) => (
                  <div key={idx} className="glass p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 animate-fade-in group flex flex-col md:flex-row gap-6 items-start" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                     <div className="p-4 rounded-2xl glass text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all shrink-0">
                        <achievement.icon className="w-8 h-8" />
                     </div>
                     <div>
                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2 block">{achievement.date}</span>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{achievement.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   ); 
};
