import ImageProfile from '../assets/avatar.png';
import Background from '../assets/background.png';

export default function Home() {
  const handleDownloadCV = () => {
    const pdfURL = '/RESUME.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Christian-De-Guzman-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <div className="home__content">
        <p className="home__content__greeting">
          Hello! I&apos;m your frontend developer
        </p>
        <p className="home__content__name">Christian De Guzman</p>
        <button className="home__content__button" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>

      <div className="home__image">
        <img
          style={{ backgroundImage: `url(${Background})` }}
          className="home__image__profile"
          src={ImageProfile}
          alt="Profile of Christian De Guzman"
        />
      </div>
    </div>
  );
}
