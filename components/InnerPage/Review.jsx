import { Rate } from "antd";
import Image from "next/image";
import React from "react";

const Review = ( {data}) => {
  return (
    <section>
      <div className="flex items-start flex-col md:flex-row gap-3 lg:gap-4 xl:gap-5">
        <Image
          className="rounded-[20px]"
          src={data.image}
          width={100}
          height={100}
          alt="Reviewer"
        />
        <div className="rounded-[20px] border p-3 lg:p-4 xl:p-5">
          <h3 className="heading4">{data.name}</h3>
          <Rate className="mt-3" disabled defaultValue={data.rating} />
          <p className="mt-3 lg:mt-4 xl:mt-5 description">
            {data.review}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
