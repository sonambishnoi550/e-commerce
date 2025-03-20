"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const { cart } = useCart();
    const router = useRouter();

    return (
        <div className="py-4 bg-white relative">
            <div className="container max-w-[1240px] mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden z-50" onClick={() => setOpen(!open)}>
                        <div className="size-[30px] flex flex-col justify-between h-5">
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "translate-x-10 opacity-0" : ""}`} />
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "rotate-45" : ""}`} />
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "-rotate-45" : ""}`} />
                        </div>
                    </button>

                    {/* Logo */}
                    <Link href="#">
                        <h2 className="font-bold text-[32px] text-black">SHOP.CO</h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-6 relative">
                        {/* Shop with Dropdown */}
                        <div className="relative">
                            <button
                                className="font-normal text-base text-black flex items-center gap-2 cursor-pointer"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Shop
                                <Image src="/assets/images/svg/shop-arrow.svg" width={12} height={12} alt="dropdown" />
                            </button>
                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 w-[170px] bg-white shadow-lg border rounded-lg py-1 z-50">
                                    <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Men's Clothing</Link>
                                    <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Women's Clothing</Link>
                                    <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Accessories</Link>
                                </div>
                            )}
                        </div>

                        {/* Other Links */}
                        {["On Sale", "New Arrivals", "Brands"].map((item, index) => (
                            <Link key={index} href="#" className="font-normal text-base text-black">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon Mobile */}
                        <button className="md:hidden">
                            <Image src="/assets/images/svg/search.svg" width={24} height={24} alt="search" />
                        </button>

                        {/* Search Bar Desktop */}
                        <div className="hidden md:flex relative">
                            <Image
                                src="/assets/images/svg/search.svg"
                                width={20} height={20}
                                alt="search"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                type="text"
                                className="xl:w-[577px] w-[480px] h-[48px] outline-none bg-[#F0F0F0] rounded-full px-10 py-2 placeholder:text-black/40"
                                placeholder="Search for products..."
                            />
                        </div>

                        {/* Cart Icon with Badge */}
                        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
                            <Image src="/assets/images/svg/cart.svg" alt="cart" width={24} height={24} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
