import "../styles/MetricStrip.css";

function MetricStrip () {
  return (
    <div className="metric-container">
      
      <div className="presentation">
        HI, I AM <span>RANDY</span>
        <p className="presentation-description">I AM A CIVIL ENGINEER BY PROFESSION AND AM CURRENTLY TRANSITIONING INTO SOFTWARE DEVELOPMENT. I AM PASSIONATE ABOUT TECHNOLOGY, CONTINOUS LEARNING, PROBLEM-SOLVING AND I AM LOOKING TO INTEGRATE MY ENGINEERING EXPERIENCE INTO THE DEVELOPMENT OF DIGITAL SOLUTIONS. I'M EAGER TO CONNECT WITH PEOPLE WHO SHARE THE SAME PASSIONS AND WITH WHOM I CAN COLLABORATE TO SHAPE THE FUTURE.</p>
      </div>

      <span className="line">|</span>

      <div>
        2
        <p>YEARS OF EXPERIENCE (LEARNING)</p>
      </div>
      
      <span className="line">|</span>

      <div>
        10<span>+</span>
        <p>TECHNOLOGIES MASTERED</p>
      </div>

    </div>
  );
}

export default MetricStrip;
