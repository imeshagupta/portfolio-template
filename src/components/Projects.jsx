import { useState } from "react";
import SocialLinks from "./SocialLinks";
import styles from "../styles/Projects.module.css";
import img1 from "../assets/img.jpg";

const projectData = [
  { name: "Musea", image: img1 },
  { name: "Elara", image: img1 },
  { name: "Verve", image: img1 },
  { name: "Zephyr", image: img1 },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectListContainer}>
        <div className={styles.imageContainer}>
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className={styles.projectImage}
          />
        </div>

        <div className={styles.projectList}>
          {projectData.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`${styles.projectItem} ${
                selectedProject.name === project.name ? styles.active : ""
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.socialLinksContainer}>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Projects;
