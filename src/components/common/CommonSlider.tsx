"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CustomButton from './CustomButton';
import CustomHeading from './CustomHeading';

interface Product {
    id: number;
    image: string;
    title: string;
    rating: number;
    price: number;
    originalPrice?: number;
    discount?: string;
}

interface CommonSliderProps {
    title: string;
    list: any[];
}

const CommonSlider: React.FC<CommonSliderProps> = ({ title, list }) => {
    const router = useRouter();

    const handleClick = (item: Product) => {
        const id = encodeURIComponent(item.title.replace(/\s+/g, '-').toLowerCase());
        router.push(`/product/${id}`);
    };


    return (
        <section className="md:pt-[72px] pt-[50px]">
            <div className={`container mx-auto ${title === 'New Arrivals' ? 'border-b border-black/10' : ''} md:pb-[64px] pb-10 px-4`}>
                <CustomHeading myText={title} myClass="!mb-[55px]" />
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 3.2 },
                        1280: { slidesPerView: 4 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="pb-10"
                >
                    {list.map((item) => (
                        <SwiperSlide key={item.id} onClick={() => handleClick(item)} className='pb-16 xl:pb-2 cursor-pointer'>
                            <div className="rounded-[20px] md:w-[295px] w-[198px]">
                                <Image src={item.image} alt={item.title} width={295} height={298} className="mx-auto rounded-[20px] md:h-[298px] h-[200px]" />
                                <h3 className="mt-4 md:text-xl text-base font-semibold">{item.title}</h3>
                                <div className="flex gap-[13px] pb-2">
                                    <Image src={item.ratingImage} alt="rating" width={104} height={18.49} />
                                    <p className="text-black font-normal md:text-base text-sm">
                                        {item.rating}/<span className="text-black/60">5</span>
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <span className="md:text-2xl text-xl font-bold">${item.price}</span>
                                    {item.originalPrice && item.discount && (
                                        <>
                                            <span className="text-gray-400 line-through ml-2 text-2xl font-bold">${item.originalPrice}</span>
                                            <span className="text-red-500 py-[6px] w-[58px] h-[28px] px-[13px] rounded-full text-sm ml-2 bg-[#FF3333]/10">-{item.discount}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {(title === 'New Arrivals' || title === 'Best Sellers') && (
                    <CustomButton text="View All" myClass="px-[80px] !justify-center py-[13px] max-sm:!w-full !text-black !bg-white !border-black/10 !flex !mx-auto mt-7 md:mt-[36px] hover:!bg-black hover:!text-white" />
                )}
            </div>
        </section>
    );
};

export default CommonSlider;