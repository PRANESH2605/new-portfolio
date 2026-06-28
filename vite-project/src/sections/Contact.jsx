import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";

export const Contact = () => {
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
   const [status, setStatus] = useState({ type: null, message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
         setStatus({ type: "error", message: "Please fill in all fields." });
         return;
      }

      setIsSubmitting(true);
      setStatus({ type: null, message: "" });

      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
      
      if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
         setTimeout(() => {
            setIsSubmitting(false);
            setStatus({
               type: "success",
               message: "Submission simulated! Set VITE_WEB3FORMS_ACCESS_KEY in your .env file to receive real emails."
            });
            setFormData({ name: "", email: "", message: "" });
         }, 1000);
         return;
      }

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify({
               access_key: accessKey,
               name: formData.name,
               email: formData.email,
               message: formData.message,
               subject: `New Portfolio Message from ${formData.name}`,
            }),
         });

         const result = await response.json();
         if (result.success) {
            setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
            setFormData({ name: "", email: "", message: "" });
         } else {
            setStatus({ type: "error", message: result.message || "Something went wrong. Please try again." });
         }
      } catch (error) {
         setStatus({ type: "error", message: "Failed to connect to the email service. Please check your connection." });
      } finally {
         setIsSubmitting(false);
      }
   };

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
                              <a href="mailto:praneshsivakumarr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">praneshsivakumarr@gmail.com</a>
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
                              <a href="tel:+917708843356" className="text-muted-foreground hover:text-primary transition-colors">+91 77088 43356</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="glass p-8 rounded-3xl animate-fade-in animation-delay-400">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                        <input 
                           type="text" 
                           id="name" 
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                           placeholder="John Doe"
                           required
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                        <input 
                           type="email" 
                           id="email" 
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                           placeholder="john@example.com"
                           required
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                        <textarea 
                           id="message" 
                           rows={4}
                           value={formData.message}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                           placeholder="How can I help you?"
                           required
                        ></textarea>
                     </div>

                     {status.type && (
                        <div className={`p-4 rounded-xl text-sm font-medium border animate-fade-in ${
                           status.type === "success" 
                              ? "bg-green-500/10 text-green-500 border-green-500/20" 
                              : "bg-red-500/10 text-red-500 border-red-500/20"
                        }`}>
                           {status.message}
                        </div>
                     )}

                     <Button 
                        type="submit" 
                        variant="solid" 
                        className="w-full justify-center disabled:opacity-50"
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                     </Button>
                  </form>
               </div>

            </div>
         </div>
      </section>
   ); 
};