import { Rocket, Building2, Briefcase, GraduationCap } from 'lucide-react';

const clients = [
    {
        icon: Rocket,
        title: 'Startups',
        description: 'Helping startups build visibility, acquire users, and scale faster from day one.',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: Building2,
        title: 'Small & Medium Businesses',
        description: 'Driving consistent leads and growth through targeted digital strategies.',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
    },
    {
        icon: Briefcase,
        title: 'Enterprises',
        description: 'Supporting large organizations with scalable marketing and technology solutions.',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: GraduationCap,
        title: 'Professionals',
        description: 'Strengthening personal brands and supporting agencies with expert execution.',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
    },
];

export const WhoWeWorkWith = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Who We Work With
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Supporting businesses of all sizes across multiple industries.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clients.map((client, index) => {
                        const IconComponent = client.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-full ${client.iconBg} flex items-center justify-center mx-auto mb-6`}
                                >
                                    <IconComponent className={`w-6 h-6 ${client.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {client.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {client.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};