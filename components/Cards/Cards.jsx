'use client'
import Card from "./Card"

import {Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { motion, AnimatePresence } from 'framer-motion'

import { FaHtml5,FaJs,FaReact,FaFigma,FaNodeJs,FaPython, FaCss3 } from "react-icons/fa"

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
    qualification: 'Bachelor of Technology in Chemical Engineeering',
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
    <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
      <TabsList className='max-w-max mb-[30px]'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
        <TabsTrigger value='skills'>Skills</TabsTrigger>
      </TabsList>
      <TabsContent value='experience' className='w-full'>
        <AnimatePresence>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1, y:0}} exit={{opacity:0,y:20}} transition={{duration:0.3}}>
          {journey.filter((item) => item.type === 'experience').map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value='education' className='w-full'>
        <AnimatePresence>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1, y:0}} exit={{opacity:0,y:20}} transition={{duration:0.3}}>
          {journey.filter((item) => item.type === 'education').map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value='skills' className='w-full'>
        <AnimatePresence>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
          {journey.filter((item) => item.type === 'skills').map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  )
}

export default Cards