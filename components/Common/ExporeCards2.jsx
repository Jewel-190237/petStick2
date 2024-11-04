'use client';
import Image from 'next/image';
import React from 'react';

const ExploreCards2 = ({ image, heading, age, breed }) => {
    return (
        <div className="relative p-4 border border-[#D9D9D9] rounded-[8px] overflow-hidden group transition-all duration-300 hover:shadow-lg">
            {/* Image with custom overlay */}
            <div className="relative w-full h-[300px]">
                <Image
                    className="w-full h-full object-cover"
                    height={300}
                    width={284}
                    alt="dog"
                    src={image}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-[var(--primary-color,#FF6F3F)] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            
            {/* Centered Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-laila text-[24px] font-semibold text-white">
                    {heading}
                </h1>
                <p className="capitalize font-lora text-[16px] text-white font-medium mt-2">
                    Age: {age}
                </p>
                <p className="capitalize font-lora text-[16px] text-white font-medium mt-1">
                    Breed: {breed}
                </p>
                {/* Optional arrow icon */}
                {/* <FaArrowRightLong className="text-white mt-2 transition-all duration-300 group-hover:text-primary" /> */}
            </div>
        </div>
    );
};

export default ExploreCards2;
