"use client";
import React, { useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import { NAV_SECTIONS_LIST,PAYMENTS_LIST } from "../utils/helper";
import CustomButton from "./common/CustomButton";
const Footer = () => {

    const form = useRef<HTMLFormElement>(null);
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState(false);

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(true);
        if (userEmail.length > 0 && emailRegex.test(userEmail)) {
            setError(false);
            if (form.current) {
                emailjs
                    .sendForm(
                        "service_hvt2c6j",
                        "template_3qy6u4q",
                        form.current,
                        "g1TgSgh61bwnSsjGZ"
                    )
                    .then(
                        () => {
                            console.log("send mail");
                        },
                        (error) => {
                            console.log("Failed to send email. Please try again.");
                            console.error("FAILED...", error.text);
                        }
                    );
            }
          
        }
    };
    const year = new Date().getFullYear();

    return (
        <div >
                <div className="max-w-[1240px] lg:mx-auto mx-4 rounded-[20px] w-fit -mb-20 xl:gap-[200px] relative z-10 flex max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-8 items-center justify-between bg-black container py-[43px] px-[64px] max-sm:px-6 max-sm:py-8 max-md:px-7 max-md:py-10 max-lg:px-8">
                    
                        <h3 className="text-white font-integral max-w-[751px] lg:text-[40px] md:text-4xl text-2xl font-bold">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h3>
              
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="max-w-[349px] flex flex-col gap-3.5 w-full max-lg:mx-auto"
                    >
                        <div>
                            <div className="w-full py-3 px-[17px] bg-white items-center rounded-[62px] flex">
                                <div className="flex w-full items-center gap-3.5">
                                    <label className="cursor-pointer" htmlFor="mail">
                                        <Image src="/assets/images/svg/email.svg" width={20} height={20} alt="email-box" />
                                    </label>
                                    <div className="w-full">
                                        <input
                                            className="w-full text-black/40 outline-none leading-[100%]"
                                            id="mail"
                                            placeholder="Enter your email address"
                                            type="email"
                                            name="email"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {error && userEmail.length === 0 ? (
                                <p className="text-red-900 font-bold max-sm:text-sm pt-1 pl-2 ">
                                    Please enter your email address
                                </p>
                            ) : (
                                error &&
                                !emailRegex.test(userEmail) && (
                                    <p className="text-red-900 font-bold max-sm:text-sm pt-1 pl-2 ">
                                        Please enter a valid email address
                                    </p>
                                )
                            )}
                        </div>

                        <CustomButton
                            text="Subscribe to Newsletter"
                            myClass="bg-white !text-black font-medium leading-[100%] w-full py-3.5"
                        />
                    </form>
                </div>
        <div className="bg-[#F0F0F0] md:pb-[81px] pb-[77px] px-4 pt-40">
            <div className="container relative max-w-[1240px] mx-auto px-4">
                <div className="flex flex-wrap justify-between md:gap-10 gap-6 pb-[50px]">
                    <div className="max-w-[248px]">
                        <Link href="#">
                            <h2 className="font-bold md:text-[33.45px] text-[28.85px] text-black font-integral">SHOP.CO</h2>
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
                            {PAYMENTS_LIST.map((item, inedx) => (
                                <div key={inedx}>
                                    <Image
                                        width={46.61}
                                        height={30.3}
                                        alt="payment-company"
                                        src={item}
                                        className=" cursor-pointer hover:scale-125 transition-all duration-500 payment-company-images max-md:h-[26px] max-md:w-[40px]"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
