import Image from "next/image";
import { Rocket } from "lucide-react";

export const Hero = () => {
    return (
        <section className="bg-surface">
            <div className="max-w-5xl xl:max-w-7xl mx-auto px-5 md:px-10 xl:px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-10">

                {/* Left Content */}
                <div className="lg:w-2xl flex flex-col items-start justify-center gap-5">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold md:leading-10 lg:leading-12 xl:leading-16 text-black">
                        Grow Your Business <br />
                        with Smart Digital <br />
                        Marketing & IT Solutions
                    </h1>

                    <p className=" text-gray-600 text-sm md:text-base lg:text-lg ">
                        We help brands scale online through performance marketing, SEO,
                        social media, and modern web development — all under one roof.
                    </p>

                    <div className="mt-2 flex gap-2 md:gap-4 text-xs md:text-sm lg:text-base">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 md:gap-2 px-4 lg:px-6 py-3 rounded-lg font-semibold transition">
                            <Rocket className="size-6 md:size-7" />
                            <span>Get Free Consultation</span>
                        </button>

                        <button className="bg-gray-900 hover:bg-black text-white px-4 lg:px-6 py-3 rounded-lg font-semibold transition">
                            View Our Services
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <div className="absolute h-80 w-40 rounded-full"></div>
                    <Image
                        src="/joyful-guy-texting-message.png"
                        alt="Hero"
                        width={600}
                        height={600}
                        className="relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};
