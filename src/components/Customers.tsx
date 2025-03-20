"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomHeading from "./common/CustomHeading";
import {CUSTOMERS_LIST} from "../utils/helper"

const Customers: React.FC = () => {
    return (
        <div className="pt-20 pb-[170px] max-w-[1920px] mx-auto">
            <div className="container max-w-[1240px] mx-auto px-4">
            <CustomHeading myText="OUR HAPPY CUSTOMERS" myClass="!text-left md:!pb-10 !pb-6"/>

            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1124: { slidesPerView: 4.5 },
                }}
                navigation
                autoplay={{ delay: 3000 }}
            >
                {CUSTOMERS_LIST.map((customer, index) => (
                    <SwiperSlide key={index}>
                        <div className="md:px-8 md:pt-3 p-6 border  border-gray-300 rounded-2xl shadow-md max-w-[400px]">
                            <Image
                                className="pb-4"
                                src="/assets/images/svg/selling-five-star.svg"
                                alt="five-star"
                                width={138.84}
                                height={22.57}
                            />
                            <div className="flex items-center gap-2 pb-3">
                                <h5 className="font-bold text-xl text-black">{customer.name}</h5>
                                <Image
                                    src="/assets/images/svg/green-tick.svg"
                                    alt="verified"
                                    width={19.5}
                                    height={19.5}
                                />
                            </div>
                            <p className="max-w-[336px] text-base text-gray-600 pb-6">{customer.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customers;
