import React from 'react';
import Commonbutton from '../Components/Commonbutton';

const Home = () => {
    return (
        <div className='max-w-[1600px]  mx-auto'>
            <div className='relative'>
            <img  className='w-full max-h-[600px]' src="/hero.jpg" alt="" />
            <div className='absolute top-10 space-y-3  md:top-[20%] lg:top-28 left-[5%] text-white'>
                <h1 className='md:text-3xl w-[70%] md:w-full text-xl font-bold'>Discover Serenity in Every Sip of Premium Tea</h1>
                <p className='w-[90%] md:w-full '>Brew the Perfect Moment. Dive into a world where each tea leaf tells a story</p>
                <Commonbutton>Explore more</Commonbutton>
                
            </div>
            </div>
            
        </div>
    );
};

export default Home;