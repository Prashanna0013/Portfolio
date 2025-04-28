import NavBar from "./NavBar.js";
import './styles/Homepage.css';
import {Link} from "react-router-dom";
function Homepage(){
    return(
        <> 
        <NavBar/>
        <div className='homepage-body'>
            <h1>Welcome, I am Prashanna Kumar S,</h1>
            <p>
            I am a passionate student at SSN College of Engineering, specializing in Computer Science and Engineering. With strong programming skills, I have successfully completed diverse projects in application and
software development, showcasing innovation and problem-solving. Eager to expand my expertise, I am
now exploring the fields of web development and AI/ML, aiming to create impactful and cutting-edge
solutions.
            </p>
            <div className="quote">
                    "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </div>
            <Link to='/resume' id="route">To view my Resume</Link>
        </div>
        </>
    );
}

export default Homepage;