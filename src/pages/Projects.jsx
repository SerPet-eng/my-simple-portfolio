import { useState, useEffect } from 'react'; // ✅ Import useEffect
import projects from '../assets/projectsImage';

function handleImageChange(isMobile, desktop, mobile) {
  return isMobile ? mobile : desktop;
}

export default function Projects() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const mobileWidth = 650;

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    // ✅ Only listen for resize events
    window.addEventListener('resize', handleResize);

    // ✅ Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = currentWidth < mobileWidth;

  return (
    <div className="projects">
      <p className="projects__title">My Projects</p>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="projects__container__card" key={index}>
            <img
              className="projects__container__card__image"
              src={handleImageChange(
                isMobile,
                project.thumbnail.desktop,
                project.thumbnail.mobile,
              )}
              alt={`Thumbnail of ${project.title}`}
            />
            <p className="projects__container__card__title">{project.title}</p>
            <p className="projects__container__card__description">
              {project.description}
            </p>

            <button className="projects__container__card__button">
              See Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
