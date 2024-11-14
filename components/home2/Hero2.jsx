'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample data for slides
const slideData = [
  {
    _id: 1,
    bgImage: '/home2/hero2/1.svg',
    heading: 'Established & Trusted Pet Care Service',
    paragraph:
      'At PetStick, we offer trusted and professional pet care solutions specializing in grooming, training, and wellness products. Our experienced team is committed to delivering exceptional care, ensuring the health, happiness, and well-being of every pet we serve.',
  },
  {
    _id: 2,
    bgImage: '/home2/hero2/1.svg',
    heading: 'Professional Grooming & Training',
    paragraph:
      'Providing top-notch grooming and training services to keep your pets in the best shape. Our skilled staff ensures a loving environment.',
  },
  {
    _id: 3,
    bgImage: '/home2/hero2/1.svg',
    heading: 'Comprehensive Pet Wellness Products',
    paragraph:
      'Offering a wide range of wellness products to support your pet’s health. Choose from carefully curated products for every pet’s needs.',
  },
  {
    _id: 4,
    bgImage: '/home2/hero2/1.svg',
    heading: 'Caring & Experienced Team',
    paragraph:
      'Our team is dedicated to providing exceptional care for every pet. Trust us to be your partner in pet health and happiness.',
  },
];

export default function Hero2() {
  return (
    <div className="w-full flex items-center justify-center text-center -mt-[110px] relative" >
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={false}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-[105vh] hero2"
      >
        {slideData.map(({ _id, bgImage, heading, paragraph }) => (
          <SwiperSlide key={_id}>
            <div
              className="relative h-full w-full flex items-center justify-center text-center bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

              {/* Centered Content */}
              <div className="relative z-10 text-white px-4 max-w-[850px] mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-laila font-bold drop-shadow-md">
                  {heading}
                </h1>
                <p className="mt-8 text-lg font-lora">
                  {paragraph}
                </p>
                <button className="mt-12 px-8 py-4 bg-primary text-white font-lora text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
