import './Projects.css';
import { FaGithub } from 'react-icons/fa';

// Import the images
import notesAppImage from '../../assets/project_images/notes-app.jpeg'
import sharebiteImage from '../../assets/project_images/sharebite.jpeg';
import recipeAppImage from '../../assets/project_images/recipe-app.jpeg';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ShareBite",
      description: "A food donation platform that connects donors with recipients in their local area, reducing food waste and helping those in need.",
      technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
      image: sharebiteImage,
      codeLink: "https://github.com/luwanise/sharebite",
    },
    {
      id: 2,
      title: "Recipe App",
      description: "A lightweight recipe application that helps users discover and follow delicious recipes with detailed instructions and ingredient lists.",
      technologies: ["React Native", "TypeScript", "Expo"],
      image: recipeAppImage,
      codeLink: "https://github.com/luwanise/recipe-app",
    },
    {
      id: 3,
      title: "Notes App",
      description: "An intuitive note-taking application with create, edit, and delete functionality, designed with a responsive user interface and offline storage capabilities.",
      technologies: ["React Native", "TypeScript", "AsyncStorage"],
      image: notesAppImage,
      codeLink: "https://github.com/luwanise/notes-app",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Check out my latest mobile app development work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  width="800"
                  height="533"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <span>View Code</span> <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;