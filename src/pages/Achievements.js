import NavBar from './NavBar';
import './styles/Projects.css';

function Achievements() {
  const certificates = [
    {
      title: "Smart India Hackathon",
      organization: "Government of India",
      description: "Participated in the Smart India Hackathon for developing an innovative solution for real time detecting of Indian Sign Language.",
      image: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1"
    },
    {
      title: "Amazon Hackathon",
      organization: "Amazon",
      description: "Participated in Amazon Hackathon for developing a solution for Smart Irrigation System.",
      image: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
    },
    {
      title: "Intel GenAI Hackathon",
      organization: "Intel",
      description: "Built an innovative generative AI model as part of the Intel GenAI Hackathon challenge.",
      image: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg"
    }
  ];

  return (
    <>
      <NavBar />
      <div className="certificates-container">
        <h2>My Achievements & Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img src={cert.image} alt={cert.title} className="certificate-image" />
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-organization">{cert.organization}</p>
              <p className="certificate-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievements;
