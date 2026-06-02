import "../styles/MetricStrip.css";

function MetricStrip () {
  return (
    <div className="metric-container">
      
      <div>
        7<span>+</span>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <span className="line">|</span>
      <div>
        40<span>+</span>
        <p>PROJECTS SHIPPED</p>
      </div>
      <span className="line">|</span>

      <div>
        99.9<span>%</span>
        <p>UPTIME DELIVERED</p>
      </div>
      <span className="line">|</span>
      <div>
        12<span>+</span>
        <p>ENTERPRISE CLIENTS</p>
      </div>

    </div>
  );
}

export default MetricStrip;
