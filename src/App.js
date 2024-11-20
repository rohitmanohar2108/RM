import React from "react";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="bg-[#0a192f]  relative">
    
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-[#f3f2ef] py-4 text-center text-sm  text-[#333333]">
        <p>© {new Date().getFullYear()} Rohit Manohar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
