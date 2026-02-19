import { Check } from 'lucide-react';

const trustPoints = [
    {
        icon: Check,
        label: 'Proven growth strategies',
    },
    {
        icon: Check,
        label: 'ROI-focused execution',
    },
    {
        icon: Check,
        label: 'Industry best practices',
    },
    {
        icon: Check,
        label: 'Long-term partnerships',
    },
];

export const WhyClientsTrust = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Clients Trust QuickMarketing
                    </h2>
                </div>

                {/* Trust Points Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {trustPoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                                    <IconComponent className="size-6 text-white" />
                                </div>

                                {/* Label */}
                                <p className="text-gray-700 text-sm font-medium">
                                    {point.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};