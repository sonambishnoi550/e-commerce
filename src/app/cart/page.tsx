"use client";
import React from "react";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 max-w-[1240px] pb-[180px]">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="text-xl text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="text-lg">{item.price}</p>
                                <p className="text-lg">Qty: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default CartPage;
