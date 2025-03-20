"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ARRIVALS_LIST } from "@/utils/helper";

const ProductDetails = () => {
    const { id } = useParams();
    const product = ARRIVALS_LIST.find((item) => item.id === Number(id));

    if (!product) return <p className="text-center text-xl font-bold">Product Not Found</p>;

    return (
        <div className="container mx-auto p-6 max-w-[1240px]">
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-2 my-2">
                        <Image src={product.ratingImage} alt="rating" width={104} height={18.49} />
                        <p className="text-lg">{product.rating}/5</p>
                    </div>
                    <div className="flex items-center gap-4 my-3">
                        <h2 className="text-2xl font-bold">{product.price}</h2>
                        {product.oldPrice && <span className="text-xl text-gray-500 line-through">{product.oldPrice}</span>}
                        {product.discount && (
                            <span className="text-red-500 font-semibold px-2 py-1 bg-red-100 rounded-md">
                                {product.discount}
                            </span>
                        )}
                    </div>
                    <button className="px-6 py-2 bg-black text-white rounded-md mt-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
