"use client";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { TABS_LIST } from "../utils/helper";
import { REVIEW_LIST } from "../utils/helper";

interface Review {
    id: number;
    name: string;
    rating: number;
    date: string;
    comment: string;
}

const Reviews = () => {
    const [activeTab, setActiveTab] = useState("Rating & Reviews");

    return (
        <div className="container max-w-[1240px] mx-auto p-6">
            <div className="flex border-b border-[#0000001A] justify-between ">
                {TABS_LIST.map(( tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-4 text-xl font-normal ${activeTab === tab ? "border-b-2 border-black text-black" : "text-[#00000099]"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {activeTab === "Rating & Reviews" && (
                <div>
                    <h2 className="text-2xl font-bold mt-6">All Reviews <span className="font-normal text-base text-[#00000099]"> (451)</span></h2>
                    <div className="grid md:grid-cols-2 gap-5 mt-4">
                        {REVIEW_LIST.map((review) => (
                            <div
                                key={review.id}
                                className="border border-[#0000001A] py-7 px-8 rounded-[20px] bg-white"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Image src={review.ratingImage} alt='rating' width={104} height={18.49} />
                                        <div className="flex items-center gap-2 pt-[15px]">
                                            <div className="font-bold text-xl">{review.name}</div>
                                            <Image
                                                src="/assets/images/svg/green-tick.svg"
                                                alt="verified"
                                                width={19.5}
                                                height={19.5}
                                            />
                                        </div>
                                      
                                    </div>
                                    <BsThreeDots className="cursor-pointer" />
                                </div>
                                <p className=" text-[#00000099] font-normal text-base leading-[22px] pt-3 pb-6">{review.comment}</p>
                                <p className=" text-[#00000099] font-medium text-base">Posted on {review.date}</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-9 border border-[#0000001A] py-[13px] px-[42px] font-medium rounded-[62px] block mx-auto">
                        Load More Reviews
                    </button>
                </div>
            )}
            {activeTab === "Product Details" && (
                <div className="mt-6 text-black text-4xl text-center">
                    <p>Comming Soon...</p>
                </div>
            )}
            {activeTab === "FAQs" && (
                <div className="mt-6 text-black text-4xl text-center">
                    <p>Comming Soon...</p>
                </div>
            )}
        </div>
    );
};

export default Reviews;
