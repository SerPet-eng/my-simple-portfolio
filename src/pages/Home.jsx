import ProfileImage from '../assets/profile-1.png';

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <p className="home__content__greeting">
          Hello! I&apos;m your frontend developer
        </p>
        <p className="home__content__name">Christian De Guzman</p>
        <button className="home__content__button">Download CV</button>
      </div>

      <div className="home__image">
        <img
          className="home__image__profile"
          src={ProfileImage}
          alt="Profile of Christian De Guzman"
        />
      </div>
    </div>
  );
}
