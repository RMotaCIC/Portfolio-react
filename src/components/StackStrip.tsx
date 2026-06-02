import "../styles/StackStrip.css";
import StackCarousel from "./StackCarousel.tsx";

function StackStrip () {
  return (
    <div className="stack-container">

      <span>TECHNICAL CORE</span>

      <h2>THE STACK</h2>

      <div className="carousel">
        <StackCarousel />
      </div>

    </div>
  );
}

export default StackStrip;
