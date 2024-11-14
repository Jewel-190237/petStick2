"use client";
import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import Link from "next/link";

const SellingCard2 = ({ data }) => {
  return (
    <div className="relative p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:scale-105">
      {/* Image with Hover Effect */}
      <div className="relative">
        <Link href={`/shopdetails/${data._id}`}>
          <Image
            className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            height={300}
            width={284}
            alt={data.name}
            src={data.image}
          />
          <Image
            className="w-full absolute inset-0 transition-transform duration-[1500ms] ease-in-out transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            height={300}
            width={284}
            alt={`${data.name} Hover`}
            src={data.hoverImage}
          />
        </Link>

        {/* Icons appear on hover */}
        <div className="absolute right-4 top-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/cart">
            <HiOutlineShoppingCart className="bg-[#F8D9CC] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
          </Link>
          <Link href="/wishlist">
            <GoHeart className="bg-[#F8D9CC] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* Text content */}
      <Link href={`/shopdetails/${data._id}`} className="mt-4">
        <div className="flex justify-between items-center">
          <h1 className="font-lora text-lg font-semibold text-textMain group-hover:text-primary capitalize">
            {data.name}
          </h1>
          <div className="flex items-center">
            <Rate disabled defaultValue={1} count={1} />
            <p className="ml-2 text-primary font-sans text-lg font-medium">
              {data.rating}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="capitalize font-lora text-[16px] text-textBody font-medium">
            {data.category}
          </p>
          <p className="capitalize font-lora text-lg text-textBody group-hover:text-primary font-semibold">
            {data.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SellingCard2;
