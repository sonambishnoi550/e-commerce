import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="py-4 bg-white  relative">
            <div className="container max-w-[1240px] mx-auto px-4">
                <div className="flex justify-between items-center">
                    <button className="lg:hidden z-50" onClick={() => setOpen(!open)}>
                        <div className="size-[30px] flex flex-col justify-between h-5">
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "translate-x-10 opacity-0" : ""}`} />
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "rotate-45" : ""}`} />
                            <span className={`bg-black rounded-full w-[39px] h-1 transition-all duration-300 ${open ? "-rotate-45" : ""}`} />
                        </div>
                    </button>
                    <Link href="#">
                        <h2 className="font-bold text-[32px] text-black">SHOP.CO</h2>
                    </Link>
                    <div className="hidden lg:flex gap-6">
                        {["Shop", "On Sale", "New Arrivals", "Brands"].map((item, index) => (
                            <Link key={index} href="#" className="font-normal text-base text-black">
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="md:hidden">
                            <Image src="/assets/images/svg/search.svg" width={24} height={24} alt="search" />
                        </button>
                        <div className="hidden md:flex relative">
                            <Image src="/assets/images/svg/search.svg"
                                width={20} height={20}
                                alt="search"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                type="text"
                                className="xl:w-[577px] w-[480px] h-[48px] bg-[#F0F0F0] rounded-full px-10 py-2 placeholder:text-black/40"
                                placeholder="Search for products..."
                            />
                        </div>
                        <Image src="/assets/images/svg/cart.svg" alt="cart" width={24} height={24} />
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
