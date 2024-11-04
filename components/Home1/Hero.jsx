"use client"; 
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="flex gap-14 bg-[url('/home1/hero/bg.svg')] bg-cover bg-no-repeat bg-center py-16 px-8 h-[988px] -mt-32 overflow-hidden">
            <div className='max-w-[1320px] mx-auto flex w-full'>

                <div className="max-w-[750px] flex flex-col justify-center space-y-6">
                    <h1 className="text-[64px] font-laila text-textMain font-bold">Established & Trusted Pet Care Service</h1>
                    <p className="text-[16px] font-lora text-textBody leading-[170%]">
                        At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
                        training, and wellness products. Our experienced team is committed to delivering
                        exceptional care, ensuring the health, happiness, and well being of every pet we serve.
                    </p>
                    <button className="pet-button !w-[140px] whitespace-pre">
                    Buy Now
                    </button>
                </div>


                <div
                    className="w-[610] h-[624px]  mt-40 left-20 hidden lg:flex justify-center items-center relative"
                >
                    {/* Inside Image */}
                    <Image
                        src="/home1/hero/1.svg"
                        alt="Decorative Image"
                        width={610}
                        height={624}
                        className="relative z-10 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
