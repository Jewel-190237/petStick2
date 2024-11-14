"use client";
import React, { useEffect, useRef, useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import Image from "next/image";
import { Rate } from "antd";
import ProductButton from "../Common/ProductButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard from "../Common/ProductCard";
import Review from "./Review";
import Link from "next/link";
const PetDetails = () => {
  const swipperRef = useRef(null);
  useEffect(() => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.update();
    }
  }, []);
  const Next = () => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.slideNext();
    }
  };
  const Previous = () => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.slidePrev();
    }
  };
  const [count, setCount] = useState(1);
  const [selectedInfoIndex, setSelectedInfoIndex] = useState(0); // Default to first item

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const reviewData = [
    {
      image: "/InnerPage/reviewer.svg",
      name: "saifa tazrin rati",
      rating: 4,
      review:
        "I recently purchased a Turkish Angora and have been thoroughly impressed. The breed's elegance, intelligence, and playful nature make them exceptional companions. Their luxurious coat is surprisingly low-maintenance, adding to their overall appeal. Highly recommend!",
    },
    {
      image: "/InnerPage/reviewer.svg",
      name: "saifa tazrin rati",
      rating: 4,
      review:
        "I recently purchased a Turkish Angora and have been thoroughly impressed. The breed's elegance, intelligence, and playful nature make them exceptional companions. Their luxurious coat is surprisingly low-maintenance, adding to their overall appeal. Highly recommend!",
    },
  ];

  const infoData = [
    {
      title: "Description",
      description:
        "The Turkish Angora cat is a stunning, ancient breed, admired for its sleek, long, and silky coat. Known for their striking eyes, which can be blue, green, or even odd-eyed (one of each), Turkish Angoras are graceful, athletic, and elegant. Their playful and intelligent nature makes them wonderful companions, as they often enjoy interacting with their owners and exploring their surroundings. This breed is also known for being social, affectionate, and sometimes even a bit mischievous, always seeking attention and engagement. Despite their luxurious coats, they require minimal grooming, making them relatively low-maintenance while still exuding beauty and charm.",
    },
    {
      title: "Additional Info",
      facilities: [
        { breed: "Turkish Angora" },
        { gender: "Male" },
        { color: "White" },
        { Age: 6 },
      ],
    },
    {
      title: "Review",
      component: reviewData.map((data, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <Review data={data} />
        </div>
      )),
    },
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

  const sellingData1 = [
    {
      _id: "1",
      image: "/InnerPage/dog.svg",
      age: 4,
      rating: 4.5,
      name: "Golden Retriever",
      price: "$120",
      category: "Alasken Malamute",
    },
    {
      _id: "2",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.2,
      name: "Labrador Retriever",
      price: "$80",
      category: "Beagle",
    },
    {
      _id: "3",
      image: "/InnerPage/dog.svg",
      age: 3,
      rating: 4.8,
      name: "German Shepherd",
      price: "$90",
      category: "Airedale Terrier",
    },
    {
      _id: "4",
      image: "/InnerPage/dog.svg",
      age: 2,
      rating: 4.3,
      name: "Bulldog",
      price: "$50",
      category: "Bull dog",
    },
    {
      _id: "5",
      image: "/InnerPage/dog.svg",
      age: 1,
      rating: 4.7,
      name: "Poodle",
      price: "$60",
      category: "Alasken Malamute",
    },
    {
      _id: "6",
      image: "/InnerPage/dog.svg",
      age: 6,
      rating: 4.6,
      name: "Beagle",
      price: "$70",
      category: "Beagle",
    },
    {
      _id: "7",
      image: "/InnerPage/dog.svg",
      age: 6,
      rating: 4.9,
      name: "Siberian Husky",
      price: "$110",
      category: "Airedale Terrier",
    },
    {
      _id: "8",
      image: "/InnerPage/dog.svg",
      age: 7,
      rating: 4.4,
      name: "Boxer",
      price: "$75",
      category: "Bull dog",
    },
    {
      _id: "9",
      image: "/InnerPage/dog.svg",
      age: 8,
      rating: 4.4,
      name: "Chihuahua",
      price: "$75",
      category: "Alasken Malamute",
    },
    {
      _id: "10",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.4,
      name: "Beagle",
      price: "$75",
      category: "Beagle",
    },
    {
      _id: "11",
      image: "/InnerPage/dog.svg",
      age: 9,
      rating: 4.4,
      name: "Dalmatian",
      price: "$75",
      category: "Airedale Terrier",
    },
    {
      _id: "12",
      image: "/InnerPage/dog.svg",
      age: 10,
      rating: 4.4,
      name: "Shih Tzu",
      price: "$75",
      category: "Bull dog",
    },
    {
      _id: "13",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.4,
      name: "Rottweiler",
      price: "$75",
      category: "Alasken Malamute",
    },
    {
      _id: "14",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.4,
      name: "Beagle",
      price: "$75",
      category: "Beagle",
    },
    {
      _id: "15",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.4,
      name: "Doberman Pinscher",
      price: "$75",
      category: "Airedale Terrier",
    },
    {
      _id: "16",
      image: "/InnerPage/dog.svg",
      age: 5,
      rating: 4.4,
      name: "Doberman Pinscher",
      price: "$75",
      category: "Airedale Terrier",
    },
  ];

  const folderData = [
    { heading: "Food", count: 3 },
    { heading: "clothes", count: 3 },
    { heading: "medicine", count: 3 },
    { heading: "dog", count: 3 },
    { heading: "cat", count: 3 },
    { heading: "toy", count: 3 },
    { heading: "pet’s protein", count: 3 },
  ];

  return (
    <section className="mt-1">
      <BasicHeader heading="pet’s" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="flex flex-col md:flex-row gap-3 lg:gap-5 xl:gap-6">
          <div className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%]">
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-2 lg:gap-4 xl:gap-6">
              <div className="flex-1">
                <Image
                  className="rounded-[40px]"
                  src="/InnerPage/cat2.svg"
                  width={536}
                  height={483}
                  alt="Pet Image"
                />
              </div>
              <div className="flex-1 mt-5 sm:mt-0">
                <h4 className="heading5">Turkish Angora</h4>
                <div className="mt-3 lg:mt-4 xl:mt-5 flex-row md:flex-col lg:flex-row flex items-center gap-2 md:gap-3">
                  <Rate disabled defaultValue={4} />
                  <p className="description text-[#44433F]">
                    ( 253 customer review )
                  </p>
                </div>
                <div className="mt-3 lg:mt-4 xl:mt-5 flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 description text-[#44433F]">
                  <p>Category: cat</p>
                  <p>
                    Stock: <span className="text-primary">Available</span>
                  </p>
                </div>
                <div className="mt-3 lg:mt-4 xl:mt-5 flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 heading2">
                  <p className="text-[#44433F]">$ 350.46</p>
                  <p className="text-primary">$ 250.56</p>
                </div>
                <p className="mt-3 lg:mt-4 xl:mt-5 description">
                  The Turkish Angora is a graceful, intelligent breed with a
                  sleek coat and striking eyes. Social and playful.
                </p>
                <div className="flex items-center gap-4 mt-3 lg:mt-4 xl:mt-5">
                  <p className="description">Quantity:</p>
                  <ProductButton
                    count={count}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                  />
                </div>
                <div className="flex items-center gap-4 mt-3 lg:mt-4 xl:mt-5">
                  <Link href="/checkout">
                    <button className="pet-button">buy now</button>
                  </Link>
                  <Link href="/cart">
                    <button className="pet-button">add to cart</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 heading4 overflow-x-auto">
                {infoData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedInfoIndex(index)}
                    className={`rounded-t-[20px] border border-b-0 px-8 py-4 whitespace-pre ${
                      selectedInfoIndex === index
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="border p-4 lg:p-5 xl:p-6">
                <h3 className="heading2">
                  {infoData[selectedInfoIndex].title}
                </h3>

                {/* Conditional rendering based on data type */}
                <div className="mt-4 lg:mt-5 xl:mt-6 description">
                  {infoData[selectedInfoIndex].description && (
                    <p>{infoData[selectedInfoIndex].description}</p>
                  )}
                  {infoData[selectedInfoIndex].facilities && (
                    <ul className="list-disc pl-5 capitalize">
                      {infoData[selectedInfoIndex].facilities.map(
                        (facility, idx) => (
                          <li key={idx}>
                            {Object.keys(facility)[0]}:{" "}
                            {Object.values(facility)[0]}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                  {infoData[selectedInfoIndex].component && (
                    <div>
                      {infoData[selectedInfoIndex].component}
                      <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14">
                        <h2 className="heading3"> Add a review</h2>
                        <p className="heading4 mt-3 lg:mt-4 xl:mt-5">
                          Your raitng
                        </p>
                        <Rate className="mt-3" disabled defaultValue={4} />
                        <p className="heading4 mt-3 lg:mt-4 xl:mt-5">
                          write a comment
                        </p>
                        <textarea
                          className="mt-3 lg:mt-4 xl:mt-5 w-full border p-3 lg:p-4 xl:p-5 rounded-[20px] h-[80px] md:h-[100px] lg:h-[150px]"
                          placeholder="Write Something....."
                          name=""
                          id=""
                        />
                        <button className="pet-button mt-5 lg:mt-8 xl:mt-10">
                          submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* swipper slider  */}
            <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <h2 className="heading5">related product’s</h2>
              <Swiper
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                modules={[Keyboard, Navigation]}
                ref={swipperRef}
                className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
              >
                {sellingData1.map((data, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard key={index} data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center gap-3 lg:gap-5 mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                <button onClick={Previous} className="swipper-button">
                  <FaArrowLeft size={20} />
                </button>
                <button onClick={Next} className="swipper-button">
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[35%] lg:w-[30%] xl:w-[25%] flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className="search-bg px-4 md:px-5 lg:px-6 py-6 md:py-8 lg:py-10 text-white">
              <div className="flex items-center justify-between">
                <div className="border-r  flex-1 flex flex-col gap-2 lg:gap-3">
                  <p className="text-[10px] lg:text-xs font-lora font-normal">
                    Sold By
                  </p>
                  <h4 className="heading4">Somiron pet</h4>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div>
                      <Image
                        src="/InnerPage/message.svg"
                        width={20}
                        height={20}
                        alt="Message icon"
                      />
                    </div>
                    <p className="description">Chat Now </p>
                  </div>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="heading4">Go to store</h4>
                </div>
              </div>
            </div>
            {/* related product Information */}
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
                    <div className="text-white w-full">
                      <h4 className="heading4">{data.name}</h4>
                      <div className="mt-3 flex justify-between lg:gap-4 items-center description">
                        <p className="text-primary">$ {data.currentPrice}</p>
                        <p>
                          {" "}
                          <del>$ {data.previousPrice}</del>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* folder information */}
            <div className="search-bg p-4 md:p-5 lg:p-6 text-white">
              <p className="heading3 border-b border-[#D9D9D9] pb-5 lg:pb-6">
                product category
              </p>
              {folderData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-4 lg:mt-5"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Image
                      src="/InnerPage/folder.svg"
                      width={20}
                      height={20}
                      alt="Folder"
                    />
                    <p className="heading4">{data.heading}</p>
                  </div>
                  <div className="bg-white w-7 h-7 rounded-full heading4 p-1 text-[#4B3C34] text-center">
                    {data.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetails;
