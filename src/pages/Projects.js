import NavBar from './NavBar';
import './styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Internship Tracker App",
      description: "A MERN stack app to track internship details with Google Drive API integration and MongoDB.",
      techStack: ["React", "Node.js", "MongoDB", "Google Drive API"],
      github: "https://github.com/PaulAndrew7/InternTrack.git",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
    },
    {
      title: "Expense Tracker App",
      description: "Mobile app for tracking expenses and providing savings suggestions using AI models.",
      techStack: ["Flutter", "Firebase", "Gemini AI"],
      github: "https://drive.google.com/drive/folders/11Z3S7VpcHhsfrfixEIenpcvanqYR7Duj?usp=sharing",
      image: "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg"
    },
    {
      title: "IoT Safety System",
      description: "An IoT-based system for detecting accidents, preventing vehicle theft, and detecting alcohol consumption.",
      techStack: ["IoT", "Embedded C", "Sensors"],
      github: "NONE",
      image: "https://st.depositphotos.com/32120950/58201/v/450/depositphotos_582013864-stock-illustration-internet-things-emblem-iot-concept.jpg"
    },
    {
      title: "Online Food Delivery System",
      description: "This project models an online food delivery system using Java for the frontend and Oracle SQL for database management.",
      techStack: ["Java", "SQL"],
      github: "https://github.com/Prashanna0013/ONLINE-FOOD-DELIVERY-SYSTEM.git",
      image: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
    }
  ];

  return (
    <>
      <NavBar />
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github === "NONE" ? (
                  <p>This project is Hardware Specific.</p>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">View Project</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
