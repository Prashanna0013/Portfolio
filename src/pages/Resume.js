import NavBar from './NavBar';
import './styles/Homepage.css';

function Resume() {
    return(
        <>
        <NavBar/>
        <div className="resume-embed">
            <iframe src="https://drive.google.com/file/d/1NsWHLkLnHgSpkhSG5xocqfQ1khtbpcne/preview" width='100%' height='600px' title="Resume"/>
        </div>
        </>
    );
}

export default Resume;
