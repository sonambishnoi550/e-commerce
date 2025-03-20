"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";

interface CartItem {
    id: number;
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
}

const initialCart: CartItem[] = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        size: "Large",
        color: "White",
        price: 145,
        image: "/assets/images/png/like-one.png",
        quantity: 1,
    },
    {
        id: 2,
        name: "Checkered Shirt",
        size: "Medium",
        color: "Red",
        price: 180,
        image: "/assets/images/png/selling-three.png",
        quantity: 1,
    },
    {
        id: 3,
        name: "Skinny Fit Jeans",
        size: "Large",
        color: "Blue",
        price: 240,
        image: "/assets/images/png/arrival-one.png",
        quantity: 1,
    },
];

const Cart = () => {
    const [cart, setCart] = useState(initialCart);
    const discountPercentage = 20;
    const deliveryFee = 15;

    const updateQuantity = (id: number, delta: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discount + deliveryFee;

    return (
        <div className="container mx-auto p-6 max-w-[1240px]">
            <CustomHeading myClass=" text-[40px] text-left" myText="Your cart"/> 
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-6">
                <div className="md:col-span-2 col-span-1 bg-white border border-[#0000001A] rounded-lg p-4 ">
                    {cart.map((item) => (
                        <div key={item.id} className="flex  justify-between border-b border-[#0000001A] pb-4 mb-4">
                            <Image src={item.image} alt={item.name} width={124} height={124} className="rounded" />
                            <div className="flex-1 ml-4">
                                <h2 className="font-bold text-xl">{item.name}</h2>
                                <p className="text-sm text-[#00000099] pt-1">Size: {item.size}</p>
                                <p className="text-sm text-[#00000099] pt-1"> Color: {item.color}</p>
                                <p className="text-2xl font-bold pt-[15px]">${item.price}</p>
                            </div>
                            <div>
                                <button className="text-red-500 flex justify-end mb-[56px] items-end max-w-[24px] ml-auto" onClick={() => removeItem(item.id)}><Image src="/assets/images/svg/delete.svg" alt="delete" width={24} height={24}/></button>
                            <div className="flex items-center gap-5 bg-[#F0F0F0] py-1 px-[22px] rounded-[62px]">
                                <button
                                 className="text-3xl"
                                    onClick={() => updateQuantity(item.id, -1)}
                                >-
                                </button>
                                <span className="text-sm">{item.quantity}</span>
                                <button
                               className="text-3xl"
                                    onClick={() => updateQuantity(item.id, 1)}
                                >+
                                </button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
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
    );
};

export default Cart;
