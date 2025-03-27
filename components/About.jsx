import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section id='About' className='relative pt-12 pb-24'>
      <div className='container mx-auto h-full'>
        <div className='h-full flex items-center justify-center'>
          {/* Developer Image Section */}
          <div className='hidden xl:flex flex-1 pl-8'>
            <div className='relative w-full max-w-[380px]'>
              <div className='w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10'></div>
              <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center'>
                <Image
                  src={'/assets/hero/dev.png'}
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt='Sai Sowrav-Image'
                  className='w-auto h-auto'
                />
              </div>
              <div
                className='absolute top-3/4 -right-[95px] flex items-center justify-center'
                aria-hidden='true'
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity }}
                >
                  <Image
                    src={'/assets/about/shape-1.svg'}
                    width={160}
                    height={160}
                    alt='Developer Illustration'
                    loading='lazy'
                  />
                </motion.div>
                <div className='absolute text-center text-white'>
                  <div className='text-5xl font-bold leading-none'>1+</div>
                  <div className='leading-none text-center'>
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Text Section */}
          <div className='w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6 text-center xl:text-left'>
            <div>
              <AnimatedText
                text={"Hi, I'm Sai Sowrav"}
                textStyles={'whitespace-nowrap h2 text-4xl mb-6'}
              />
              <p className='text-lg'>Full Stack Developer and Designer</p>
            </div>
            <p className='max-w-[650px] md:text-lg text-md mx-auto xl:mx-0 mb-2 xl:text-lg'>
              I graduated with a Bachelor’s degree in Chemical Engineering in June 2024. With a
              strong passion for technology, I have transitioned into full stack development and
              continue to expand my knowledge in this field. I specialize in creating visually
              stunning and functional websites using modern technologies and design principles.
              Explore my work to learn more about my skills and how I can bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
