import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
      <div className='md:py-11 py-10 bg-black'>
          <div className="container max-w-[1240px] mx-auto px-4">
              <div className="flex max-lg:flex-wrap justify-center xl:gap-[106px] gap-8">
          <Image className='max-sm:max-w-[116.73px]' src="/assets/images/png/versace.png" alt='versace' width={166.48} height={33.16} />
          <Image className='max-sm:max-w-[63.81px]' src="/assets/images/png/zara.png" alt='zara' width={91} height={38} />
          <Image className='max-sm:max-w-[109.39px]' src="/assets/images/png/gucci.png" alt='versace' width={156} height={36} />
          <Image className='max-sm:max-w-[127px]' src="/assets/images/png/prada.png" alt='prada' width={194} height={32} />
          <Image className='max-sm:max-w-[134.84px]' src="/assets/images/png/calvin.png" alt='calvin' width={206.78} height={33.35} />

              </div>
          </div>
    </div>
  )
}

export default Logo