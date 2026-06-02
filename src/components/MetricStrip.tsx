import "../styles/MetricStrip.css";

function MetricStrip () {
  return (
    <div className="metric-container">
      
      <div>
        1
        <p>YEARS OF EXPERIENCE</p>
      </div>

      <span className="line">|</span>
      
      <div>
        5
        <p>PROJECTS DEVELOPED</p>
      </div>

      <span className="line">|</span>

      <div>
        10<span>+</span>
        <p>TECHNOLOGIES MASTERED</p>
      </div>
      
      <span className="line">|</span>

      <div>
        1
        <p>ENTERPRISE CLIENTS</p>
      </div>

    </div>
  );
}

export default MetricStrip;
