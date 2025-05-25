import React, { useEffect } from 'react'
import Hero from './Hero'
import ServicesPreview from './ServicesHome'
import Testimonial from './Testimonial'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return (
        <div>
            <Hero />
            <ServicesPreview />
            <Testimonial />
        </div>
    )
}

export default Home