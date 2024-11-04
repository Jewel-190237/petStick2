'use client';
import Image from 'next/image';
import React from 'react';

const Hero3 = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center text-center -mt-[110px]  bg-[#F5F5DC] relative overflow-hidden mb-24">
           
                <div className="relative z-10  px-4 max-w-[750px] mx-auto">
                    <h1 className="text-4xl text-textMain md:text-5xl lg:text-[64px] font-laila font-bold drop-shadow-md">
                        Established & Trusted Pet Care Service
                    </h1>
                    <p className="mt-8 text-lg text-textBody font-lora">
                        At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
                        training, and wellness products. Our experienced team is committed to delivering
                        exceptional care, ensuring the health, happiness, and well being of every pet we serve.
                    </p>
                    <button className="mt-12 px-8 py-4 bg-primary text-white font-lora text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300">
                        Buy Now
                    </button>
                </div>
                <div className='absolute bottom-0 -left-20 hidden lg:flex '>
                    <Image className='' width={698} height={703} alt='left' src='/Home3/hero3/2.svg'/>
                </div>
                <div className='absolute bottom-0 -right-20 hidden lg:flex '>
                    <Image className='' width={670} height={600} alt='right' src='/Home3/hero3/5.png'/>
                </div>
            </div>
    );
};

export default Hero3;