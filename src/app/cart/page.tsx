"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";

interface CartItem {
    id: number;
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
}
const CartPage = () => {
    const { cart } = useCart();
    const [carts, setCarts] = useState(cart);
    const discountPercentage = 20;
    const deliveryFee = 15;
    useEffect(() => {
        setCarts(cart);
    }, [cart]);

    const updateQuantity = (id: number, delta: number) => {
        setCarts((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };
    const removeItem = (id: number) => {
        setCarts(cart.filter((item) => item.id !== id));
    };
    const subtotal = carts.reduce((sum, item) => sum + (item.price) * (item.quantity || 1), 0);

    const discount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discount + deliveryFee;


    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 max-w-[1240px] pb-[180px]">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                {carts.length === 0 ? (
                    <p className="text-xl text-gray-500">Your cart is empty.</p>
                ) : (
                            <div className="space-y-6 md:col-span-2 col-span-1">
                        {carts.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <div className="flex gap-4">
                                <Image src={item.image} alt={item.title} width={124} height={124} className="rounded" />
                                <div className="flex-col">
                                    <p className="text-xl font-semibold">{item.title}</p>
                                        <p className="text-2xl">{item.price}</p>
                                     
                                </div>
                                </div>
                                <div>
                                <button className="text-red-500 flex justify-end mb-[56px] items-end max-w-[24px] ml-auto" onClick={() => removeItem(item.id)}><Image src="/assets/images/svg/delete.svg" alt="delete" width={24} height={24} /></button>
                                    <div className="flex items-center gap-5 bg-[#F0F0F0] py-1 px-[22px] rounded-[62px]">
                                        <button
                                            className="text-3xl"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >-</button>
                                        <span className="text-sm">{item.quantity}</span>
                                        <button
                                            className="text-3xl"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="bg-white border border-[#0000001A] rounded-lg pt-5 px-6 pb-[33px]">
                    <h2 className="font-bold text-2xl mb-6">Order Summary</h2>
                    <div className="space-y-5">
                        <div className="flex justify-between"><span className="font-normal text-xl text-[#00000099]">Subtotal</span><span className="font-bold text-xl">${subtotal}</span></div>
                        <div className="flex justify-between text-red-500"><span className="font-normal text-xl text-[#00000099]">Discount (-{discountPercentage}%)</span><span className="font-bold text-xl text-[#FF3333]">-${discount}</span></div>
                        <div className="flex justify-between"><span className="font-normal text-xl text-[#00000099]">Delivery Fee</span><span className="font-bold text-xl ">${deliveryFee}</span></div>
                        <hr className="text-[#0000001A]" />
                        <div className="flex justify-between font-normal text-xl"><span>Total</span><span className="text-2xl font-bold">${total}</span></div>
                    </div>
                    <button className="w-full font-medium mt-6 bg-black text-white py-[14px] rounded-[62px]">Go to Checkout <span className="text-2xl ml-3"> →</span></button>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
