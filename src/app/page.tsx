import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a192f] min-h-screen">
      <Header />
      
      {/* Main content sections with IDs for scroll targets */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="portfolio">
        <Projects />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer or resume section if needed */}
      <section id="resume" className="py-20">
        {/* Resume content could go here if needed */}
      </section>
    </main>
  );
}
