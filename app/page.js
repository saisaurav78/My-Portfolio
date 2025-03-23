'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FixedMenu from '@/components/FixedMenu';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Work from '@/components/Work/Work';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const loadlocomotiveScroll = async () => {
      const locomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };
    loadlocomotiveScroll();
  },[]);
  return (
    <>
      <Hero />
      <FixedMenu/>
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
