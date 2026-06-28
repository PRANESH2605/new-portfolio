import { useEffect, useState } from "react";
import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Skills} from "@/sections/Skills";
import {Achievements} from "@/sections/Achievements";
import {Contact} from "@/sections/Contact";
import {Footer} from "@/layout/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // 1. Initialize Theme from localStorage or preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    // 2. Fadeout and remove Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("preloader-hidden");
      const timer = setTimeout(() => {
        preloader.remove();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
