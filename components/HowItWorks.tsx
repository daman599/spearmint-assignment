const steps = [
    {
        number: '1',
        title: 'Discover & Plan',
        description: 'We understand your business, goals, and audience.',
    },
    {
        number: '2',
        title: 'Execute & Optimize',
        description: 'Campaigns are launched, tracked, and optimized continuously.',
    },
    {
        number: '3',
        title: 'Scale & Grow',
        description: 'We improve performance and scale what works.',
    },
];

export const HowItWorks = () => {
    return (
        <section className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How It Works - 3 Simple Steps
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        A simple and structured approach to drive consistent digital growth.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Number Circle */}
                            <div className="size-12 md:size-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                                <span className="text-white text-xl md:text-2xl font-bold">
                                    {step.number}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};