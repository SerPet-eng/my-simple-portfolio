import Form from '../components/Form';
import FacebookIcon from '../assets/socials/icon-facebook.svg';
import TwitterIcon from '../assets/socials/icon-x-twitter.svg';
import LinkedIn from '../assets/socials/icon-linkedin.svg';
import GithubIcon from '../assets/socials/icon-github.svg';
import Cover from '../assets/ContactBG.png';

export default function Contact() {
  return (
    <div className="contact">
      <div
        className="contact__header"
        style={{
          backgroundImage: `url(${Cover})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="contact__title__text">Let&apos; have a chat!</p>
        <p className="contact__description">
          Feel free to reach out to me. I&apos;m always open to new
          opportunities.
        </p>
      </div>

      <div className="contact__container">
        <Form />
        <div className="contact__social">
          <p className="contact__social__title">Find me in:</p>
          <div className="contact__social__icons">
            <img src={FacebookIcon} alt="facebook" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={LinkedIn} alt="linkedin" />
            <img src={GithubIcon} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
}
