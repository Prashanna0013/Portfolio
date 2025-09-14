import NavBar from './NavBar';
import './styles/Projects.css';

function Achievements() {
  const certificates = [
    {
      title: "Internally Funded Student Project",
      organization: "SSN College of Engineering",
      description: "Selected among the Top 15 teams in college to receive funding support for innovative project development.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFtsWAmmao_wKpi71ahEFgY4MVvVWuaO0sA&s"
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
