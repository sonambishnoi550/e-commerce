"use client";
import React from 'react';
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';
import { SELLING_LIST } from '@/utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

const Selling = () => {
    return (
        <div className='md:pt-[72px] pt-10 md:pb-20 pb-[50px]'>
            <div className='container max-w-[1240px] mx-auto px-4'>
                <CustomHeading myClass='!uppercase' myText='top selling' />
                <div className='md:pt-[55px] md:pb-9 pt-8 pb-6'>
                    <div className='xl:hidden'>
                        <Swiper
                            slidesPerView={1.2}
                            spaceBetween={16}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                340: { slidesPerView: 1.8 },
                                640: { slidesPerView: 2.5 },
                                840: { slidesPerView: 3 },
                                1024: { slidesPerView: 3 },
                                1124: { slidesPerView: 4 }
                            }}
                            modules={[Autoplay]}
                        >
                            {SELLING_LIST.map((selling) => (
                                <SwiperSlide key={selling.id} className="pointer-events-none">
                                    <div className="pointer-events-auto">
                                        <Image
                                            className='max-sm:max-w-[180px] hover:scale-95 transition-all duration-500 cursor-pointer'
                                            src={selling.image}
                                            alt={selling.title}
                                            width={295}
                                            height={298}
                                        />
                                        <p className='font-bold md:text-xl text-base text-black pt-4 pb-2'>{selling.title}</p>
                                        <div className='flex gap-[13px] pb-2'>
                                            <Image src={selling.ratingImage} alt='rating' width={104} height={18.49} />
                                            <p className='text-black font-normal md:text-base text-xs'>{selling.rating}/<span className='text-black/60'>5</span></p>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <h4 className='font-bold md:text-2xl text-xl'>{selling.price}</h4>
                                            {selling.oldPrice && <h4 className='font-bold text-2xl text-black/40'>{selling.oldPrice}</h4>}
                                            {selling.discount && (
                                                <button className='text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]'>
                                                    {selling.discount}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='hidden xl:flex gap-5'>
                        {SELLING_LIST.map((selling) => (
                            <div key={selling.id}>
                                <Image className='hover:scale-95 transition-all duration-500 cursor-pointer'
                                    src={selling.image}
                                    alt={selling.title}
                                    width={295}
                                    height={298}
                                />
                                <p className='font-bold text-xl text-black pt-4 pb-2'>{selling.title}</p>
                                <div className='flex gap-[13px] pb-2'>
                                    <Image src={selling.ratingImage} alt='rating' width={104} height={18.49} />
                                    <p className='text-black font-normal text-base'>{selling.rating}/<span className='text-black/60'>5</span></p>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <h4 className='font-bold text-2xl'>{selling.price}</h4>
                                    {selling.oldPrice && <h4 className='font-bold text-2xl text-black/40'>{selling.oldPrice}</h4>}
                                    {selling.discount && (
                                        <button className='text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]'>
                                            {selling.discount}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='font-medium cursor-pointer flex mx-auto max-sm:w-full justify-center items-center text-base py-[15px] px-20 rounded-[62px] border border-[#0000001A] hover:bg-black hover:text-white transition-all duration-500'>
                    View All
                </button>
            </div>
        </div>
    );
};

export default Selling;
