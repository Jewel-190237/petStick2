'use client';
import Image from 'next/image';
import React from 'react';

const FeatureCard3 = ({ image, heading }) => {
    return (
        <div className="relative w-full h-full lg:max-w-[312px] lg:max-h-[312px] overflow-hidden rounded-lg shadow-lg group">

            <Image
                src={image}
                alt={heading}
                width={312}
                height={312}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />


            <div className="absolute inset-0 flex mt-10 items-start justify-center">
                <h3 className="text-[28px] font-laila font-bold text-white">{heading}</h3>
            </div>
        </div>
    );
};

export default FeatureCard3;
