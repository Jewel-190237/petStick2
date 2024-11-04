"use client";
import React from 'react';
import Image from 'next/image';
import { Rate } from 'antd';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoHeart } from "react-icons/go";

const SellingCard2 = ({ image, hoverImage, heading, rating, name, price }) => {
    return (
        <div className="relative p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:scale-105">
            {/* Image with Hover Effect */}
            <div className="relative">
                {/* Primary image */}
                <Image
                    className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                    height={300}
                    width={284}
                    alt={heading}
                    src={image}
                />
                <Image
                    className="w-full absolute inset-0 transition-transform duration-[1500ms] ease-in-out transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    height={300}
                    width={284}
                    alt={`${heading} Hover`}
                    src={hoverImage}
                />

                {/* Icons appear on hover */}
                <div className="absolute right-4 top-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineShoppingCart className="bg-[#F8D9CC] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
                    <GoHeart className="bg-[#F8D9CC] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
                </div>
            </div>

            {/* Text content */}
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-lora text-lg font-semibold text-textMain group-hover:text-primary capitalize">
                        {heading}
                    </h1>
                    <div className="flex items-center">
                        <Rate disabled defaultValue={1} count={1} />
                        <p className="ml-2 text-primary font-sans text-lg font-medium">{rating}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="capitalize font-lora text-[16px] text-textBody font-medium">
                        {name}
                    </p>
                    <p className="capitalize font-lora text-lg text-textBody group-hover:text-primary font-semibold">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SellingCard2;

