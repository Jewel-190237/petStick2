import React from "react";
import { FaHome } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
const BasicHeader = ({heading}) => {
  return (
    <section className="bg-cover bg-center" style={{ backgroundImage: "url('/bg.svg')" }}>
      <div className="pet-container text-white py-12 md:py-20 lg:py-28 xl:py-32 2xl:py-36">
        <h1 className="heading1 text-[#2B2B2B] capitalize">{heading}</h1>
        <div className="description flex items-center gap-2 mt-4 md:mt-5 lg:mt-6 xl:mt-7">
            <FaHome className="text-primary"/>
            <p className="text-primary">Home</p>
            <GoChevronRight className="text-textBody" />
            <p className="text-textBody capitalize">{heading}</p>
        </div>
      </div>
    </section>
  );
};

export default BasicHeader;
