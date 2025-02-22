import Form from '../components/Form';
import FacebookIcon from '../assets/socials/icon-facebook.svg';
import TwitterIcon from '../assets/socials/icon-x-twitter.svg';
import LinkedIn from '../assets/socials/icon-linkedin.svg';
import GithubIcon from '../assets/socials/icon-github.svg';

export default function Contact() {
  return (
    <div>
      <div>
        <p>Let&apos; have a chat!</p>
        <p>Fill up the form</p>
      </div>

      <Form />

      <div>
        <p>Contact</p>
        <p>Email</p>
      </div>

      <div>
        <p>Find me in:</p>
        <div>
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={GithubIcon} alt="github" />
        </div>
      </div>
    </div>
  );
}
