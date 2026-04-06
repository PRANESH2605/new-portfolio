import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
   return (
      <footer className="border-t border-border/50 py-12 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
               <a href="#" className="text-2xl font-bold tracking-tight text-foreground" >
                  PS<span className="text-primary">.</span> 
               </a>
               <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} Pranesh Sivakumar. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-4">
               {[{icon: Github, href: "#" },
               { icon: Linkedin, href:"#"},
               {icon: Twitter, href:"#"}
               ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                     <social.icon className="w-5 h-5" />
                  </a>
               ))}
            </div>
         </div>
      </footer>
   );
};
