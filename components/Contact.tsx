import { Phone, Mail, Globe } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="py-16 md:py-20 px-6 md:px-4 bg-slate-900">
            <div className="max-w-6xl mx-auto text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Contact Us
                        </h2>

                        <div className="space-y-4 mb-8">
                            {/* Phone */}
                            <div className="flex items-center gap-4 ">
                                <Phone className="w-5 h-5" />
                                <span>[Insert Number]</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5" />
                                <span>[info@quickMarketing.ae]</span>
                            </div>

                            {/* Website */}
                            <div className="flex items-center gap-4 ">
                                <Globe className="w-5 h-5" />
                                <span>www.quickMarketing.ae</span>
                            </div>
                        </div>

                        {/* Serving Areas */}
                        <p className=" leading-relaxed">
                            Serving all Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain.
                        </p>
                    </div>

                    {/* Right Side - CTA Card */}
                    <div className="bg-blue-600 rounded-2xl p-6 md:p-8 lg:p-10">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Ready to Grow Your Business?
                        </h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Let's build a digital strategy that delivers real results.
                        </p>
                        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};