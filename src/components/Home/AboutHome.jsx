import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRocket, FaLaptopCode, FaUsers } from 'react-icons/fa';

const AboutHome = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="w-full mt-30 bg-white py-16 px-4 md:px-10 lg:px-20">
            <h2
                className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
                data-aos="fade-up"
            >
                About Us
            </h2>

            <p
                className="max-w-3xl mx-auto text-center text-gray-600 text-base md:text-lg mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                We are a passionate team dedicated to building powerful websites and digital solutions
                for startups and growing businesses. From concept to launch—we’ve got you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                >
                    <FaRocket className="text-4xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Helping startups turn ideas into impactful digital products quickly and affordably.
                    </p>
                </div>

                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">What We Do</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        We create responsive websites, mobile apps, and marketing tools for modern businesses.
                    </p>
                </div>

                <div
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <FaUsers className="text-4xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Who We Help</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Founders, freelancers, and businesses who want to scale their ideas online—fast.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;
