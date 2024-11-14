import { useState } from "react";

const ProductButton = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="rounded-[20px] text-[16px] lg:text-xl font-medium flex items-center justify-between border p-3 lg:p-4 font-lora w-[80px] md:w-[90px] lg:w-[110px]">
      <button
        onClick={onDecrement}
        disabled={count <= 1}
        className={`rounded-full border border-[#44433F] px-1 text-xs ${
          count <= 1 ? "opacity-10 cursor-not-allowed" : ""
        }`}
      >
        {" "}
        -{" "}
      </button>
      <span className="text-sm text-primary">{count}</span>
      <button
        onClick={onIncrement}
        disabled={count >= 10}
        className={`rounded-full border border-[#44433F] px-1 text-xs ${
          count >= 10
            ? "opacity-10 cursor-not-allowed"
            : ""
        }`}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ProductButton;
