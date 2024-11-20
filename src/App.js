import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Background from './Components/Background';

function App() {
  return (
    <div className="bg-[#0a192f] relative">
      <Background />
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;