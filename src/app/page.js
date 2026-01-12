import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`min-h-screen scroll-mt-[85px] ${className}`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <Section id="hero" className="bg-[url('/bg-home.jpg')] bg-cover bg-center">
        <div className="pt-[85px] px-6 lg:px-16">
          <Hero />
        </div>
      </Section>

      <Section id="skills" className="bg-black/5">
        <div className="pt-[85px] px-6 lg:px-16">
          <Skills />
        </div>
      </Section>

      <Section id="projects" className="bg-black/10">
        <div className="pt-[85px] px-6 lg:px-16">
          <Projects />
        </div>
      </Section>

      <Section id="contact" className="bg-[url('/bg-contact.jpg')] bg-cover bg-center">
        <div className="pt-[85px] px-6 lg:px-16">
          <Contact />
        </div>
      </Section>
    </>
  );
}
