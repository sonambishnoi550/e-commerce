"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TABS_LIST, REVIEW_LIST } from "../utils/helper";

interface Review {
    id: number;
    name: string;
    rating: number;
    date: string;
    comment: string;
}

const Reviews = () => {
    const [activeTab, setActiveTab] = useState("Rating & Reviews");
    const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
    const [selectedFilter, setSelectedFilter] = useState<string>("All");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const currentDate = new Date();
    const uniqueMonths = Array.from(
        new Set(REVIEW_LIST.map(review => {
            const date = new Date(review.date);
            return `${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;
        }))
    );
    let filteredReviews = [...REVIEW_LIST].sort((a, b) => {
        return sortOrder === "latest"
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    filteredReviews = filteredReviews.filter(review => {
        const reviewDate = new Date(review.date);
        const timeDiff = (currentDate.getTime() - reviewDate.getTime()) / (1000 * 60 * 60 * 24);

        if (selectedFilter === "Last 24 Hours") return timeDiff <= 1;
        if (selectedFilter === "Last 7 Days") return timeDiff <= 7;
        if (uniqueMonths.includes(selectedFilter)) {
            return selectedFilter === `${reviewDate.toLocaleString("default", { month: "long" })} ${reviewDate.getFullYear()}`;
        }
        return true;
    });

    return (
        <div className="container max-w-[1240px] mx-auto p-4">
            <div className="flex border-b border-[#0000001A] justify-between">
                {TABS_LIST.map((tab) => (
                    <button
                        key={tab}
                        className={`pb-6 md:text-xl text-base whitespace-nowrap font-normal ${activeTab === tab ? "border-b-2 border-black text-black" : "text-[#00000099]"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "Rating & Reviews" && (
                <div>
                    <div className="flex justify-between mt-[19px] mb-[29px]">
                        <h2 className="text-2xl font-bold">
                            All Reviews <span className="font-normal text-base text-[#00000099]"> ({filteredReviews.length})</span>
                        </h2>
                        <div className="relative">
                            <button
                                className="flex items-center bg-[#F0F0F0] gap-[10px] py-[13px] px-5 rounded-[62px] cursor-pointer"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="font-medium text-base">{selectedFilter}</span>
                                <Image src="/assets/images/svg/arrow.svg" alt="arrow" width={16} height={16} />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    {["All", "Last 7 Days", "Last 24 Hours", ...uniqueMonths].map((filterOption) => (
                                        <button
                                            key={filterOption}
                                            className={`block w-full text-left px-4 py-2 ${selectedFilter === filterOption ? "bg-gray-200" : "hover:bg-gray-100"
                                                }`}
                                            onClick={() => {
                                                setSelectedFilter(filterOption);
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {filterOption}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-4">
                        {filteredReviews.length > 0 ? (
                            filteredReviews.map((review) => (
                                <div key={review.id} className="border border-[#0000001A] py-7 px-8 rounded-[20px] bg-white">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Image src={review.ratingImage} alt="rating" width={104} height={18.49} />
                                            <div className="flex items-center gap-2 pt-[15px]">
                                                <div className="font-bold text-xl">{review.name}</div>
                                                <Image src="/assets/images/svg/green-tick.svg" alt="verified" width={19.5} height={19.5} />
                                            </div>
                                        </div>
                                        <Image
                                            className="cursor-pointer"
                                            src="/assets/images/svg/three-dots.svg"
                                            alt="dots"
                                            width={20.25}
                                            height={5.25}
                                        />
                                    </div>
                                    <p className="text-[#00000099] font-normal text-base leading-[22px] pt-3 pb-6">{review.comment}</p>
                                    <p className="text-[#00000099] font-medium text-base">Posted on {review.date}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-lg font-medium text-gray-600">No reviews found for {selectedFilter}.</p>
                        )}
                    </div>

                    <button className="mt-9 border cursor-pointer border-[#0000001A] py-[13px] px-[42px] font-medium rounded-[62px] block mx-auto hover:bg-black hover:text-white transition-all duration-500">
                        Load More Reviews
                    </button>
                </div>
            )}

            {activeTab === "Product Details" && (
                <div className="mt-6 text-black text-4xl text-center">
                    <p>Coming Soon...</p>
                </div>
            )}
            {activeTab === "FAQs" && (
                <div className="mt-6 text-black text-4xl text-center">
                    <p>Coming Soon...</p>
                </div>
            )}
        </div>
    );
};

export default Reviews;
