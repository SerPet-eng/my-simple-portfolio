import { Link } from 'react-router-dom';

export default function Navbar() {
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

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p className="navbar__logo__text">CDG</p>
      </div>
      <ul className="navbar__links">
        {links.map((link, index) => {
          return (
            <li className="navbar__items" key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
