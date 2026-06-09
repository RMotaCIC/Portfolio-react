import "../styles/Hero.css";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import CodeWindow from "./CodeWindow.tsx";

function Hero () {
  return (
    <div className="hero-container">

      <div className="hero-text-container">
        <div className="state">
          <span className="dot"></span>
          {/* <span>AVAILABLE FOR PROJECTS</span> */}
          <span>PROCESSING</span>
        </div>
        <h1>DEVELOPING <span className="green">THE DIGITAL</span> FUTURE</h1>
        <p>Currently learning <span className="highlight">Full-Stack Software Development</span> with the ultimate goal of transitioning and specializing in the development of ML models to offer solutions through the integration of Software, Data, and <span className="highlight">AI</span>.</p>

        <div className="buttons-container">
          <button className="explore">EXPLORE WORK
            <TbArrowBadgeRightFilled className="arrow"/></button>
          <button className="stack">VIEW THE STACK</button>
        </div>
      </div>

      <div className="hero-image">
        <CodeWindow />
      </div>

    </div>
  );
}

export default Hero;
