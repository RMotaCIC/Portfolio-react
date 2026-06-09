import './App.css';
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import MetricStrip from './components/MetricStrip.tsx';
import StackStrip from './components/StackStrip.tsx';
import ProjectsShowcase from './components/ProjectsShowcase.tsx';

function App() {

  return (
    <>
    <header>
      <Header />
    </header>

    <section>
      <Hero />
    </section>

    <section>
      <MetricStrip />
    </section>

    <section>
      <StackStrip />
    </section>

    <section>
      <ProjectsShowcase />
    </section>
    </>
  )
}

export default App
