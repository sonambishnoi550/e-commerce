import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image'
const Style = () => {
  return (
      <div>
          <div className="container max-w-[1240px] mx-auto max-xl:px-4">
              <div className='bg-[#F0F0F0] md:px-[64px] px-6 md:pt-[70px] pt-10 md:pb-[76px] pb-[27px] rounded-[40px]'>
                  <CustomHeading myText='BROWSE BY dress STYLE' />
                  <div className='pt-[64px]'>
                      <div className="md:flex md:gap-5 gap-4 max-xl:justify-center">
                          <Image className='xl:max-w-[407px] lg:max-w-[360px] max-sm:mb-4 md:max-w-[330px] max-w-[340px] w-full hover:scale-95 transition-all duration-1000 cursor-pointer' src="/assets/images/png/casual.png" alt='casual' width={407} height={289} />
                          <Image className='xl:max-w-[684px] lg:max-w-[470px] lg:block hidden md:max-w-[330px] max-w-[340px] w-full hover:scale-95 transition-all duration-1000 cursor-pointer' src="/assets/images/png/formal.png" alt='formal' width={684} height={289} />
                          <Image className='xl:max-w-[684px] lg:max-w-[470px] block lg:hidden md:max-w-[330px] max-w-[340px] w-full hover:scale-95 transition-all duration-1000 cursor-pointer' src="/assets/images/png/mobile-formal.png" alt='party' width={330} height={190} />

                      </div>
                      <div className="md:flex md:gap-5 gap-4 mt-4 max-xl:justify-center">
                          <Image className='xl:max-w-[684px] lg:max-w-[470px] lg:block hidden hover:scale-95 transition-all duration-1000 cursor-pointer w-full' src="/assets/images/png/party.png" alt='party' width={684} height={289} />
                          <Image className=' block lg:hidden md:max-w-[330px] max-w-[340px] max-sm:mb-5 w-full hover:scale-95 transition-all duration-1000 cursor-pointer' src="/assets/images/png/mobile-party.png" alt='party' width={330} height={190} />
                          <Image className='xl:max-w-[407px] lg:max-w-[360px] md:max-w-[330px] max-w-[340px] w-full hover:scale-95 transition-all duration-1000 cursor-pointer' src="/assets/images/png/gym.png" alt='gym' width={407} height={289} />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Style