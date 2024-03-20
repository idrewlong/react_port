import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
