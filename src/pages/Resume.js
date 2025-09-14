import NavBar from './NavBar';
import './styles/Homepage.css';

function Resume() {
  return (
    <>
      <NavBar />
      <div className="resume-embed">
        <iframe 
          src="https://drive.google.com/file/d/1YNlngRYoS6Q86OQTQLZNtdEMqq8URRJ8/preview"
          width="100%" 
          height="600px" 
          title="Resume"
        />
      </div>
    </>
  );
}

export default Resume;
