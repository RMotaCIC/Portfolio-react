import '../styles/ProjectsShowcase.css';
import img1 from '../assets/img/test-img1.jpg';
import img2 from '../assets/img/test-img2.jpg';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function ProjectsShowcase () {
  return (
    <div className="projects-showcase-container">

      <span className='container-span'>PORTFOLIO</span>
      <h2 className='container-title'>PROJECTS SHOWCASE</h2>

      <article className="showcase-article">
        <div className="article-img">
          <img src={img1} alt="Project Image" />
        </div>
        <div className="article-description">
          
        </div>
      </article>

      <article className="showcase-article">
        <div className="article-description">

          <div className="project-details">
            <span>001</span>
            <span><MdKeyboardDoubleArrowRight />TEST</span>
          </div>

          <h2>Test Test</h2>
          <p>Test test Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum quos velit a ipsum nisi facere repellendus ratione vitae. Commodi magni accusamus nemo iste sit natus quae, voluptatum eum omnis.</p>
        </div>
        <div className="article-img">
          <img src={img2} alt="Project Image" />
        </div>
      </article>

    </div>
  );
}

export default ProjectsShowcase;
