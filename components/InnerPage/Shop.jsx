"use client";
import React, { useEffect, useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import { Input, Pagination, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProductCard from "../Common/ProductCard";
import Image from "next/image";
import SellingCard2 from "../Common/SellingCard2";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Shop = () => {
  const sellingData1 = [
    {
      _id: "1",
      image: "/InnerPage/productImage.svg",
      age: 4,
      rating: 4.5,
      name: "Premium Chicken Kibble",
      price: "$120",
      category: "Dry Food",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "2",
      image: "/InnerPage/productImage.svg",
      age: 5,
      rating: 4.2,
      name: "Gourmet Beef Chunks",
      price: "$80",
      category: "Wet Food",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "3",
      image: "/InnerPage/productImage.svg",
      age: 3,
      rating: 4.8,
      name: "Grain-Free Salmon Recipe",
      price: "$90",
      category: "Dry Food",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "4",
      image: "/InnerPage/productImage.svg",
      age: 2,
      rating: 4.3,
      name: "Healthy Veggie Mix",
      price: "$50",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "5",
      image: "/InnerPage/productImage.svg",
      age: 1,
      rating: 4.7,
      name: "Puppy Starter Formula",
      price: "$60",
      category: "Dry Food",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "6",
      image: "/InnerPage/productImage.svg",
      age: 6,
      rating: 4.6,
      name: "Chicken & Rice Meal",
      price: "$70",
      category: "Wet Food",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "7",
      image: "/InnerPage/productImage.svg",
      age: 6,
      rating: 4.9,
      name: "Organic Turkey Bites",
      price: "$110",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "8",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "9",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "10",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "11",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "12",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "13",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "14",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "15",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    {
      _id: "16",
      image: "/InnerPage/productImage.svg",
      age: 7,
      rating: 4.4,
      name: "Low-Fat Beef Strips",
      price: "$75",
      category: "Treats",
      hoverImage: "/home2/Selling/2.svg",
    },
    
  ];
  const breadData = [
    { item: "All Categories" },
    { item: "Alasken Malamute" },
    { item: "Airedale Terrier" },
    { item: "Beagle" },
    { item: "Bull dog" },
  ];
  const relatedData = [
    {
      name: "Scottish Fold",
      image: "/InnerPage/cat.svg",
      previousPrice: 169.87,
      currentPrice: 147.75,
    },
    {
      name: "Alasken Malamute",
      image: "/InnerPage/cat.svg",
      previousPrice: 169.87,
      currentPrice: 147.75,
    },
    {
      name: "British Shorthair",
      image: "/InnerPage/cat.svg",
      previousPrice: 169.87,
      currentPrice: 147.75,
    },
    {
      name: "American Bobtail",
      image: "/InnerPage/cat.svg",
      previousPrice: 169.87,
      currentPrice: 147.75,
    },
    {
      name: "Khao Mane",
      image: "/InnerPage/cat.svg",
      previousPrice: 169.87,
      currentPrice: 147.75,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("All Categories"); // Default selected breed
  const pageSize = 9;
  const [ageRange, setAgeRange] = useState([0, 10]);

  const handleAgeChange = (value) => {
    setAgeRange(value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, ageRange, selectedBreed]);

  const filteredProducts = sellingData1.filter(
    (product) =>
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Search in name
        product.category.toLowerCase().includes(searchQuery.toLowerCase())) && // Search in category
      product.age >= ageRange[0] &&
      product.age <= ageRange[1] &&
      (selectedBreed === "All Categories" || product.category === selectedBreed) // Handle "All Categories"
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleBreedClick = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div className="mt-1">
      <BasicHeader heading="shop" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="flex flex-col md:flex-row gap-3 lg:gap-5 xl:gap-6">
          <div className="w-full md:w-[35%] lg:w-[30%] xl:w-[25%] flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8 description">
            <div className="search-bg p-4 lg:p-5 xl:p-6 relative">
              <h3 className="heading3 text-white">Search</h3>
              <div className="mt-3 md:mt-4">
                <Input
                  className="search p-4"
                  placeholder="Choose Your Pet"
                  prefix={
                    <SearchOutlined className="mr-3 text-[16px] lg:text-xl" />
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="search-bg p-4 lg:p-5 xl:p-6 relative">
              <h4 className="text-white heading3">Age</h4>
              <Slider
                range
                min={0}
                max={10}
                value={ageRange}
                onChange={handleAgeChange}
                tooltip={{ formatter: (value) => `${value} years` }}
              />
              <div className="text-white description mt-5 lg:mt-6 flex items-center justify-between">
                <div className="px-6 py-3 lg:px-8 lg:py-4 bg-primary rounded-[40px]">
                  Filter
                </div>
                Age: {ageRange[0]} - {ageRange[1]} years
              </div>
            </div>
            <div className="search-bg p-4 md:p-5 lg:p-6">
              <p className="text-white heading3 border-b border-[#D9D9D9] pb-5 lg:pb-6">
                Top Breeds
              </p>
              <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex flex-col gap-3 md:gap-4 lg:gap-6">
                {breadData.map((data, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-between border-b border-[#D9D9D9] pb-2 lg:pb-3 last:pb-0 last:border-b-0 ${
                      selectedBreed === data.item
                        ? "text-primary"
                        : "text-white"
                    }`}
                    onClick={() => handleBreedClick(data.item)}
                  >
                    <p className="heading4">{data.item}</p>
                    <FaArrowRightLong
                      className={`text-[12px] md:text-[14px] lg:text-[16px] ${
                        selectedBreed === data.item
                          ? "text-primary"
                          : "text-white"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="search-bg p-4 md:p-5 lg:p-6">
              <p className="text-white heading3 border-b border-[#D9D9D9] pb-5 lg:pb-6">
                related product
              </p>
              <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex flex-col gap-3 md:gap-4 lg:gap-6">
                {relatedData.map((data, index) => (
                  <div key={index} className="flex items-center gap-2 lg:gap-3">
                    <Image
                      className="rounded-[10px]"
                      src={data.image}
                      width={60}
                      height={60}
                      alt="related pet"
                    />
                    <div className=" text-white">
                      <h4 className="heading4">{data.name}</h4>
                      <div className="mt-3 flex gap-3 xl:gap-4 items-center description">
                        <p className="text-primary">{data.currentPrice} $</p>
                        <p>
                          {" "}
                          <del>{data.previousPrice} $</del>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-5">
              {paginatedProducts.map((product, index) => (
                <SellingCard2 key={index} data={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Pagination
            align="center"
            current={currentPage}
            pageSize={pageSize}
            total={filteredProducts.length}
            onChange={setCurrentPage}
            itemRender={(page, type) => {
              if (type === "prev") {
                return <FaArrowLeftLong className="text-xl" />;
              }
              if (type === "next") {
                return <FaArrowRightLong className="text-xl" />;
              }
              return <a>{page}</a>;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
