import Form from '../components/Form';
import FacebookIcon from '../assets/socials/icon-facebook.svg';
import TwitterIcon from '../assets/socials/icon-x-twitter.svg';
import LinkedIn from '../assets/socials/icon-linkedin.svg';
import GithubIcon from '../assets/socials/icon-github.svg';
import Cover from '../assets/background.png';

function handleRedirect(url) {
  window.open(url, '_blank');
}

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
            <img
              src={FacebookIcon}
              alt="facebook"
              onClick={() =>
                handleRedirect(
                  'https://www.facebook.com/christian.deguzman.1840/',
                )
              }
            />
            <img
              src={TwitterIcon}
              alt="twitter"
              onClick={() => handleRedirect('https://x.com/dchristian796')}
            />
            <img
              src={LinkedIn}
              alt="linkedin"
              onClick={() =>
                handleRedirect(
                  'https://www.linkedin.com/in/christian-de-guzman-b35b03279/',
                )
              }
            />
            <img
              src={GithubIcon}
              alt="github"
              onClick={() => handleRedirect('https://github.com/SerPet-eng')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
