"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="w-full shadow-md">
            <div className="lg:max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-6 lg:px-10 xl:px-6 py-3 xl:py-4 flex items-center justify-between">

                <div className="flex items-center justify-center gap-0.5">
                    <Image src={"/brand-logo-black.png"} width={30} height={30} alt={"logo"} />
                    <div className="font-bold text-base xl:text-lg text-black leading-tight">
                        <div>Quick</div>
                        <div>Marketing</div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-6 xl:gap-8 text-sm xl:text-base">
                    <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Contact Us</Link>
                        <Link href="/">About Us</Link>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};
