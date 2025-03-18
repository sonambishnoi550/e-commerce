"use client";
import React from 'react';
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';
import { ARRIVALS_LIST } from '@/utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

const Arrivals = () => {
    return (
        <div className='md:pt-[72px] pt-[50px]'>
            <div className='container max-w-[1240px] mx-auto px-4'>
                <CustomHeading myText='NEW ARRIVALS' />
                <div className='md:pt-[55px] pt-8 md:pb-9 pb-6'>
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={16}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            340: { slidesPerView: 1.8 },
                            640: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3 },
                            1124: { slidesPerView: 4 }
                        }}
                        modules={[Autoplay]}
                        className="!lg:hidden"
                    >
                        {ARRIVALS_LIST.map((arrivals) => (
                            <SwiperSlide key={arrivals.id}>
                                <div>
                                    <Image className='max-sm:max-w-[180px]' src={arrivals.image} alt={arrivals.title} width={295} height={298} />
                                    <p className='font-bold lg:text-xl text-base text-black pt-4 pb-2'>{arrivals.title}</p>
                                    <div className='flex gap-[13px] pb-2'>
                                        <Image src={arrivals.ratingImage} alt='rating' width={104} height={18.49} />
                                        <p className='text-black font-normal md:text-base text-sm'>{arrivals.rating}/<span className='text-black/60'>5</span></p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <h4 className='font-bold text-2xl'>{arrivals.price}</h4>
                                        {arrivals.oldPrice && <h4 className='font-bold md:text-2xl text-xl text-black/40'>{arrivals.oldPrice}</h4>}
                                        {arrivals.discount && (
                                            <button className='text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]'>
                                                {arrivals.discount}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='!hidden lg:flex gap-5'>
                        {ARRIVALS_LIST.map((arrivals) => (
                            <div key={arrivals.id}>
                                <Image src={arrivals.image} alt={arrivals.title} width={295} height={298} />
                                <p className='font-bold text-xl text-black pt-4 pb-2'>{arrivals.title}</p>
                                <div className='flex gap-[13px] pb-2'>
                                    <Image src={arrivals.ratingImage} alt='rating' width={104} height={18.49} />
                                    <p className='text-black font-normal text-base'>{arrivals.rating}/<span className='text-black/60'>5</span></p>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <h4 className='font-bold text-2xl'>{arrivals.price}</h4>
                                    {arrivals.oldPrice && <h4 className='font-bold text-2xl text-black/40'>{arrivals.oldPrice}</h4>}
                                    {arrivals.discount && (
                                        <button className='text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]'>
                                            {arrivals.discount}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='font-medium flex justify-center  max-sm:w-full max-sm:mr-4 text-center mx-auto text-base py-[15px] px-20 rounded-[62px] border border-[#0000001A]'>View All</button>
                <p className='border border-[#0000001A] w-full md:mt-[64px] mt-10'></p>
            </div>
        </div>
    );
};

export default Arrivals;
