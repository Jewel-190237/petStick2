"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

const CommonNav = () => {
  const navRef = useRef(null); 

  const navData = [
    { item: "training", link: "" },
    { item: "product", link: "" },
    { item: "veterinary", link: "" },
    { item: "pet breeding", link: "" },
    { item: "pet sitting", link: "" },
  ];

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#4B3C34] text-white relative">
      <div className="pet-container py-6 lg:py-7 xl:py-8 heading4 flex items-center gap-12 md:justify-between overflow-x-auto" ref={navRef}>
        <div className="flex items-center gap-4 lg:gap-5 xl:gap-7">
          {navData.map((data, index) => (
            <Link
              className="hover:text-primary transition-all duration-300 whitespace-pre"
              key={index}
              href={data.link}
            >
              {data.item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5 lg:gap-6">
          <div className="flex items-center gap-3 lg:gap-5 xl:gap-7">
            <div className="bg-white rounded-full lg:w-[56px] lg:h-[56px] flex items-center justify-center">
              <Image
                className="p-1 lg:p-0"
                src="/InnerPage/call.svg"
                width={32}
                height={32}
                alt="Call Icon"
              />
            </div>
            <p>+8801404049797</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-5 xl:gap-7">
            <div className="bg-white rounded-full lg:w-[56px] lg:h-[56px] flex items-center justify-center">
              <Image
                className="p-1 lg:p-0"
                src="/InnerPage/email.svg"
                width={32}
                height={32}
                alt="Email Icon"
              />
            </div>
            <p>info@appstick.com.bd</p>
          </div>
        </div>
      </div>
      {/* Arrows for small screens */}
      <button onClick={scrollLeft} className="bg-white w-4 h-4 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 md:hidden">
        <FaArrowLeft className="text-black" size={12} />
      </button>
      <button onClick={scrollRight} className="bg-white w-4 h-4 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 md:hidden">
        <FaArrowRight className="text-black" size={12} />
      </button>
    </div>
  );
};

export default CommonNav;
