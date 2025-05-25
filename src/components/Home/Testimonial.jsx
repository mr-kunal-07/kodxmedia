import React, { useState, useEffect } from 'react';
import {
    FaSlack,
    FaDribbble,
    FaFacebookMessenger,
    FaPinterest,
    FaBehance,
    FaTelegramPlane,
    FaSkype,
} from 'react-icons/fa';

const testimonials = [
    {
        quote: "This app development agency is not just the best, it's the most valuable — not because they provide the best app or web design, but because they give something special that can’t be explained in words.",
        author: "Sagar Howlader",
    },
    {
        quote: "This app development agency is not just the best, it's the most valuable — not because they provide the best app or web design, but because they give something special that can’t be explained in words.",
        author: "Priya Sharma",
    },
    {
        quote: "This app development agency is not just the best, it's the most valuable — not because they provide the best app or web design, but because they give something special that can’t be explained in words.",
        author: "Alex Kim",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
                setFade(true);
            }, 300); // match transition duration
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        if (index !== current) {
            setFade(false);
            setTimeout(() => {
                setCurrent(index);
                setFade(true);
            }, 300);
        }
    };

    return (
        <section className="relative bg-gray-50 py-20 overflow-hidden text-center">
            {/* Floating Icons */}
            <FaSlack className="absolute top-10 left-1/4 text-3xl text-[#4A154B] bg-white rounded-full shadow-lg p-1" />
            <FaDribbble className="absolute top-14 right-[35%] text-3xl text-[#EA4C89] bg-white rounded-full shadow-lg p-1" />
            <FaFacebookMessenger className="absolute bottom-20 left-10 text-3xl text-[#0084FF] bg-white rounded-full shadow-lg p-1" />
            <FaPinterest className="absolute bottom-10 left-[20%] text-3xl text-[#E60023] bg-white rounded-full shadow-lg p-1" />
            <FaBehance className="absolute top-10 right-10 text-3xl text-black bg-white rounded-full shadow-lg p-1" />
            <FaTelegramPlane className="absolute bottom-10 right-1/4 text-3xl text-[#0088cc] bg-white rounded-full shadow-lg p-1" />
            <FaSkype className="absolute bottom-16 right-10 text-3xl text-[#00AFF0] bg-white rounded-full shadow-lg p-1" />

            {/* Testimonial Content */}
            <div className="max-w-2xl mx-auto px-4 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Who is Using Our APP Development Service?
                </h2>

                {/* Animated Block */}
                <div
                    className={`transition-opacity duration-300 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
                        } min-h-[140px]`}
                >
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                        {testimonials[current].quote}
                    </p>
                    <p className="font-semibold text-gray-800 mt-2">
                        {testimonials[current].author}
                    </p>
                </div>

                {/* Dots */}
                <div className="flex  justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${current === index ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
