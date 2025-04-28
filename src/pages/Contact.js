import NavBar from './NavBar';
import './styles/Projects.css';

function Contact(){
    return(
        <>
        <NavBar/>
        <h1>Connect With Me</h1>
        <div className="contact-info">
            <p>Email: <a href="spksen13@gmail.com" target="_blank" rel="noopener noreferrer">spksen13@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/prashanna-kumar-55a728301" target="_blank" rel="noopener noreferrer">Prashanna Kumar</a></p>
            <p>GitHub: <a href="https://github.com/Prashanna0013" target="_blank" rel="noopener noreferrer">Prashanna0013</a></p>
            <p>Phone: <a>+91 9943556809</a></p>
        </div>
        </>
    );
}
export default Contact;