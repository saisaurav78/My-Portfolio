'use client'
import Card from "./Card"

import {Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { motion, AnimatePresence } from 'framer-motion'

import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaFigma,FaNodeJs,FaPython, FaCss3 } from "react-icons/fa"

const journey = [
    {
        type: 'experience',
        company: 'Apex Planet Pvt Ltd',
        logoUrl: '/assets/journey/experience/logo-1.svg',
        position: 'Web Developer Intern',
        duration: 'Jan 2025- Feb 2025',
    },
    {
        type: 'experience',
        company: 'Orinson Technologies Pvt Ltd',
        logoUrl: '/assets/journey/experience/logo-1.svg',
        position: 'Full Stack Developer Intern',
        duration: 'Nov 2024-Jan 2025',
    },
    {
        type: 'education',
        company: 'Coursera',
        logoUrl: '/assets/journey/experience/logo-1.svg',
        position: 'Meta Frontend Developer Certification',
        duration: 'Nov 2024-Jan 2025',
    },
    {
        type: 'Skills',
        name:'HTML',
        icon:<FaHtml5/>,
    },
    {
        type: 'Skills',
        name:'CSS',
        icon:<FaCss3/>,
    },
    {
        type: 'Skills',
        name:'JavaScript',
        icon:<FaJs/>,
    },
    {
        type: 'Skills',
        name:'React.js',
        icon:<FaReact/>,
    },
    {
        type: 'Skills',
        name:'Node.js',
        icon:<FaNodeJs/>,
    },
    {
        type: 'Skills',
        name:'Python',
        icon:<FaPython/>,
    },
    {
        type: 'Skills',
        name:'Figma',
        icon:<FaFigma/>,
    },
]
const Cards = () => {
  return (
    <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
      <TabsList className='max-w-max mb-[30px]'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
        <TabsTrigger value='skills'>My Skills</TabsTrigger>
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
          {journey.filter((item) => item.type === 'skill').map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  )
}

export default Cards