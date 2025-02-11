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
      <div className="container mx-auto">
        <Tabs defaultValue='all' className='w-full flex flex-col'>
          <div className='flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]' >
            <AnimatedText text={'My Latest Work'} textStyles={'h2 mb-[30px] xl:mb-0'} />
            <TabsList className='max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0'>{tabData.map((item, index) => {
              return <TabsTrigger onClick={()=>setTabValue(item.category)} value={ item.category} key={index} className='capitalize w-max min-w-[120px]' >{ item.category}</TabsTrigger>
            }) }</TabsList>
          </div>
          
          <TabsContent value={tabValue} className='w-full'> 
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div key={index} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.3}}> 
                    <WorkItem {...item} />
                  </motion.div>

                ))}
              </AnimatePresence>
            </div>
            {visibleItems < filterWork.length && (<div className='flex justify-center mt-12'><button onClick={loadMoreItems} className='btn btn-accent'>Load More</button></div>)}
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default Work;
