import React from 'react';
import HeroSection from '../Hero/Hero';
import '../../App.css';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;