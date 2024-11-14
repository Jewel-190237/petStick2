"use client";
import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import Link from "next/link";

const ProductCard = ({ data }) => {
  return (
    <div className="health-shadow relative p-4 border border-[#D9D9D9] rounded-[8px] group transition-all duration-300 hover:shadow-2xl">
      <div className="w-full lg:max-w-[284px] lg:max-h-[300px] relative">
        <Image
          className="w-full rounded-t-[20px]"
          height={300}
          width={284}
          alt={data.category}
          src={data.image}
        />

        <div className="-mt-12 flex justify-center  items-center flex-row gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href='/cart'><HiOutlineShoppingCart className="bg-[#Fff] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" /></Link>
          <Link href='/wishlist'><GoHeart className="bg-[#Fff] rounded-full p-2 text-4xl hover:bg-primary hover:text-[#fff] transition-colors duration-300" /></Link>
        </div>
      </div>
      <Link href={`/petdetails/${data._id}`}>
        <div className="mt-4">
          <div className="flex flex-col justify-between items-center">
            <p className="capitalize font-lora text-[16px] text-textBody font-medium">
              {data.name}
            </p>
            <h1 className="font-lora max-w-[200px] text-lg mt-2 font-semibold text-textMain group-hover:text-primary capitalize">
              {data.category}
            </h1>
            <div className="flex items-center my-2">
              <p className="description">Age: {data.age} Year</p>
            </div>
            <div className="flex items-center my-2">
              <Rate disabled defaultValue={data.rating} />
            </div>
          </div>
          <div className=" mt-3">
            <p className="capitalize font-lora text-lg text-center text-primary font-bold">
              {data.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
