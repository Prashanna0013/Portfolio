import NavBar from './NavBar';
import './styles/Homepage.css';

function Resume() {
    return(
        <>
        <NavBar/>
        <div className="resume-embed">
            <iframe src="https://drive.google.com/file/d/1PhO_WOIR7SYsWf3VoWdNsSn12r1tTVe3/preview" width='100%' height='600px' title="Resume"/>
        </div>
        </>
    );
}

export default Resume;
