import Link from 'next/link';
import React from 'react';

const Logo = ({ light = false }) => {
  const colorClass = light ? 'text-white' : 'text-primary';
  return (
    <Link href={'/'} className='font-primary text-3xl tracking-[4px]'>
      <span className={colorClass}>Sai Sowrav</span>
    </Link>
  );
};

export default Logo;
