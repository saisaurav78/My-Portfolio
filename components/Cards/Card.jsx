import Image from 'next/image';
import React from 'react';

const Card = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  company,
  institution,
  qualification,
  name,
  icon,
}) => {
  return (
    <div className='w-full h-[300px] overflow-hidden flex items-center sticky top-12'>
      <div className='w-full h-[270px] border-accent/80 bg-[#f4ffff] rounded-[8px]'>
        <div className='flex flex-col h-full'>
          {/* Header */}
          <div className='h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]'>
            <div className='flex gap-2'>
              <Image src='/assets/journey/shape.svg' width={16} height={16} alt='Shape Icon' className='lg:w-auto lg:h-auto'/>
              <h3 className='text-center font-semibold text-primary'>
                {type === 'experience' ? position : type === 'education' ? qualification : duration}
              </h3>
            </div>
            {type === 'experience' || type === 'education' ? (
              <p className='text-sm font-medium'>{duration}</p>
            ) : null}
          </div>

          {/* Main Content */}
          <div className='flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16'>
            <div className='flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0'>
              {/* Icon or Logo */}
              {type === 'skills' ? (
                <div className='w-max xl:w-[300px] h-full relative flex items-center justify-center'>
                  <div className='text-5xl text-primary/90'>{icon}</div>
                </div>
              ) : (
                <div className='relative w-[300px] h-[38px] xl:h-[44px]'>
                  <Image
                    src={logoUrl}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt='Company or Institution Logo'
                    className='object-contain'
                  />
                </div>
              )}

              {/* Description */}
              <div className='xl:border-l xl:border-secondary/10 xl:pl-12 w-full'>
                <h3 className='xl:flex h-3 mb-2 xl:mb-4'>
                  {type === 'experience'
                    ? company
                    : type === 'education'
                    ? institution
                    : type === 'skills'
                    ? name
                    : null}
                </h3>
                <p className='text-base max-w-[660px]'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
