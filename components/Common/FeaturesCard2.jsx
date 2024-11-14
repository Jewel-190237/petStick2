'use client';
import React from 'react';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

const FeaturesCard2 = ({ heading, innerImage, title, description }) => {
    return (
        <div className="max-w-4xl mx-auto p-5 flex flex-row space-x-5 bg-white shadow-lg rounded-[20px]">

        <div className="w-1/2">
            <Image
                src={innerImage}
                alt="Product Image"
                width={208}
                height={254}
                className="rounded-[20px] object-cover w-full h-full"
            />
        </div>

        <div className="w-1/2 flex flex-col justify-between">
            <button className="bg-primary text-white py-1 w-[85px]  px-2 rounded-[20px] hover:bg-opacity-90 transition">
               {title}
            </button>
            <h2 className="text-2xl capitalize font-bold text-textMain font-laila mt-4">
                {heading}
            </h2>
            <hr className='my-4'/>
            <p className="text-textBody mt-2 mb-4 font-lora">
                {description}
            </p>
            <Link href='' className="flex items-center group space-x-3">
                <p className=" text-textBody group-hover:text-primary text-lg font-semibold font-lora">
                    Shop Now
                </p>
                <HiArrowRight className="text-textBody group-hover:text-primary font-semibold text-xl mt-[2px]" />
            </Link>

        </div>
    </div>
    );
};

export default FeaturesCard2;
