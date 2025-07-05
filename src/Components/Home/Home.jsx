import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';

const Home = () => {
    return (
        <div id='home' className='border mt-4 max-w-5xl mx-auto'>
            <Hero></Hero>
        </div>
    );
};

export default Home;