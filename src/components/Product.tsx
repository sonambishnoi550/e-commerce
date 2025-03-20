"use client";
import React, { useState } from "react";
import Image from "next/image";
import {PRODUCT_LIST} from "../utils/helper"

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState(PRODUCT_LIST.images[0]);
    const [selectedSize, setSelectedSize] = useState("Large");
    const [selectedColor, setSelectedColor] = useState(PRODUCT_LIST.colors[0]);

    return (
        <div className="container mx-auto p-6 flex gap-8 max-w-[1240px]">
            {/* Side Images */}
            <div className="flex flex-col gap-2">
                {PRODUCT_LIST.images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt="Product Thumbnail"
                        width={142}
                        height={147}
                        className={`cursor-pointer border ${mainImage === img ? "border-black rounded-[10px]" : ""}`}
                        onClick={() => setMainImage(img)}
                    />
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
                <Image src={mainImage} alt="Product Image" width={440} height={530} />
            </div>

            {/* Product Details */}
            <div className="flex-1">
                <h1 className="text-[40px] font-bold">{PRODUCT_LIST.title}</h1>
                <p className="text-gray-600">{PRODUCT_LIST.description}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold">${PRODUCT_LIST.price}</span>
                    <span className="text-gray-400 line-through">${PRODUCT_LIST.originalPrice}</span>
                    <span className="text-red-500">{PRODUCT_LIST.discount}</span>
                </div>

                {/* Color Selection */}
                <div className="mt-4">
                    <h3 className="text-sm font-semibold">Select Color</h3>
                    <div className="flex gap-2 mt-2">
                        {PRODUCT_LIST.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Size Selection */}
                <div className="mt-4">
                    <h3 className="text-sm font-semibold">Choose Size</h3>
                    <div className="flex gap-2 mt-2">
                        {PRODUCT_LIST.sizes.map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-2 border rounded-lg ${selectedSize === size ? "bg-black text-white" : "bg-gray-100"}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add to Cart */}
                <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
