import Image from 'next/image'
import React from 'react'

const Card = ({type,logoUrl,position,duration,description,company,institution,qualification,name,icon}) => {
  return (
    <div className='w-full h-[300px] overflow-hidden flex items-center sticky top-12'>
      <div className='w-full h-[270px] border-accent/80 bg-[#f4ffff] rounded-[8px] '>
        <div className='flex flex-col h-full'>
          <div
            className='h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between
          items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]'
          >
            <div className='flex gap-2'>
              <Image src={'/assets/journey/shape.svg'} width={16} height={16} alt='' />
              <h3 className='text-lg font-semibold text-primary'>
                {type === 'experience' ? position : type === 'education' ? qualification : duration}{' '}
              </h3>
              <p className='text-base'>
                {type !== 'experience' && type !== 'education' ? null : duration}
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16'>
              <div>
                {type === 'skill' ? (
                  <div>
                    {' '}
                    <div>{icon}</div>{' '}
                  </div>
                ) : (
                  <div className='relative w-[300px] h-[38px] xl:h-[44px]'>
                    <Image src={logoUrl} fill alt='' className='object-contain' />{' '}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card