import { Link as ScrollLink } from 'react-scroll';

const Links = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Journey',
  },
  {
    name: 'Work',
  },
  {
    name: 'Contact',
  },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {Links.map((link, index) => {
          return (
            <ScrollLink
              className={linkStyles}
              spy={spy}
              activeClass='active'
              to={link.name}
              smooth
              key={index}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
