'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from "react-scroll";




const Hero = () => {
  return (
      <section className='h-[800px] relative bg-accent/10 xl:bg-white'>
          <div className='container mx-auto h-full'>
              <div className='relative z-20 h-full w-full xl:max-w-[768px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left pt-10'>
                  <h1 className='h1'>
                      <span className='text-accent'>I build Amazing </span> 
                      <TypeAnimation preRenderFirstString={true}  sequence={['Websites', 2000, 'Apps', 2000]} speed={50} repeat={Infinity} wrapper='span' cursor={false}
                      className='ml-2 xl:ml-4'/>
                  </h1>
                  <p className="lead"></p>
          </div>
          </div>    
      
      
      </section>
      
  )
}

export default Hero