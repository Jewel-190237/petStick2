"use client";
import React from 'react';
import Image from 'next/image';
import { Rate } from 'antd';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoHeart } from "react-icons/go";

const SellingCard = ({ image, heading, rating, name, price }) => {
    return (
        <div className='p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:scale-105'>
            <div className='rounded-t-[8px] overflow-hidden'>
                <Image className='w-full' height={300} width={284} alt={heading} src={image} />
            </div>
            <div className='mt-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-lora text-lg font-semibold text-textMain group-hover:text-primary capitalize '>
                        {heading}
                    </h1>
                    <div className=' flex '>
                        <Rate disabled defaultValue={1} count={1} /> 
                        <p className='ml-2 -mt-1 text-primary font-sans text-lg font-medium'>{rating}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='capitalize font-lora text-[16px] text-textBody font-medium mt-2'>
                        {name}
                    </p>
                </div>
                <div className='mt-2 flex justify-between'>
                    <p className='capitalize font-lora text-lg text-textBody group-hover:text-primary font-semibold'>
                        {price}
                    </p>
                    <div className='flex -mt-3 space-x-2'>
                        <HiOutlineShoppingCart className='bg-[#F8D9CC] rounded-full p-2 text-[40px] hover:bg-primary hover:text-[#fff]' />
                        <GoHeart className='bg-[#F8D9CC] rounded-full p-2 text-[40px] hover:bg-primary hover:text-[#fff]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellingCard;
