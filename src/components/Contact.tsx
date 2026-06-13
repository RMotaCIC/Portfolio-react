import '../styles/Contact.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Contact () {

  return (
    <div className="contact-container">

      <div className="contact-form">

        <span>OPEN TO COLLABORATION</span>
        <h2>LET'S GET IN TOUCH</h2>
        
        <form action="#">
          
          <p>NAME</p>
          <input type="text" name="name" id="name" placeholder="Your name" />

          <p>EMAIL</p>
          <input type="text" name="email" id="email" placeholder="Your email" />

          <p>PROJECT</p>
          <textarea name="project" id="project" rows={4} placeholder="Give me a brief overview of your project"></textarea>

          <button type="submit">INITIATE CONTACT <MdKeyboardDoubleArrowRight className='arrow'/></button>
          
        </form>

      </div>

    </div>
  );
}

export default Contact;
