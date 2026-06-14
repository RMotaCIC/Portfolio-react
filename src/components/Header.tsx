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
        <a href="#home" className="nav-link">HOME</a>
        <a href="#aboutme" className="nav-link">ABOUT ME</a>
        <a href="#projectsshowcase" className="nav-link">PROJECTS</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <a href="#" className="nav-link blog">BLOG</a>
      </nav>

    </div>
  );
}

export default Header;
