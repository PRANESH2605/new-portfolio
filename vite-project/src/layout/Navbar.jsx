import {Button} from "@/components/Button";
import {Menu, X, Sun, Moon} from "lucide-react"
import { useEffect, useState } from "react";
const navLinks = [
   {href: "#", label: "Home"},
   {href: "#about", label: "About"},
   {href: "#skills", label: "Skills"},
   {href: "#achievements", label: "My Achievements"},
   {href: "#projects", label: "Projects"},
   {href: "#contact", label: "Contact"}
]

export const Navbar=({ theme, toggleTheme })=>{
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(()=>{
      const handleScroll = ()=>{
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);

      return()=> window.removeEventListener("scroll", handleScroll);
   },[]);
   return( 
   <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3": "bg-transparent py-5"}  z-50`} >
      <nav className="container mx-auto px-6 flex items-center justify-between">
         <a href="#" className="text-xl font-bold tracking-tight hover:text-primary" >
            PS<span className="text-primary">.</span> 
         </a>

         <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
               {navLinks.map((link, index)=>(
                  <a href={link.href} key={index}
                  onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
               
               ) )}
            </div>
         </div>
         
         {/* CTA & Theme Button*/}
         <div className="hidden md:flex items-center gap-4">
            <button 
               onClick={toggleTheme} 
               className="p-2.5 rounded-full glass text-foreground hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer"
               aria-label="Toggle Theme"
            >
               {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <a href="#contact"><Button>Contact Me</Button></a>
         </div>

         {/*Mobile menu & Theme Button*/}
         <div className="flex items-center gap-2 md:hidden">
            <button 
               onClick={toggleTheme} 
               className="p-2 rounded-full glass text-foreground hover:text-primary transition-colors cursor-pointer"
               aria-label="Toggle Theme"
            >
               {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button className="p-2 text-foreground cursor-pointer" onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
               {isMobileMenuOpen ?<X size={24}/>:<Menu size={24}/>}
            </button>
         </div>
      </nav>
      {/*Mobile Menu*/}
      {isMobileMenuOpen &&(
      <div className="md:hidden glass-strong animate-fade-in">
         <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
               {navLinks.map((link, index)=>(
                  <a href={link.href} key={index} onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
               
               ) )}
               <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button>Contact Me</Button>
               </a>
         </div>
      </div>
      )}
   </header> 
)}