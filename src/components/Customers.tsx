"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CUSTOMERS_LIST } from '@/utils/helper';
import CustomHeading from './common/CustomHeading';


const Customers = () => {
    return (
        <section className="md:pt-16  md:pb-20 py-[50px] overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <CustomHeading myText="OUR HAPPY CUSTOMERS" myClass="!mb-[40px] !text-left" />
                <button className="swiper-button-prev absolute xl:!left-[94%] lg:!left-[92%] md:!left-[90%] !left-[80%] !top-[95%] transform -translate-y-1/2  z-10">
                    <Image src="/assets/images/svg/slider-left-arrow.svg" alt="Prev" width={24} height={24} />
                </button>
                <button className="swiper-button-next absolute right-0 !top-[95%] transform -translate-y-1/2  z-10">
                    <Image src="/assets/images/svg/slider-right-arrow.svg" alt="Next" width={24} height={24} />
                </button>
            </div>
                <div className="relative max-sm:px-4">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 3.5 },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        className="blur-effect"
                    >
                        {CUSTOMERS_LIST.map((Customer, index) => (
                            <SwiperSlide key={index} className="transition-transform duration-300">
                                <div className="md:py-7 md:px-8 p-6 bg-white rounded-[20px] border border-black/10 hover:shadow-lg">
                                    <div className="flex items-center md:mb-3 mb-1">
                                        {[...Array(Customer.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-500 text-xl mr-[5px]">★</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold md:mb-2 mb-1 flex">{Customer.name}  <Image src="/assets/images/svg/green-tick.svg" alt="green-tick" width={24} height={24} /></h3>
                                    <p className="text-gray-600 md:text-base text-sm">{Customer.review}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                   
                </div>
        
        </section>
    );
};

export default Customers;