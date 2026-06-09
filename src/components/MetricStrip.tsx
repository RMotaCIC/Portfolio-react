import "../styles/MetricStrip.css";

function MetricStrip () {
  return (
    <div className="metric-container">
      
      <div>
        2
        <p>YEARS OF EXPERIENCE (LEARNING)</p>
      </div>

      <span className="line">|</span>
      
      <div>
        0
        <p>PROJECTS DEVELOPED</p>
      </div>

      <span className="line">|</span>

      <div>
        10<span>+</span>
        <p>TECHNOLOGIES MASTERED</p>
      </div>
      
      <span className="line">|</span>

      <div>
        0
        <p>ENTERPRISE CLIENTS</p>
      </div>

    </div>
  );
}

export default MetricStrip;
