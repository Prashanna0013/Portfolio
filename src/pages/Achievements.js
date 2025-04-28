import NavBar from './NavBar';
import './styles/Projects.css'; // Better to name it Certificates.css

function Achievements() {
  const certificates = [
    {
      title: "Smart India Hackathon Winner",
      organization: "Government of India",
      description: "Won the Smart India Hackathon for developing an innovative solution using technology.",
      image: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1"
    },
    {
      title: "Amazon Hackathon Winner",
      organization: "Amazon",
      description: "Winner in Amazon Hackathon for solving real-world problems through cloud solutions.",
      image: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
    },
    {
      title: "Intel GenAI Hackathon Finalist",
      organization: "Intel",
      description: "Built an innovative generative AI model as part of the Intel GenAI Hackathon challenge.",
      image: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg"
    }
    // You can add more certificates here!
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
