import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Individual Client',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        quote: 'QuickMarketing helped us generate quality leads and scale our online presence within months.',
        rating: 5,
    },
    {
        name: 'Business Owner, Abu Dhabi',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        quote: 'Their SEO and paid campaigns delivered real business growth.',
        rating: 5,
    },
];

export const ClientTestimonials = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Client Testimonials
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 flex items-start gap-4"
                        >
                            {/* Avatar */}
                            <div className="shrink-0">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Name and Location */}
                                <div className="mb-2">
                                    <h4 className="font-semibold text-gray-900 text-sm">
                                        {testimonial.name}
                                    </h4>
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-blue-600 text-blue-600"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-600 text-sm italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};