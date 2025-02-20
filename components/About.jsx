import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section id='About' className='relative pt-12 pb-24'>
      <div className='container mx-auto h-full'>
        <div className='h-full flex items-center justify-center'>
          <div className='hidden xl:flex flex-1 pl-8'>
            <div className='relative w-full max-w-[380px]'>
              <div className='w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10 '></div>
              <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center'>
                <Image
                  src={'/assets/hero/dev.png'}
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=''
                />
              </div>
              <div className='absolute top-3/4 -right-[95px] flex items-center justify-center'>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5,
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src={'/assets/about/shape-1.svg'}
                    width={160}
                    height={160}
                    alt='Developer Illustration'
                  />
                </motion.div>
                <div className='absolute text-center text-white '>
                  <div className='text-5xl font-bold leading-none'>1+</div>
                  <div className='leading-none text-center'>
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex
          flex-col gap-6'
          >
            <div>
              <AnimatedText text={"Hi, I'm Sai Sowrav"} textStyles={'h2 text-4xl mb-[30px]'} />
              <p className='text-lg'>Full Stack Developer and Designer</p>
            </div>
            <p className='max-w-[650px] mx-auto xl:mx-0 mb-2 xl:text-lg'>
              I graduated with a Bachelor’s degree in Chemical Engineering in June 2024. I have
              diverse interests in web development, app development, and other related fields, and I
              am continuously expanding my skills and knowledge in these areas. I specialize in
              creating visually stunning and functional websites using modern technologies and
              design principles. Explore my work to learn more about my skills and how I can help
              bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
