import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import bgNavBar from '../assets/bgNavBar.png';

export default function Navbar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const mobileSize = 650;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const toggleSideBarHandler = () => {
    setToggleSideBar(!toggleSideBar);
  };

  const isWindowSize = windowSize < mobileSize;

  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: `url(${bgNavBar})`,
      }}
    >
      <div className="navbar__logo">
        <p className="navbar__logo__text">CDG</p>
      </div>
      <ul
        className={`navbar__links ${
          isWindowSize ? (toggleSideBar ? 'open' : 'close') : ''
        }`}
      >
        {links.map((link, index) => {
          return (
            <li className="navbar__items" key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      {isWindowSize ? (
        <div onClick={toggleSideBarHandler}>
          <Hamburger />
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}
