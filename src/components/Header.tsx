import "../styles/Header.css";

function Header () {
  return (
    <div className="header-container">

      <div className="logo-container">
          <span>RND</span>
          <span className="line">|</span>
          <span className="dev">DEV</span>
      </div>

      <nav className="header-nav">
        <a href="#" className="nav-link">HOME</a>
        <a href="#" className="nav-link">ABOUT ME</a>
        <a href="#" className="nav-link">PROJECTS</a>
        <a href="#" className="nav-link">BLOG</a>
        <a href="#" className="nav-link">CONTACT</a>
        <a href="#" className="nav-link collab">COLLAB</a>
      </nav>

    </div>
  );
}

export default Header;
