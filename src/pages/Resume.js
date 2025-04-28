import NavBar from './NavBar';
import './styles/Homepage.css';
function Resume(){
    return(
        <>
        <NavBar/>
        <div className="resume-embed">
            <iframe src="/resources/Prashanna_CV.pdf" width='100%' height='600px' title="Resume"/>
        </div>
        </>
    );
}
export default Resume;