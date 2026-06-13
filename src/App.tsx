import './App.css';
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import MetricStrip from './components/MetricStrip.tsx';
import StackStrip from './components/StackStrip.tsx';
import ProjectsShowcase from './components/ProjectsShowcase.tsx';
import Contact from './components/Contact.tsx';

function App() {

  return (
    <>
    <header>
      <Header />
    </header>

    <section id='hero'>
      <Hero />
    </section>

    <section id='aboutme'>
      <MetricStrip />
    </section>

    <section>
      <StackStrip />
    </section>

    <section id='projectsshowcase'>
      <ProjectsShowcase />
    </section>

    <section id='contact'>
      <Contact />
    </section>
    </>
  )
}

export default App
