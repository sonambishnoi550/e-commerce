import React from 'react';
import Image from 'next/image';
import { LOGO_LIST } from '@/utils/helper';

const Logo = () => {
  return (
    <div className='md:py-11 py-10 bg-black'>
      <div className='container max-w-[1240px] mx-auto px-4'>
        <div className='flex max-lg:flex-wrap justify-center xl:gap-[106px] gap-8'>
          {LOGO_LIST.map((logo, index) => (
            <Image
              key={index}
              className='max-sm:max-w-[150px] hover:scale-110 transition-all duration-500'
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;