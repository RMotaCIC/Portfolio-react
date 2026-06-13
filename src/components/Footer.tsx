import '../styles/Footer.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer () {
  return (
    <div className="footer-container">
      
      <div className="logo-container">
          <span>RND</span>
          <span className="line">|</span>
          <span className="dev">DEV</span>
      </div>

      <div className="copyright">
        <FaRegCopyright /> 2026 RND | DEV // ENGINEERING THE DIGITAL FUTURE
      </div>

      <div className="icons-container">
        <a href="https://www.facebook.com/"><FaFacebook className='icon'/></a>
        <a href="https://www.instagram.com/"><FaSquareInstagram className='icon'/></a>
        <a href="https://do.linkedin.com/"><FaLinkedin className='icon'/></a>
        <a href="https://github.com/"><FaGithub className='icon'/></a>
      </div>

    </div>
  );
}

export default Footer;
