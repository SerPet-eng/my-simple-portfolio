import images from '../assets/images';

export default function Projects() {
  return (
    <div>
      <p>My Projects</p>
      <div>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="project" />
              <p>Project {index + 1}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                aliquam!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
