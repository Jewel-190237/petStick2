"use client";
import React, { useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import ShopCart from "../Common/ShopCart";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import Link from "next/link";

const Cart = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);

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
          {/* Left Side - 60% Width */}
          <div className="w-full md:w-[60%]">
            <div className="border rounded-[20px]">
              <div className="flex items-center justify-between heading4 !font-medium border-b">
                <p className="p-3 md:p-4 lg:p-5 xl:p-6">Products</p>
                <p className="p-3 md:p-4 lg:p-5 xl:p-6">Total</p>
              </div>
              <div>
                {shopData.map((data, index) => (
                  <div key={index} className="border-b last:border-0">
                    <ShopCart data={data} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 40% Width */}
          <div className="w-full md:w-[40%] ">
            <div className="border rounded-[20px]">
              <div className="border-b">
                <p className="p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-medium">
                  Cart Summary
                </p>
              </div>
              <div className="border-b flex items-center justify-between p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-medium">
                <p>Add coupon</p>
                <button onClick={() => setIsCouponOpen(!isCouponOpen)}>
                  {isCouponOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
                </button>
              </div>
              {isCouponOpen && (
                <div className="flex items-center justify-between p-3 md:p-4 lg:p-5 xl:p-6 border-b">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="border rounded-[10px] px-6 lg:px-8 py-3 lg:py-4 description w-full"
                  />
                  <button className="pet-button ml-4">Apply</button>
                </div>
              )}
              <div className="border-b flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-normal">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$240.57</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p>$0.00</p>
                </div>
                <p className="mt-2 lg:mt-3">
                  Shipping to Khulna, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex justify-between p-3 md:p-4 lg:p-5 xl:p-6 heading2 !font-semibold text-primary">
                <p>Total</p>
                <p>$240.57</p>
              </div>
            </div>
            <Link href="/checkout">
              <button className="mt-5 md:mt-6 lg:mt-8 xl:mt-10 pet-button !rounded-[20px] w-full">
                proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
