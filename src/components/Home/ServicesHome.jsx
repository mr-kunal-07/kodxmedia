import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, FileText, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Website Development',
        description: 'We design and build beautiful, user-friendly websites that work for your business.',
        path: '/website-development',
        icon: <Code className="w-6 h-6 text-black" />,
    },
    {
        title: 'Mobile App Development',
        description: 'We create native and cross-platform mobile apps that are fast, secure, and scalable.',
        path: '/app-development',
        icon: <Smartphone className="w-6 h-6 text-black" />,
    },
    {
        title: 'Account Balance Sheet Converter',
        description: 'We convert your account balance sheets to XML and help you easily migrate your data.',
        path: '/account-balance-sheet-converter',
        icon: <FileText className="w-6 h-6 text-black" />,
    },
];

const ServicesPreview = () => {
    return (
        <section className="bg-white border-t border-b" style={{ borderColor: '#FFF4EB' }}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.path}
                            className="relative block border rounded-xl p-6 shadow hover:shadow-lg transition hover:bg-gray-50 group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                {service.icon}
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-gray-600">{service.description}</p>

                            {/* Arrow icon in bottom-right */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-black" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/services"
                        className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
