"use client";
import React from "react";
import Image from "next/image";
import HeadingLeft from "../Common/HeadingLeft";
import SellingCard2 from "../Common/SellingCard2";
import HeadingMiddle from "../Common/HeadingMiddle";
import Link from "next/link";

const sellingData = [
  {
    _id: "1",
    image: "/InnerPage/productImage.svg",
    age: 4,
    rating: 4.5,
    name: "Premium Chicken Kibble",
    price: "$120",
    category: "Dry Food",
    hoverImage: "/home2/Selling/2.svg",
  },
  {
    _id: "2",
    image: "/InnerPage/productImage.svg",
    age: 5,
    rating: 4.2,
    name: "Gourmet Beef Chunks",
    price: "$80",
    category: "Wet Food",
    hoverImage: "/home2/Selling/2.svg",
  },
  {
    _id: "3",
    image: "/InnerPage/productImage.svg",
    age: 3,
    rating: 4.8,
    name: "Grain-Free Salmon Recipe",
    price: "$90",
    category: "Dry Food",
    hoverImage: "/home2/Selling/2.svg",
  },
  {
    _id: "4",
    image: "/InnerPage/productImage.svg",
    age: 2,
    rating: 4.3,
    name: "Healthy Veggie Mix",
    price: "$50",
    category: "Treats",
    hoverImage: "/home2/Selling/2.svg",
  },
];

const SellingProduct2 = () => {
  return (
    <div className="overflow-hidden">
      <div className="my-[120px] pet-container">
        <div className="ml-auto flex justify-end -mt-32 -mb-36  -mr-72">
          <Image
            width={200}
            height={200}
            alt="design"
            src="/home1/Explore/dr.svg"
          ></Image>
        </div>
        <div className="max-w-[660px] ">
          <HeadingMiddle
            align="right"
            heading="Our Best Selling Product"
            description="Our best-seller is premium pet daycare, offering trusted, personalized care and a safe, enriching experience for pets."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {sellingData.map((data, index) => (
            <SellingCard2 key={index} data={data} />
          ))}
        </div>
        <div className="-mt-72 -ml-72">
          <Image
            width={200}
            height={200}
            alt="design"
            src="/home1/Explore/dl.svg"
          ></Image>
        </div>
        <div className="flex justify-center">
          <Link href='/shop'>
            <button className="pet-button ">See More </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct2;
