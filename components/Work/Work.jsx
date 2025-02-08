import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItem';

const data = [
  {
    href: '',
    category: 'design',
    img: '/assets/work/thumb-1.png',
    title: 'AutoWala - An Auto-ride Booking app',
  },
  {
    href: '',
    category: 'Design and Frontend',
    img: '/assets/work/thumb-2.png',
    title: 'SunTechnologies Website',
  },
  {
    href: '',
    category: 'Full Stack',
    img: '/assets/work/thumb-3.png',
    title: 'A2ZKart- A Full Stack Ecommerce site',
  },
  {
    href: '',
    category: 'Full Stack',
    img: '/assets/work/thumb-4.png',
    title: 'PostsBlog- A Full Stack Blog site',
  },
];

const Work = () => {
  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
  const tabData = [{ category: 'all' }, ...uniqueCategories.map((category) => ({ category }))];
  const [tabValue, setTabValue] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);
  const filterWork =
    tabValue === 'all'
      ? data.filter((item) => item.category !== 'all')
      : data.filter((item) => item.category === tabValue);
  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };
  return (
    <section id='Work' className='pt-24 min-h-[1000px]'>
     <div className="container mx-auto"></div>
    </section>
  );
};

export default Work;
