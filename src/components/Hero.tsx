'use client';
import React, { useState } from 'react';
import Header from './common/Header';
import { useInView } from 'react-intersection-observer';
import { COUNT_LIST } from '../utils/helper';
import CountUp from 'react-countup';
import Image from 'next/image';
interface CountItem {
    label: string;
}

const Hero: React.FC = () => {
    const [count, setCount] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCount(inView),
    });

    const getCountEndValue = (index: number) => {
        const values = [155, 325, 250];
        return count ? values[index] || 0 : 0;
    };

    return (
        <div className="bg-[#F2F0F1] lg:pb-[116px] relative">
            <Header />
            <div className="container max-w-[1240px] mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="md:pt-[103px] pt-10">
                        <h1 className="xl:max-w-[577px] relative z-10 lg:max-w-[625px] w-full font-bold md:text-[64px] text-4xl leading-[34px] md:leading-[64px] text-black">
                            FIND CLOTHES THAT MATCH YOUR STYLE
                        </h1>
                        <p className="font-normal md:text-base text-sm leading-[22px] text-black/60 lg:max-w-[545px] w-full md:pt-[32px] pt-5">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out
                            your individuality and cater to your sense of style.
                        </p>
                        <button className="bg-black cursor-pointer max-sm:w-full text-white py-[14px] px-17 text-base font-medium rounded-[62px] md:mt-8 mt-6 md:mb-12 mb-5">
                            Shop Now
                        </button>
                        <div
                            ref={ref}
                            className="flex relative z-10 max-lg:!flex-wrap pt-9 items-center max-sm:justify-center"
                        >
                            {COUNT_LIST.map((item: CountItem, index: number) => (
                                <div
                                    key={index}
                                    className={`flex flex-col justify-center items-center ${index === 0 ? "xl:mr-8 mr-6 border-r border-[#0000001A] " : index === 1 ? "xl:mr-8 mr-6 md:border-r border-[#0000001A]" : ""}`}
                                >
                                    <h3 className="font-bold md:text-[40px] text-2xl text-black flex items-center pr-8">
                                        <CountUp start={0} end={getCountEndValue(index)} duration={3} />
                                        <span className="text-black relative top-[2px]">+</span>
                                    </h3>
                                    <p className=" text-black/60 whitespace-nowrap font-normal md:text-base text-xs xl:pr-8 pr-6">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                    <div className='lg:hidden block max-w-[390px] mx-auto'>
                        <Image className='flex mx-auto md:max-w-[390px] max-w-[375px]' src="/assets/images/png/hero-mobile-image.png" alt='hero-mobile' width={390} height={448}/>
                    </div>
            <div>
                <Image className='absolute right-[5%] lg:block hidden xl:top-[20%] top-[27%] z-10' src="/assets/images/png/hero-big-star.png" alt="hero-image" width={104} height={104} />
                <Image className='absolute xl:right-[45%] lg:block hidden right-[34%] top-[50%] z-10' src="/assets/images/png/hero-small-star.png" alt="hero-image" width={56} height={56} />
                <Image className='absolute xl:right-[5%] lg:block hidden -right-[0%] -bottom-[0.1%]  xl:max-w-[651px] max-w-[470px]' src="/assets/images/png/hero-image.png" alt="hero-image" width={ 651} height={668 } />
            </div>
        </div>
    );
};

export default Hero;
