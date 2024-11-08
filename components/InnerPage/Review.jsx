import { Rate } from "antd";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <section>
      <div className="flex items-start flex-col md:flex-row gap-3 lg:gap-4 xl:gap-5">
        <Image
          className="rounded-[20px]"
          src="/InnerPage/reviewer.svg"
          width={100}
          height={100}
          alt="Reviewer"
        />
        <div className="rounded-[20px] border p-3 lg:p-4 xl:p-5">
          <h3 className="heading4">saifa tazrin rati</h3>
          <Rate className="mt-3" disabled defaultValue={4} />
          <p className="mt-3 lg:mt-4 xl:mt-5 description">
            I recently purchased a Turkish Angora and have been thoroughly
            impressed. The breed's elegance, intelligence, and playful nature
            make them exceptional companions. Their luxurious coat is
            surprisingly low-maintenance, adding to their overall appeal. Highly
            recommend!
          </p>
        </div>
      </div>
      <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14">
        <h2 className="heading3"> Add a review</h2>
        <p className="heading4 mt-3 lg:mt-4 xl:mt-5">Your raitng</p>
        <Rate className="mt-3" disabled defaultValue={4} />
        <p className="heading4 mt-3 lg:mt-4 xl:mt-5">write a comment</p>
        <textarea
          className="mt-3 lg:mt-4 xl:mt-5 w-full border p-3 lg:p-4 xl:p-5 rounded-[20px] h-[150px]"
          placeholder="Write Something....."
          name=""
          id=""
        />
        <button className="pet-button mt-5 lg:mt-8 xl:mt-10">submit</button>
      </div>
    </section>
  );
};

export default Review;
