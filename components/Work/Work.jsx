import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItem';

// Work data stored outside to avoid unnecessary re-creation
const data = [
  {
    href: 'https://www.figma.com/community/file/1466468695704871952/autowala-an-app-for-booking-auto-rides',
    category: 'Design',
    img: '/assets/work/AutoWala.png',
    title: 'AutoWala - An Auto-ride Booking app',
  },
  {
    href: 'https://suntechnologiesvzm.netlify.app',
    category: 'Frontend',
    img: '/assets/work/SunTechnologies.png',
    title: 'Business Website Design + Dev for SunTechnologies',
  },
  {
    href: 'https://a2zkart.vercel.app',
    category: 'Full Stack',
    img: '/assets/work/A2ZKart.png',
    title: 'A2ZKart - A Full Stack Ecommerce site',
  },
  {
    href: 'https://posts-com.onrender.com',
    category: 'Full Stack',
    img: '/assets/work/PostsNow.png',
    title: 'PostsNow - A Full Stack Blog site',
  },
  {
    href: 'https://sai-sowrav.itch.io/space-world',
    category: 'Game Dev',
    img: '/assets/work/SpaceWorld.png',
    title: 'SpaceWorld - A 2D Game',
  },
];

const Work = () => {
  const [tabValue, setTabValue] = useState('all');
  const [visibleItems, setVisibleItems] = useState(4);

  // Unique categories memoized for performance
  const uniqueCategories = useMemo(
    () => ['all', ...new Set(data.map((item) => item.category))],
    [],
  );

  // Filtering work items based on selected category
  const filteredWork = useMemo(
    () => data.filter((item) => tabValue === 'all' || item.category === tabValue),
    [tabValue],
  );

  const loadMoreItems = () => setVisibleItems((prev) => prev + 2);

  return (
    <section id='Work' className='pt-16 min-h-[1000px]'>
      <div className='container mx-auto'>
        <Tabs defaultValue='all' className='w-full flex flex-col'>
          <div className='flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-8'>
            <AnimatedText text='My Latest Work' textStyles='h2 mb-8 xl:mb-0' />
            <TabsList className='text-center justify-center items-center max-w-max h-full mb-8 flex flex-col md:flex-row gap-4 md:gap-0'>
              {uniqueCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  onClick={() => setTabValue(category)}
                  value={category}
                  className='capitalize w-max min-w-[120px]'
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={tabValue} className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <AnimatePresence>
                {filteredWork.slice(0, visibleItems).map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {visibleItems < filteredWork.length && (
              <div className='flex justify-center mt-12'>
                <button
                  onClick={loadMoreItems}
                  className='btn btn-accent'
                  aria-label='Load more projects'
                >
                  Load More
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
