"use client";
import React, { useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import ShopCart from "../Common/ShopCart";

const Cart = () => {
  const shopData = [
    {
      image: "/InnerPage/catImage.svg",
      name: "Turkish Angora",
      previousPrice: 350.76,
      currentPrice: 250.76,
    },
    {
      image: "/InnerPage/catImage.svg",
      name: "Turkish Angora",
      previousPrice: 350.76,
      currentPrice: 250.76,
    },
  ];
  return (
    <section className="mt-1">
      <BasicHeader heading="cart" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <h4 className="heading1">Cart</h4>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 flex flex-col md:flex-row gap-3 lg:gap-5 xl:gap-8">
          <div className="w-full md:w-[60%] border rounded-[20px] ">
            <div className="flex items-center justify-between heading4 !font-medium border-b">
              <p className="p-3 md:p-4 lg:p-5 xl:p-6">products</p>
              <p className="p-3 md:p-4 lg:p-5 xl:p-6">total</p>
            </div>
            <div className="">
              {/* shopCard */}
              {shopData.map((data, index) => (
                <div key={index} className="border-b last:border-0">
                  <ShopCart data={data} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-[40%] border rounded-[20px] p-3 md:p-4 lg:p-5 xl:p-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
