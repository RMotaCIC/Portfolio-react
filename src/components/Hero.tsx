import "../styles/Hero.css";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import CodeWindow from "./CodeWindow.tsx";

function Hero () {
  return (
    <div className="hero-container">

      <div className="hero-text-container">
        <div className="state">
          <span className="dot"></span>
          <span>AVAILABLE FOR PROJECTS</span>
        </div>
        <h1>ENGINERING <span className="green">THE DIGITAL</span> FUTURE</h1>
        <p>Specializing in <span className="highlight">high-performance distributed systems</span> and avant-garde UI architectures. I build tools that redefine efficiency — from cloud orchestration to real-time analytics interfaces.</p>

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
