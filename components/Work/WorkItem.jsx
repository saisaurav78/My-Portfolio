import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Badge } from '../ui/badge';

const WorkItem = ({ href, category, img, title }) => {
  return (
    <Link target='_blank' rel='noopener noreferrer' href={href} className='group'>
      <div className='w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]'>
        <Badge className='bg-primary text-base z-40 absolute top-6 left-6 capitalize'>
          {category}
        </Badge>
        <Image
          alt={title}
          src={img}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          quality={100}
          className='object-contain group-hover:scale-105 transition-all duration-500'
        />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
        <button className='bg-accent text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500'>
          <FiArrowRight className='text-2xl' />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
