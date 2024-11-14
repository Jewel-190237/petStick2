import Image from "next/image";
import React from "react";

const ChechOutCard = ({data}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 xl:gap-5 items-center p-3 md:p-4 lg:p-5 xl:p-6 border-b">
      <Image
        className="rounded-[20px] w-full sm:w-[13%] md:w-fit"
        src={data.image}
        width={100}
        height={100}
        alt="cat product"
      />
      <div className="mt-3 sm:mt-0 description w-full">
        <p className="capitalize !font-semibold">{data.productName}</p>
        <div className="mt-2 flex items-center justify-between description !font-semibold">
          <p className="text-[#44433F]">
            <del>$ {data.previousPrice}</del>
          </p>
          <p className="text-primary">$ {data.curentPrice}</p>
        </div>
        <p className="mt-2 text-[#44433F] capitalize">quantity: {data.quantity} pcs</p>
      </div>
    </div>
  );
};

export default ChechOutCard;
