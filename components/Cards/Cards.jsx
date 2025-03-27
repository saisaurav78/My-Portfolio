import Card from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaCss3 } from 'react-icons/fa';

const journey = [
  {
    type: 'experience',
    company: 'Apex Planet Pvt Ltd',
    logoUrl: '/assets/journey/experience/ApexPlanet_logo.png',
    position: 'Web Developer Intern',
    duration: 'Jan 2025 - Feb 2025',
  },
  {
    type: 'experience',
    company: 'Orinson Technologies Pvt Ltd',
    logoUrl: '/assets/journey/experience/Orinson.png',
    position: 'Full Stack Developer Intern',
    duration: 'Nov 2024 - Jan 2025',
  },
  {
    type: 'education',
    institution: 'Andhra University, Visakhapatnam, India',
    logoUrl: '/assets/journey/education/AU.png',
    qualification: 'Master of Computer Applications',
    duration: 'Nov 2024 - Present',
  },
  {
    type: 'education',
    institution: 'Coursera',
    logoUrl: '/assets/journey/education/coursera.svg',
    qualification: 'Meta Frontend Developer Certification',
    duration: 'Nov 2024 - March 2025',
  },
  {
    type: 'education',
    institution: 'MVGR College of Engineering, Vizianagaram, India',
    logoUrl: '/assets/journey/education/MVGR.png',
    qualification: 'Bachelor of Technology in Chemical Engineering',
    duration: 'Dec 2021 - June 2024',
  },
  {
    type: 'skills',
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    type: 'skills',
    name: 'CSS',
    icon: <FaCss3 />,
  },
  {
    type: 'skills',
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    type: 'skills',
    name: 'React.js',
    icon: <FaReact />,
  },
  {
    type: 'skills',
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    type: 'skills',
    name: 'Python',
    icon: <FaPython />,
  },
  {
    type: 'skills',
    name: 'Figma',
    icon: <FaFigma />,
  },
];

const Cards = () => {
  return (
    <Tabs defaultValue='experience' className='w-full flex flex-col items-center'>
      <TabsList className='max-w-max mb-[30px]'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
        <TabsTrigger value='skills'>Skills</TabsTrigger>
      </TabsList>

      {['experience', 'education', 'skills'].map((category) => (
        <TabsContent key={category} value={category} className='w-full'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === category)
              .map((card) => (
                <Card key={card.company || card.institution || card.name} {...card} />
              ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Cards;
