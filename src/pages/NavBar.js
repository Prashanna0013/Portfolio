import './styles/NavBar.css';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div className="navbar">
            <h1 style={{color:'white'}}>My Portfolio</h1>
            <div className='nav-links'>
                <Link to='/'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/achieve'>Achievements</Link>
                <Link to='/contact'>Contact Me</Link>
            </div>
        </div>
    );
}

export default NavBar;