import Card from "./Card"

import {Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { motion, AnimatePresence } from 'framer-motion'

import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaFigma,FaNodeJs,FaPython } from "react-icons/fa"

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
]
const Cards = () => {
  return (
    <div>Cards</div>
  )
}

export default Cards