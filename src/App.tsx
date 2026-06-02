import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import MetricStrip from './components/MetricStrip.tsx';
import StackStrip from './components/StackStrip.tsx';

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
    </>
  )
}

export default App
