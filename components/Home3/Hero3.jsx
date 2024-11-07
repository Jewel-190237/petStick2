"use client";
import Image from "next/image";
import React from "react";

const Hero3 = () => {
  return (
    <div className="w-full -mt-[110px]  bg-[#F5F5DC] mb-24">
      <div className=" px-4 max-w-[750px] mx-auto flex flex-col">
        <h1 className="hero-heading drop-shadow-md mt-40 lg:mt-60 xl:mt-80 text-center">
          Established & Trusted Pet Care Service
        </h1>
        <p className="mt-8 description text-center">
          At PetStick, we offer trusted and professional pet care solutions
          specializing in grooming, training, and wellness products. Our
          experienced team is committed to delivering exceptional care, ensuring
          the health, happiness, and well being of every pet we serve.
        </p>
        <button className="mx-auto text-center mt-12 px-8 py-4 bg-primary text-white font-lora text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300">
          Buy Now
        </button>
      </div>
      <div className=" hidden lg:flex justify-between items-end -mt-[470px]">
        <Image
          className="w-[15%] 2xl:w-[30%]"
          width={698}
          height={703}
          alt="left"
          src="/Home3/hero3/2.svg"
        />
        <Image
          className="w-[15%] 2xl:w-[30%]"
          width={670}
          height={600}
          alt="right"
          src="/Home3/hero3/5.png"
        />
      </div>
    </div>
  );
};

export default Hero3;
