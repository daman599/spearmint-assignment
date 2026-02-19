import {
    User,
    Search,
    Users,
    TrendingUp,
    MousePointerClick,
    Monitor,
} from "lucide-react";

export const Services = () => {
    const services = [
        {
            icon: <User size={22} />,
            title: "Influencer Marketing",
            desc: "Build brand trust and reach through relevant creators.",
        },
        {
            icon: <Search size={22} />,
            title: "Search Engine Optimization (SEO)",
            desc: "Increase organic visibility and long-term traffic growth.",
        },
        {
            icon: <Users size={22} />,
            title: "Social Media Marketing",
            desc: "Content, campaigns, and engagement that convert.",
        },
        {
            icon: <TrendingUp size={22} />,
            title: "Social Media Optimization (SMO)",
            desc: "Optimize profiles, content strategy, and brand presence.",
        },
        {
            icon: <MousePointerClick size={22} />,
            title: "Pay Per Click (PPC)",
            desc: "Targeted ad campaigns focused on conversions and ROI.",
        },
        {
            icon: <Monitor size={22} />,
            title: "Web Development",
            desc: "Fast, responsive, and conversion-focused websites.",
        },
    ];

    return (
        <section className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        Our Digital Marketing & IT Services
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Comprehensive digital marketing and IT solutions to help your business grow online
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 md:p-8 rounded-xl shadow-lg transition duration-300"
                        >
                            {/* Icon Box */}
                            <div className="size-10 md:size-14 flex items-center justify-center bg-blue-600 text-white rounded-lg mb-6">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-base md:text-lg font-semibold text-black">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
