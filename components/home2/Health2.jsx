"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
import HeadingMiddle from "../Common/HeadingMiddle";

const Health2 = () => {
  const [active, setActive] = useState("dog");
  const [selectedItem, setSelectedItem] = useState({
    item: "dog regular checkup",
    image: "/home1/Health/person.svg",
  });

  const handleActive = (value) => {
    setActive(value);

    // Set selectedItem to the first item of the new category
    const firstItem =
      value === "dog"
        ? dogData[0]
        : value === "cat"
        ? catData[0]
        : otherData[0];

    setSelectedItem(firstItem);
  };

  const dogData = [
    { item: "dog regular checkup", image: "/home1/Health/person.svg" },
    { item: "dog dental care", image: "/home1/Health/person1.svg" },
    { item: "dog nutrition", image: "/home1/Health/person.svg" },
    { item: "dog vaccination", image: "/home1/Health/person1.svg" },
  ];
  const catData = [
    { item: "cat regular checkup", image: "/home1/Health/person.svg" },
    { item: "cat dental care", image: "/home1/Health/person1.svg" },
    { item: "cat nutrition", image: "/home1/Health/person.svg" },
    { item: "cat vaccination", image: "/home1/Health/person1.svg" },
  ];
  const otherData = [
    { item: "other pet checkup", image: "/home1/Health/person.svg" },
    { item: "other pet dental care", image: "/home1/Health/person1.svg" },
    { item: "other pet nutrition", image: "/home1/Health/person.svg" },
    { item: "other pet vaccination", image: "/home1/Health/person1.svg" },
  ];

  const currentData =
    active === "dog" ? dogData : active === "cat" ? catData : otherData;

  return (
    <div className="pet-container mt-20 flex flex-col sm:flex-row items-center bg-white health-shadow rounded-[40px]">
      <div className="flex-1 px-5 md:px-6 lg:px-8 xl:px-10 py-8 md:py-10 lg:py-12 xl:py-14">
        <div className="max-w-[510px]">
          <HeadingMiddle
            align="right"
            heading="Health and Wellness Services"
            description="Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends."
          />
        </div>

        <div className="mt-7 md:mt-8 xl:mt-10 flex items-center gap-4 lg:gap-8 xl:gap-10">
          <button
            onClick={() => handleActive("dog")}
            className={`text-sm lg:text-[18px] font-semibold font-laila ${
              active === "dog" ? "underline text-primary" : ""
            }`}
          >
            For Dog
          </button>
          <button
            onClick={() => handleActive("cat")}
            className={`text-sm lg:text-[18px] font-semibold font-laila ${
              active === "cat" ? "underline text-primary" : ""
            }`}
          >
            For Cat
          </button>
          <button
            onClick={() => handleActive("others")}
            className={`text-sm lg:text-[18px] font-semibold font-laila ${
              active === "others" ? "underline text-primary" : ""
            }`}
          >
            For Others
          </button>
        </div>

        <div className="mt-7 lg:mt-8 xl:mt-10 flex flex-col gap-6 w-full lg:w-[60%]">
          {currentData.map((data, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(data)}
              className={`heading2 !font-medium flex items-center justify-between p-3 border rounded-tr-lg rounded-br-lg transition-all duration-300 ${
                selectedItem.item === data.item
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              {data.item} <LuMoveRight />
            </button>
          ))}
        </div>
        <button className="pet-button mt-8 md:mt-10 lg:mt-12 xl:mt-14 capitalize !text-[#E65F33] hover:!text-white">
          make an appointment
        </button>
      </div>
      <div className="mt-10 md:mt-0 w-full sm:w-[51%]">
        <Image
          className="rounded-[40px] w-full"
          src={selectedItem.image}
          width={719}
          height={860}
          alt="person Image"
        />
      </div>
    </div>
  );
};

export default Health2;
