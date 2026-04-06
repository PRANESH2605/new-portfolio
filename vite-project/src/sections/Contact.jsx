import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";

export const Contact = () => {
   return (
      <section id="contact" className="py-32 relative overflow-hidden bg-surface/30">
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                  Get in Touch
               </span>
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-primary glow-text">Connect</span></h2>
               <p className="text-muted-foreground">Have a project in mind or just want to say hi? Feel free to reach out!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
               
               {/* Contact Information */}
               <div className="space-y-8 animate-fade-in animation-delay-200">
                  <div className="glass p-8 rounded-3xl">
                     <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="p-3 rounded-full glass text-primary">
                              <Mail className="w-6 h-6" />
                           </div>
                           <div>
                              <div className="font-medium text-foreground">Email</div>
                              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">praneshsivakumarr@gmail.com</a>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="p-3 rounded-full glass text-primary">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <div className="font-medium text-foreground">Location</div>
                              <span className="text-muted-foreground">Salem, India</span>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="p-3 rounded-full glass text-primary">
                              <Phone className="w-6 h-6" />
                           </div>
                           <div>
                              <div className="font-medium text-foreground">Phone</div>
                              <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 77088 43356</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="glass p-8 rounded-3xl animate-fade-in animation-delay-400">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                     <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                        <input 
                           type="text" 
                           id="name" 
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                           placeholder="John Doe"
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                        <input 
                           type="email" 
                           id="email" 
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                           placeholder="john@example.com"
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                        <textarea 
                           id="message" 
                           rows={4}
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                           placeholder="How can I help you?"
                        ></textarea>
                     </div>
                     <Button type="submit" variant="solid" className="w-full justify-center">
                        Send Message
                     </Button>
                  </form>
               </div>

            </div>
         </div>
      </section>
   ); 
};