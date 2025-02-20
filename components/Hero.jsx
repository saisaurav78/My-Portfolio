'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import RotatingShape from './RotatingShape';
import Header from './Header';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='Home' className='h-[800px] relative bg-accent/10 xl:bg-white'>
      <Header />
      <div className='container mx-auto h-full'>
        <div
          className='relative z-20 h-full w-full xl:max-w-[768px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left pt-10'
        >
          <h1 className='h1 mb-2 max-w-[320px] xl:max-w-none'>
            <span className='text-accent'>
              I build and <span className='text-black'>Design</span> Amazing{' '}
            </span>
            <span className='inline-block'>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={['Websites', 2000, 'Apps', 2000]}
                speed={50}
                repeat={Infinity}
                cursor={false}
                className='inline'
              />
            </span>
          </h1>
          <p className='lead max-w-[476px] mb-7'>
            Delivering powerful, custom websites that blend aesthetics with performance.
          </p>
          <div className='space-x-8'>
            <ScrollLink to='Contact' smooth>
              <button className='btn btn-accent mb-8 text-black'>Contact Me</button>
            </ScrollLink>
            <Link
              target='__blank'
              href={
                'https://drive.google.com/file/d/1ffTrpsStRRMFyMJM_XiK9ZB9x5EzJnch/view?usp=sharing'
              }
              className=' btn bg-primary text-white hover:opacity-80 ease-in-out transition-colors duration-75'
            >
              My Resume
            </Link>
          </div>
        </div>
        <div className='hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent'>
          <div className='absolute w-[558px] h-[642px] bottom-8 z-40 left-[6.5vw]'>
            <Image
              alt='hero-image'
              className='object-contain'
              src={'/assets/hero/dev.png'}
              fill
              quality={100}
              priority
            />
          </div>
          <div
            className='hidden xl:flex absolute top-48 left-[4vw]'
            data-scroll
            data-scroll-speed='0.05'
          >
            <Image src={'/assets/hero/arrow.svg'} width={160} height={160} alt='arrow' />
          </div>
          <div className='absolute top-[600px] left-[3vw]' data-scroll data-scroll-speed='0.2'>
            <RotatingShape
              direction={'left'}
              duration={6}
              content={
                <Image
                  src={'/assets/hero/shape-1.svg'}
                  width={38}
                  height={38}
                  alt='rotating-shape'
                />
              }
            />
          </div>
          <div className='absolute top-[240px] xl:left-[33vw]' data-scroll data-scroll-speed='0.1'>
            <RotatingShape
              direction={'right'}
              duration={5}
              content={
                <Image
                  src={'/assets/hero/shape-2.svg'}
                  width={34}
                  height={34}
                  alt='rotating-shape'
                />
              }
            />
          </div>
          <div className='absolute top-[480px] xl:left-[40vw]' data-scroll data-scroll-speed='0.08'>
            <RotatingShape
              direction={'left'}
              duration={4}
              content={
                <Image
                  src={'/assets/hero/shape-3.svg'}
                  width={34}
                  height={34}
                  alt='rotating-shape'
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
