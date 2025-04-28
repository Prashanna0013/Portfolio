import NavBar from './NavBar';
import './styles/Homepage.css';
function Skills(){
    return(
        <>
        <NavBar/>
        <div className='skills-container'>
        <h1>My Skills</h1>
            <div className='quote'>
            "The journey of mastering a skill begins with the courage to start, the patience to persist, and the dedication to continuously evolve.""
            </div>
            <div className="skills-category">
                <h3>Languages Known</h3>
                <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>Dart</li>
                <li>SQL</li>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                </ul>
        </div>

            <div className="skills-category">
                <h3>Technical Skills</h3>
                <ul>
                <li>Fullstack Development</li>
                <li>Mobile App Development</li>
                <li>Machine Learning</li>
                <li>IoT Integration</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3>Frameworks & Tools</h3>
                <ul>
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Flutter</li>
                <li>Oracle SQL</li>
                <li>MongoDB</li>
                </ul>
            </div>

            <div className="skills-category">
                <h3>Non-Technical Skills</h3>
                <ul>
                <li>Problem-Solving</li>
                <li>Leadership</li>
                <li>Collaboration</li>
                <li>Time Management</li>
                <li>Communication</li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Skills;