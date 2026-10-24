import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ContactFooter from "./components/ContactFooter.jsx";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-ink text-slate-100 selection:bg-mint/30 selection:text-white">
      <div className="ambient-background" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactFooter />
      </main>
    </div>
  );
}