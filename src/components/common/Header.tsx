"use client";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HEADER_LIST } from "@/utils/helper";
const Header = () => {
    const [open, setOpen] = useState<boolean>();
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState(0);
    const [showBanner, setShowBanner] = useState(true);
    const pathname = usePathname();
    const updateCartCount = () => {
        type CartItem = { quantity: number };
        const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
    };

    useEffect(() => {
        const bannerState = localStorage.getItem('bannerDismissed');
        if (bannerState === 'false') {
            setShowBanner(false);
        }

        updateCartCount();

        const handleCartUpdate = () => updateCartCount();
        window.addEventListener("cartUpdate", handleCartUpdate);

        return () => {
            window.removeEventListener("cartUpdate", handleCartUpdate);
        };
    }, [pathname]);

    const handleCloseBanner = () => {
        setShowBanner(false);

    };

    return (
        <div>
            {showBanner && (
                <div className="bg-black">
                    <div className="text-white md:text-center py-2 flex md:justify-center container px-4 mx-auto relative">
                        <span className="md:text-sm text-xs text-center flex justify-center items-center font-normal">
                            Sign up and get 20% off on your first order.{" "}
                            <Link href="#" className="underline font-medium">
                                Sign Up Now
                            </Link>
                        </span>
                        <button onClick={handleCloseBanner} className="absolute right-4 top-2 cursor-pointer">
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            <div className="py-4 bg-white relative">
                <div className="container max-w-[1240px] mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <button className="overflow-hidden relative z-50 lg:hidden size-6 max-sm:h-4 flex flex-col justify-between items-center " onClick={() => setOpen(!open)}>
                            <span className={`bg-black w-6 h-0.5 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}></span>
                            <span className={`bg-black  w-6 h-0.5 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""}`}></span>
                            <span className={`bg-black w-6 h-0.5 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}></span>
                        </button>
                        <Link href="/">
                            <h2 className="font-bold text-[32px] text-black font-integral">SHOP.CO</h2>
                        </Link>
                        <div className="hidden lg:flex gap-6 relative">
                            <div className="relative">
                                <button
                                    className="font-normal text-base text-black flex items-center gap-2 cursor-pointer hover:text-red-500 transition-all duration-500"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    Shop
                                    <ChevronDown size={16} />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-[170px] bg-white shadow-lg border rounded-lg py-1 z-50">
                                        <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Men's Clothing</Link>
                                        <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Women's Clothing</Link>
                                        <Link href="#" className="block px-2 py-1 text-black hover:bg-gray-100">Accessories</Link>
                                    </div>
                                )}
                            </div>
                            {HEADER_LIST.map((link: any, index: number) => (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className={`relative  transition-all duration-500 ${pathname === link.link ? 'underline font-bold transition-all duration-500' : ''}`}
                                  
                                >
                                    <span className="hover:text-red-500 transition-all duration-500">{link.title}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="md:hidden">
                                <Image src="/assets/images/svg/search.svg" width={24} height={24} alt="search" />
                            </button>
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
                            <Link href="/cart" className="relative cursor-pointer">
                                <Image src="/assets/images/svg/cart.svg" alt="cart" width={24} height={24} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center transition-all duration-500 z-40 ${open ? "translate-y-0" : "-translate-y-full"}`}
            >
                <nav className="flex flex-col gap-4">
                    {["Shop", "On Sale", "New Arrivals", "Brands"].map((item, index) => (
                        <Link key={index} href="#" onClick={() => setOpen(false)} className="font-bold text-base text-black">
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Header;
