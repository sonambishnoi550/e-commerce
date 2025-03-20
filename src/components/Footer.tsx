"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import { NAV_SECTIONS_LIST } from "../utils/helper";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(true);
    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        if (inputEmail.trim() === "" || validateEmail(inputEmail)) {
            setIsValid(true);
            setMessage("");
        } else {
            setIsValid(false);
            setMessage("Invalid email format. Please enter a valid email.");
        }
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        if (!email.trim()) {
            setMessage("Please enter your email.");
            setIsValid(false);
            setLoading(false);
            return;
        }

        if (!validateEmail(email)) {
            setMessage("Invalid email format. Please enter a valid email.");
            setIsValid(false);
            setLoading(false);
            return;
        }
        const serviceID = "service_hvt2c6j";
        const templateID = "template_3qy6u4q";
        const publicKey = "g1TgSgh61bwnSsjGZ";
        const templateParams = { user_email: email };
        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setMessage(" Subscribed successfully!");
            setEmail("");
            setIsValid(true);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage("Failed to subscribe. Please try again.");
        }
        setLoading(false);
    };

    const year = new Date().getFullYear();

    return (
        <div className="bg-[#F0F0F0] pt-40 md:pb-[81px] pb-[77px] ">
            <div className="container relative max-w-[1240px] mx-auto px-4">
                <div className="bg-black rounded-[20px] flex max-md:flex-col max-md:w-full justify-between xl:gap-40 py-9 xl:px-[64px] lg:px-10 px-6 absolute lg:-top-[97%] md:-top-[52%] -top-[45%]">
                    <h3 className="font-bold xl:text-[40px] text-3xl text-white">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h3>
                    <form className="flex flex-col w-full max-w-md" onSubmit={handleSubscribe}>
                        <div className="flex relative">
                            <Image src="/assets/images/svg/email.svg" width={20} height={20} alt="email-box"
                                className="absolute left-[7%] top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                                className={`bg-white font-normal text-base rounded-[62px] outline-none w-full pl-[52px] lg:pr-[124px] pr-24 pt-3 pb-[14px] ${!isValid ? "border-red-500 border-2" : ""
                                    }`}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-black rounded-[62px] font-medium text-base py-3 cursor-pointer mt-4"
                            disabled={loading}
                        >
                            {loading ? "Subscribing..." : "Subscribe to Newsletter"}
                        </button>
                        {message && <p className="text-white text-sm mt-2">{message}</p>}
                    </form>
                </div>
                <div className="flex flex-wrap justify-between md:gap-10 gap-6 pb-[50px]">
                    <div className="max-w-[248px]">
                        <Link href="#">
                            <h2 className="font-bold md:text-[33.45px] text-[28.85px] text-black">SHOP.CO</h2>
                        </Link>
                        <p className="font-normal text-sm leading-[22px] pt-[14px] md:pb-[35px] pb-5 text-black/60">
                            We have clothes that suit your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className="cursor-pointer gap-3 flex">

                            <Link className='bg-white border  hover:scale-110 transition-all duration-700 rounded-full size-[28px] border-[#00000033] flex items-center justify-center' href="https://x.com/?lang=en" target="_blank">
                                <Image src="/assets/images/svg/twitter.svg" alt="twitter" width={11.17} height={9.03} />
                            </Link>

                            <Link className='bg-black  hover:scale-110 transition-all duration-700 rounded-full size-[28px] flex items-center justify-center' href="https://www.facebook.com/" target="_blank">
                                <Image src="/assets/images/svg/facebook.svg" alt="telegram" width={6.32} height={12.17} />
                            </Link>

                            <Link className='bg-white hover:scale-110 transition-all duration-700 border rounded-full size-[28px] border-[#00000033] flex items-center justify-center' href="https://www.instagram.com/" target="_blank">
                                <Image src="/assets/images/svg/instagram.svg" alt="discord" width={13.54} height={13.54} />
                            </Link>

                            <Link className='bg-white hover:scale-110 transition-all duration-700 border rounded-full size-[28px] border-[#00000033] flex items-center justify-center' href="https://github.com/" target="_blank">
                                <Image src="/assets/images/svg/github.svg" alt="discord" width={12.95} height={12.65} />
                            </Link>
                        </div>
                    </div>
                    {NAV_SECTIONS_LIST.map(({ title, links }, index) => (
                        <div key={index}>
                            <h4 className="uppercase font-medium md:text-base text-sm leading-[18px] tracking-[3px] pb-[20px] text-black">
                                {title}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link, i) => (
                                    <li key={i}>
                                        <Link href="#" className="font-normal md:text-base text-sm text-[#00000099] hover:text-black transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="border w-full border-[#0000001A]"></p>
                <div className="flex flex-wrap md:justify-between justify-center pt-[25px]">
                    <p className="mt-1 text-sm">Shop.co © 2000-{year}, All Rights Reserved</p>
                    <div className="flex gap-2 max-md:mt-6">
                        <Image className="hover:scale-125 transition-all duration-500" src="/assets/images/svg/visa.svg" alt="visa" width={46.61} height={30.03} />
                        <Image className="hover:scale-125 transition-all duration-500" src="/assets/images/svg/circle.svg" alt="circle" width={46.61} height={30.03} />
                        <Image className="hover:scale-125 transition-all duration-500" src="/assets/images/svg/paypal.svg" alt="paypal" width={46.61} height={30.03} />
                        <Image className="hover:scale-125 transition-all duration-500" src="/assets/images/svg/pay.svg" alt="pay" width={46.61} height={30.03} />
                        <Image className="hover:scale-125 transition-all duration-500" src="/assets/images/svg/google-pay.svg" alt="google-pay" width={46.61} height={30.03} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
