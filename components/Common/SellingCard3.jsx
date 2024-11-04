"use client";
import React from 'react';
import Image from 'next/image';
import { Rate } from 'antd';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoHeart } from "react-icons/go";

const SellingCard3 = ({ image, hoverImage, heading, rating, name, price }) => {
    return (
        <div className="relative p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:scale-105">
            <div className="w-full lg:max-w-[284px] h-full lg:max-h-[300px] relative">
                {/* Primary image */}
                <Image
                    className="w-full "
                    height={300}
                    width={284}
                    alt={heading}
                    src={image}
                />

                <div className="absolute flex justify-center left-24  items-center bottom-6 flex-row space-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineShoppingCart className="bg-[#Fff] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
                    <GoHeart className="bg-[#Fff] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-col justify-between items-center">
                    <p className="capitalize font-lora text-[16px] text-textBody font-medium">
                        {name}
                    </p>
                    <h1 className="font-lora max-w-[200px] text-lg mt-2 font-semibold text-textMain group-hover:text-primary capitalize">
                        {heading}
                    </h1>
                    <div className="flex items-center my-2">
                        <Rate disabled defaultValue={4} count={5} />

                    </div>
                </div>
                <div className=" mt-3">
                    <p className="capitalize font-lora text-lg text-center text-primary font-bold">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SellingCard3;

