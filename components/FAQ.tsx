'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How long does it take to see marketing results?',
        answer: 'Results vary based on your goals and industry, but most clients start seeing measurable improvements within 3-6 months. SEO typically takes longer (6-12 months), while paid advertising can generate immediate traffic.',
    },
    {
        question: 'Do you offer custom marketing plans?',
        answer: 'Yes, we create tailored marketing strategies based on your specific business needs, target audience, and budget. Every plan is customized after an in-depth consultation and analysis.',
    },
    {
        question: 'Which industries do you work with?',
        answer: 'We work across multiple industries including technology, healthcare, e-commerce, real estate, finance, and professional services. Our diverse experience allows us to bring cross-industry insights to your business.',
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions (FAQ)
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-medium text-gray-900 pr-4">
                                    {faq.question}
                                </span>

                                <span className="shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500" />
                                    )}
                                </span>
                            </button>

                            {/* Answer */}
                            < div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};