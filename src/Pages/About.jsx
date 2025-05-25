import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRocket, FaLaptopCode, FaUsers } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="w-full bg-gradient-to-b from-[#FFF4EB] to-white py-16 px-4 md:px-10 lg:px-20">
            <h2
                className="text-3xl md:text-5xl font-bold text-center mb-10"
                data-aos="fade-up"
            >
                About Us
            </h2>

            <p
                className="max-w-3xl mx-auto text-center text-gray-600 text-base md:text-lg mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                We’re a young and dynamic team passionate about building custom websites and digital solutions for startups and businesses. Our goal is to help you go from idea to launch—quickly, affordably, and beautifully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                >
                    <FaRocket className="text-4xl text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Empower entrepreneurs through simple, effective, and scalable digital solutions.
                    </p>
                </div>

                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <FaLaptopCode className="text-4xl text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">What We Do</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Custom websites, mobile apps, and marketing tools tailored to early-stage businesses.
                    </p>
                </div>

                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <FaUsers className="text-4xl text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Who We Help</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Startups, creators, and business owners looking to grow their ideas online—fast.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
