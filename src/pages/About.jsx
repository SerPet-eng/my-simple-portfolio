import ImageProfile from '../assets/profile-1.png';
import BackgroundIMG from '../assets/about-me/backgroundIMG.png';
import { useNavigate } from 'react-router-dom';
import Compass from '../assets/Compass.svg';
import Code from '../assets/Code.svg';

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about">
      <p className="about__title">About Me</p>
      <div className="about__profile">
        <img
          className="about__profile__image"
          src={ImageProfile}
          alt="profile"
        />
        <p className="about__profile__name">
          Hey, I&apos;m Christian Ulang De Guzman.
        </p>
      </div>

      <div className="about__description" id="description">
        <p className="about__description__text">
          I&apos;m a web developer with a passion for creating clean, functional
          designs. When I&apos;m not coding, you&apos;ll probably catch me
          skating around town or getting lost in music—whether it&apos;s
          hip-hop, rock, or something completely unexpected. I&apos;m all about
          learning new skills, pushing past my limits, and turning small wins
          into bigger goals.
        </p>
      </div>

      <hr />

      <div
        className="about__container"
        style={{
          backgroundImage: `url(${BackgroundIMG})`,
        }}
      >
        <div className="about__description" id="journey">
          <div className="about__description__header">
            <p className="about__description__title">My Journey</p>
            <img
              className="about__description__header__icon"
              src={Compass}
              alt="Compass"
            />
          </div>

          <p className="about__description__text">
            Skateboarding taught me about balance and persistence—two things
            that surprisingly help me write better code. Music, with its rhythms
            and unexpected turns, inspires the creativity I bring to every
            project. My journey into web development started as curiosity but
            quickly turned into a full-on passion for building things that are
            not just functional but meaningful.
          </p>
        </div>
        <div className="about__description" id="beyond">
          <div className="about__description__header">
            <p className="about__description__title">Beyond Code</p>
            <img
              className="about__description__header__icon"
              src={Code}
              alt="Code Icon"
            />
          </div>

          <p className="about__description__text">
            Outside of web development, I&apos;m a huge fan of skateboarding and
            love diving into different music genres—from the storytelling in
            Kendrick Lamar&apos;s albums to the raw energy of alternative rock.
            Lately, I&apos;ve been exploring backend web developing and learn
            how I can use it for my projects.
          </p>
        </div>
        <div className="about__description" id="why">
          <div className="about__description__header">
            <p className="about__description__title">Why I Build</p>
            <h1>👷‍♂️🛠️</h1>
          </div>

          <p className="about__description__text">
            For me, web development isn&apos;t just about writing code—it&apos;s
            about solving problems and creating something from nothing. I&apos;m
            constantly learning, whether that&apos;s mastering React, diving
            into backend development
          </p>
        </div>
        <div className="about__description" id="connect">
          <div className="about__description__header">
            <p className="about__description__title">Let's Connect</p>
            <h1>🤝</h1>
          </div>

          <p className="about__description__text">
            I&apos;m always up for collaborating on new projects or just talking
            about design, tech, or music. If you&apos;re interested in working
            together or just want to chat, feel free to reach out.
          </p>

          <button className="about__description__button" onClick={handleClick}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
