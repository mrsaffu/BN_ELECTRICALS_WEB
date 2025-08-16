import { useState } from "react";
import "../styles/projects.css";

import pro1 from "../assets/Projects/recidentant01.jpg";
import pro2 from "../assets/Projects/office.jpg";
import pro3 from "../assets/Projects/industrial.jpg";
import pro4 from "../assets/Projects/controllpannel.jpg";
import pro5 from "../assets/Projects/electronoicmnts.jpg";
import pro7 from "../assets/Projects/automatic.jpg";
import pro10 from "../assets/Projects/hospital.jpg";
import pro12 from "../assets/Projects/rentalstore.jpg";
import pro11 from "../assets/Projects/wearhouse.jpg";




const Projects = ({ onOpenLightbox }) => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      id: "project1",
      title: "Residential Complex Wiring",
      image: pro1,
      alt: "Modern residential electrical project",
    },
    {
      id: "project2",
      title: "Commercial Office Lighting",
      image: pro2,
      alt: "Commercial building electrical work",
    },
    {
      id: "project3",
      title: "Industrial Power Systems",
      image: pro3,
      alt: "Industrial electrical installation",
    },
    {
      id: "project4",
      title: "Control Panel Installation",
      image: pro4,
      alt: "Electrical contractor working on control panel",
    },
    {
      id: "project5",
      title: "Electrical Maintenance",
      image: pro5,
      alt: "Electrical maintenance work",
    },
    {
      id: "project6",
      title: "System Testing & Certification",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=400",
      alt: "Electrical contractor testing systems",
    },
    {
      id: "project7",
      title: "Smart Home Automation",
      image: pro7,
      alt: "Smart home electrical automation system",
    },
    {
      id: "project8",
      title: "Data Center Electrical Infrastructure",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&h=400",
      alt: "Data center electrical infrastructure project",
    },
    {
      id: "project9",
      title: "Solar Panel Installation",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&h=400",
      alt: "Commercial solar panel electrical installation",
    },
    {
      id: "project10",
      title: "Hospital Emergency Power",
      image:
        pro10,
    },
    {
      id: "project11",
      title: "Warehouse Lighting Upgrade",
      image:
        pro11,
      alt: "Industrial warehouse lighting upgrade project",
    },
    {
      id: "project12",
      title: "Retail Store Electrical Fit-out",
      image:
       pro12,
      alt: "Modern retail store electrical installation",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  const handleProjectClick = (project) => {
    onOpenLightbox(project.id, project.image, project.alt);
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Projects</h2>
        </div>

        <div className={`projects-grid ${showAll ? "expanded" : ""}`}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button
            className="btn-primary load-more-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <>
                <i className="fas fa-minus"></i> Show Less
              </>
            ) : (
              <>
                <i className="fas fa-plus"></i> Load More Projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
