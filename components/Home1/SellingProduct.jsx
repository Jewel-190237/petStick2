"use client";
import React from "react";
import HeadingMiddle from "../Common/HeadingMiddle";
import Image from "next/image";
import SellingCard2 from "../Common/SellingCard2";
import SellingCard from "../Common/SellingCard";
import Link from "next/link";

const sellingData = [
  {
    _id: "1",
    image: "/home1/Explore/dog.svg",
    heading: "Delicious Pizza",
    rating: 4.5,
    name: "Pizza",
    price: "$120",
  },
  {
    _id: "2",
    image: "/home1/Explore/dog.svg",
    heading: "Juicy Burger",
    rating: 4.2,
    name: "Burger",
    price: "$80",
  },
  {
    _id: "3",
    image: "/home1/Explore/dog.svg",
    heading: "Pasta Delight",
    rating: 4.7,
    name: "Pasta",
    price: "$90",
  },
  {
    _id: "4",
    image: "/home1/Explore/dog.svg",
    heading: "Tasty Sushi",
    rating: 4.8,
    name: "Sushi",
    price: "$150",
  },
];

const SellingProduct = () => {
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
        <div className="max-w-[660px] mx-auto">
          <HeadingMiddle
            align="center"
            heading="Our Best Selling Product"
            description="Our best-seller is premium pet daycare, offering trusted, personalized care and a safe, enriching experience for pets."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {sellingData.map((item) => (
            <SellingCard
              key={item._id}
              image={item.image}
              heading={item.heading}
              rating={item.rating}
              name={item.name}
              price={item.price}
            />
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
          <Link href="/shop">
            <button className="pet-button ">See More </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
