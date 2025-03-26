import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/saisaurav78',
    title: 'GitHub',
  },

  {
    icon: <FaLinkedin />,
    path: 'https://linkedin.com/in/sai-sowrav-andukuri',
    title: 'Linkedin',
  },
  {
    icon: <FaFigma />,
    path: 'https://www.figma.com/@sai_78',
    title: 'Figma',
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target='__blank'
            href={item.path}
            key={index}
            className={iconStyles}
            title={item.title}
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
