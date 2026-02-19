import Image from "next/image";

const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'How It Works', href: '#' },
    { label: 'FAQs', href: '#' },
];

const services = [
    { label: 'Influencer Marketing', href: '#' },
    { label: 'Search Engine Optimization', href: '#' },
    { label: 'Social Media Marketing', href: '#' },
    { label: 'Pay Per Click (PPC)', href: '#' },
    { label: 'View All Services', href: '#' },
];

const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
];

export const Footer = () => {
    return (
        <footer className="bg-slate-800 py-12 md:py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={"/brand-logo-white.png"} width={30} height={30} alt={"logo"} />
                            <div className="font-bold text-lg">
                                <div>Quick</div>
                                <div>Marketing</div>
                            </div>
                        </div>

                        <p className=" text-sm leading-relaxed">
                            We help brands scale online through performance marketing, SEO, social media, and modern web development – all under one roof.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className=" font-semibold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className=" transition-colors duration-200 text-sm"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className=" font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {legal.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className=" transition-colors duration-200 text-sm"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <p className=" text-sm text-center">
                        © 2025 quickMarketing. All rights reserved. Licensed in UAE.
                    </p>
                </div>
            </div>
        </footer >
    );
};