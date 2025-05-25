import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Website = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className='relative flex flex-col pb-25 justify-center w-full items-center bg-gradient-to-b from-[#FFF4EB] to-white overflow-hidden select-none px-4'>
            <div className='flex flex-col justify-center mt-20 items-center'>
                {/* Heading */}
                <h1
                    className="text-3xl md:text-6xl font-sans font-bold leading-tight text-center relative z-10"
                    data-aos="fade-up"
                >
                    Build Your First{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10">Website</span>
                        <img
                            src="/Circle.webp"
                            alt="Decorative circle"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160%] md:w-[150%] z-0"
                        />
                    </span>
                </h1>

                {/* Subheading */}
                <h1
                    className="text-3xl md:text-6xl font-sans font-bold text-center z-10 mt-2 md:mt-0"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    With Us
                </h1>

                {/* Description */}
                <h3
                    className="font-sans mt-4 md:mt-6 text-sm md:text-lg sm:text-xl text-gray-600 font-semibold text-center z-10 max-w-xl"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    If you also want to make a Website for your startup <br className='md:hidden' />
                    then book free <br className="hidden md:block" />
                    consultancy today and let's <br className='md:hidden' />
                    start your startup together.
                </h3>

                {/* CTA Icons */}
                <div
                    className="flex gap-4 sm:gap-7 z-10 mt-10"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <a
                        href="https://wa.me/919920655685?text=I%20want%20to%20know%20more%20about%20your%20service"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./wp-cta.webp"
                            className="h-12 md:h-14 rounded-xl cursor-pointer shadow-lg"
                            alt="Contact via WhatsApp"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/kodx.site"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./insta-cta.webp"
                            className="h-12 md:h-14 rounded-xl cursor-pointer shadow-lg"
                            alt="Follow us on Instagram"
                        />
                    </a>
                </div>

                {/* Mobile Button */}
                <div className='mt-10 w-full h-10 md:hidden'>
                    <button
                        className="w-full h-10 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        Get Free Consultation
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Website;
