"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Header from '@/components/common/Header';
import CustomHeading from '@/components/common/CustomHeading';

interface CartItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
    size: string;
    color: string;
}

const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const router = useRouter();

    const updateCart = (newCart: CartItem[]) => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event('cartUpdate'));
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const handleQuantityChange = (index: number, delta: number) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
        updateCart(updatedCart);
    };

    const handleRemove = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        updateCart(updatedCart);
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = subtotal * 0.2;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    return (
        <>
            <Header />
            <div className="container mx-auto pt-10 md:pb-40 pb-10 px-4">
                <h3 className='font-normal text-base text-black/60 pb-3 text-left'>Home <span className='text-black'>&gt; Card</span> </h3>
                <CustomHeading myText="Your Cart" myClass="!mb-[40px] !text-left !text-[40px]" />
                <div className="flex max-lg:flex-col gap-10">
                    <div className="lg:w-7/12 w-full border border-black/10 p-6 rounded-[20px]">
                        {cart.length === 0 ? (
                            <p className='text-3xl'>Your cart is empty.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-b border-black/10 py-6">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.image || '/assets/images/png/green-t-shirt.png'}
                                            alt={item.name || 'Product Image'}
                                            width={100}
                                            height={100}
                                            className="rounded-md"
                                        />

                                        <div>
                                            <h2 className="md:text-xl text-base font-bold whitespace-nowrap max-sm:mt-7">{item.name}</h2>
                                            <p className='text-xs md:text-base'>Size: {item.size}</p>
                                            <p className='text-xs md:text-base'>Color: {item.color}</p>
                                            <p className="font-bold text-xl md:text-2xl">${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end items-end ">
                                        <button onClick={() => handleRemove(index)} className="text-red-500 mb-14 cursor-pointer">
                                            <Image src="/assets/images/svg/delete.svg" alt="trash" width={24} height={24} />
                                        </button>
                                        <div className='bg-[#F0F0F0] rounded-full gap-5 md:h-[44px] h-[31px] max-sm:w-[105px] flex items-center max-sm:mt-5'>
                                            <button onClick={() => handleQuantityChange(index, -1)} className="pl-5 py-3 text-2xl font-bold cursor-pointer">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(index, 1)} className="pr-5 py-3 text-2xl font-bold cursor-pointer">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="lg:w-5/12 max-lg:w-full px-6 py-5 border border-black/10 rounded-[20px] h-[458px]">
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                        <p className='flex justify-between mb-5'>Subtotal <span className="font-bold">${subtotal}</span></p>
                        <p className='flex justify-between mb-5'>Discount (-20%)<span className="text-red-500">-${discount.toFixed(2)}</span></p>
                        <p className='flex justify-between mb-5'>Delivery Fee<span className="font-bold">${deliveryFee}</span></p>
                        <hr className="my-4 border-black/10" />
                        <p className="text-xl font-bold flex justify-between mb-6">Total <span>${total.toFixed(2)}</span></p>

                        <div className="mb-6 flex gap-3 items-center justify-center">
                            <div className='flex bg-[#F0F0F0] gap-3 rounded-full py-3 md:px-4 px-2 items-center w-full mt-3'>
                                <Image src="/assets/images/svg/promo.svg" alt="promo" width={24} height={24} />
                                <input type="text" placeholder="Add promo code" className="w-full rounded-full md:text-base text-sm" />
                            </div>
                            <button className="px-[38px] bg-black text-white py-3 mt-3 rounded-full cursor-pointer hover:bg-white hover:text-black border bprder-black transition-all duration-500">Apply</button>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-full cursor-pointer hover:bg-white hover:text-black border bprder-black transition-all duration-500">Go to Checkout →</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;