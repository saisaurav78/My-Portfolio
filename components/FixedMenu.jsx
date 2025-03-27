import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { useMediaQuery } from 'react-responsive';
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi';

import Nav from './Nav';
import Socials from './Socials';

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width:640px)',
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className='fixed w-full h-[400px] z-50 flex justify-center bg-transparent'>
      <div className='fixed inset-0 pointer-events-none'>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 flex items-center justify-center w-full h-screen bg-black/50 z-50 pointer-events-auto'
            >
              <div className='bg-white w-full h-[400px] shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg'>
                <Nav
                  containerStyles={
                    'md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left'
                  }
                  listStyles={'flex flex-col justify-center gap-4'}
                  linkStyles={'font-primary text-4xl text-primary cursor-pointer'}
                  spy={true}
                />
                <div className='hidden md:flex mx-auto'>
                  <div className='mx-auto'>
                    <div className='flex gap-12 md:gap-6 mb-12'>
                      <div className='flex flex-col'>
                        <div className='text-[28px] text-accent mb-2'>
                          <FiMapPin />
                        </div>
                        <p className='font-semibold text-primary text-lg'>Location</p>
                        <p>Visakhapatnam, INDIA</p>
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-[28px] text-accent mb-2'>
                          <FiPhoneCall />
                        </div>
                        <p className='font-semibold text-primary text-lg'>Phone</p>
                        <p>+91 9154305571</p>
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-[28px] text-accent mb-2'>
                          <FiMail />
                        </div>
                        <p className='font-semibold text-primary text-lg'>Email</p>
                        <p>andukurisaisowrav7@gmail.com</p>
                      </div>
                    </div>
                    <Socials
                      containerStyles={'flex gap-2'}
                      iconStyles={
                        'text-[20px] w-[32px] text-primary flex items-center justify-center rounded-full'
                      }
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='fixed z-50 bottom-8 right-4'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto'
        >
          <CgMenuGridR className='text-4xl text-white' />
        </button>
      </div>
    </div>
  );
};

export default FixedMenu;
