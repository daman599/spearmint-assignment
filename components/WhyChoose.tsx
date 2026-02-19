import {
    BarChart3,
    Target,
    Users,
    Cpu,
    FileText,
    Network,
} from "lucide-react";

const features = [
    {
        icon: <BarChart3 size={22} />,
        title: "Data-Driven Strategies",
        desc: "Every decision is backed by analytics and performance insights.",
    },
    {
        icon: <Network size={22} />,
        title: "Multi-Channel Expertise",
        desc: "SEO, social media, paid ads, and web — all aligned together.",
    },
    {
        icon: <Target size={22} />,
        title: "Performance-Focused",
        desc: "We focus on leads, conversions, and ROI — not vanity metrics.",
    },
    {
        icon: <Cpu size={22} />,
        title: "Tech-Enabled Solutions",
        desc: "Modern tools, automation, and scalable digital systems.",
    },
    {
        icon: <FileText size={22} />,
        title: "Transparent Reporting",
        desc: "Clear reports, real numbers, complete visibility.",
    },
    {
        icon: <Users size={22} />,
        title: "Expert Team",
        desc: "Certified marketers, designers, and developers.",
    },
];

export const WhyChoose = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        Why Choose QuickNotarization?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        A results-driven digital agency built to grow modern businesses
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-muted p-4 md:p-6 flex items-center justify-center gap-3 md:gap-4 rounded-xl transition duration-300"
                        >
                            {/* Icon */}
                            <div className="size-14 flex items-center justify-center bg-surface text-blue-600 rounded-lg p-2">
                                {item.icon}
                            </div>

                            <div className="flex flex-col items-start justify-center gap-0.5">
                                <h3 className="font-semibold text-base md:text-lg text-black">
                                    {item.title}
                                </h3>

                                <p className=" text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
