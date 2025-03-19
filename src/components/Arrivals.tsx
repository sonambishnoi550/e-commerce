"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CustomHeading from "./common/CustomHeading";
import Image from "next/image";
import { ARRIVALS_LIST } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Arrivals = () => {
    const router = useRouter();
    const handleNavigation = (id: number) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className="md:pt-[72px] pt-[50px]">
            <div className="container max-w-[1240px] mx-auto px-4">
                <CustomHeading myText="NEW ARRIVALS" />
                <div className="md:pt-[55px] pt-8 md:pb-9 pb-6">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={16}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            340: { slidesPerView: 1.8 },
                            640: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3 },
                            1124: { slidesPerView: 4 },
                        }}
                        modules={[Autoplay]}
                        className="!lg:hidden"
                    >
                        {ARRIVALS_LIST.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="cursor-pointer" onClick={() => handleNavigation(product.id)}>
                                    <Image
                                        className="max-sm:max-w-[180px] hover:scale-95 transition-all duration-500"
                                        src={product.image}
                                        alt={product.title}
                                        width={295}
                                        height={298}
                                    />
                                    <p className="font-bold lg:text-xl text-base text-black pt-4 pb-2">{product.title}</p>
                                    <div className="flex gap-[13px] pb-2">
                                        <Image src={product.ratingImage} alt="rating" width={104} height={18.49} />
                                        <p className="text-black font-normal md:text-base text-sm">
                                            {product.rating}/<span className="text-black/60">5</span>
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <h4 className="font-bold text-2xl">{product.price}</h4>
                                        {product.oldPrice && (
                                            <h4 className="font-bold md:text-2xl text-xl text-black/40">{product.oldPrice}</h4>
                                        )}
                                        {product.discount && (
                                            <button className="text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]">
                                                {product.discount}
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        className="mt-3 px-4 py-2 bg-black text-white rounded-md text-sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNavigation(product.id);
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Static grid for larger screens */}
                    <div className="!hidden lg:flex gap-5">
                        {ARRIVALS_LIST.map((product) => (
                            <div key={product.id} className="cursor-pointer" onClick={() => handleNavigation(product.id)}>
                                <Image
                                    className="hover:scale-95 transition-all duration-500"
                                    src={product.image}
                                    alt={product.title}
                                    width={295}
                                    height={298}
                                />
                                <p className="font-bold text-xl text-black pt-4 pb-2">{product.title}</p>
                                <div className="flex gap-[13px] pb-2">
                                    <Image src={product.ratingImage} alt="rating" width={104} height={18.49} />
                                    <p className="text-black font-normal text-base">
                                        {product.rating}/<span className="text-black/60">5</span>
                                    </p>
                                </div>
                                <div className="flex gap-[10px]">
                                    <h4 className="font-bold text-2xl">{product.price}</h4>
                                    {product.oldPrice && (
                                        <h4 className="font-bold text-2xl text-black/40">{product.oldPrice}</h4>
                                    )}
                                    {product.discount && (
                                        <button className="text-xs text-[#FF3333] font-medium py-[6px] px-[13.5px] bg-[#FF33331A] rounded-[62px]">
                                            {product.discount}
                                        </button>
                                    )}
                                </div>
                                <button
                                    className="mt-3 px-4 py-2 bg-black text-white rounded-md text-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNavigation(product.id);
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="font-medium cursor-pointer flex justify-center max-sm:w-full max-sm:mr-4 text-center mx-auto text-base py-[15px] px-20 rounded-[62px] border border-[#0000001A] hover:bg-black hover:text-white transition-all duration-500">
                    View All
                </button>
                <p className="border border-[#0000001A] w-full md:mt-[64px] mt-10"></p>
            </div>
        </div>
    );
};

export default Arrivals;
