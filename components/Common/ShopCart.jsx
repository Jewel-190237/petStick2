import React, { useState } from "react";
import Image from "next/image";
import ProductButton from "../Common/ProductButton";

const ShopCart = ({data}) => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <div className="p-3 lg:p-4 xl:p-6 flex items-start gap-2 lg:gap-3 xl:gap-4">
      <Image
        className="rounded-[20px]"
        src={data.image}
        width={100}
        height={100}
        alt="pet Image"
      />
      <div className="w-full">
        <h4 className="heading4 !font-semibold">Turkish Angora</h4>
        <div className="mt-2 lg:mt-3 flex items-center justify-between description">
          <p>
            <del>$ {data.previousPrice}</del>
          </p>
          <p className="text-primary">$ {data.currentPrice}</p>
        </div>
        <div className="mt-2 lg:mt-3">
          <span className="text-[10px] font-lora font-medium px-3 py-2 lg:text-xs border rounded-[10px]">
            Save $ {data.previousPrice - data.currentPrice}
          </span>
        </div>
        <div className="flex items-center justify-between mt-6 lg:mt-7 xl:mt-8">
          <ProductButton
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <button className="sm:mt-0 pet-button flex items-center gap-4">
            <p className="hidden md:flex !text-2xl">× </p> <p>Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
