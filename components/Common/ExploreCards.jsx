'use client';
import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ExploreCards = ({ image, heading, age, breed }) => {
    return (
        <div className='p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:shadow-lg'>
            <div className='rounded-t-[8px] overflow-hidden'>
                <Image className='w-full' height={300} width={284} alt='dog' src={image} />
            </div>
            <div className='mt-4'>
                <h1 className='font-lora text-lg font-semibold text-textMain group-hover:text-primary'>
                    {heading}
                </h1>
                <div className='flex justify-between items-center'>
                    <p className='capitalize font-lora text-[16px] text-textBody font-medium'>
                        Age: {age}
                    </p>
                    <FaArrowRightLong className='group-hover:text-primary transition-all duration-300' />
                </div>
                <p className='capitalize font-lora text-[16px] text-textBody font-medium'>
                    Breed: {breed}
                </p>
            </div>
        </div>
    );
};

export default ExploreCards;
