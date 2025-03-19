import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_SECTIONS_LIST } from "../utils/helper";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-[#F0F0F0] pt-40 md:pb-[81px] pb-[77px] relative">
            <div className="container max-w-[1240px] mx-auto px-4">
                <div className="bg-black rounded-[20px] flex max-md:flex-col max-md:w-full justify-between xl:gap-40 py-9 xl:px-[64px] lg:px-10 px-6 absolute -top-[17%] !max-w-[1240px] mr-8 max-xl:left-[2%] max-xl:right-[5%]">
                    <h3 className="font-bold xl:text-[40px] text-3xl xl:max-w-[551px] lg:max-w-[415px] max-w-[351px] text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                    <div className="flex flex-col">
                        <div className="flex relative">
                            <Image src="/assets/images/svg/email.svg"
                                width={20} height={20}
                                alt="email-box"
                                className="absolute left-[7%] top-1/2 transform -translate-y-1/2"
                            />
                            <input type="text" placeholder="Enter your email address " className="bg-white font-normal text-base rounded-[62px] outline-none w-full pl-[52px] lg:pr-[124px] pr-24 relative-10 pt-3 pb-[14px]" />

                        </div>
\                        <button className="bg-white text-black rounded-[62px] font-medium text-base py-3 cursor-pointer">Subscribe to Newsletter</button>
                    </div>
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
                    <p className=" mt-1 text-sm">
                        Shop.co © 2000-{year}, All Rights Reserved
                    </p>
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
