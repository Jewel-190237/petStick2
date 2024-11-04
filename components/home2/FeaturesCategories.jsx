'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeadingMiddle from '../Common/HeadingMiddle';
import { HiArrowRight } from "react-icons/hi";
import Image from 'next/image';
import FeaturesCard2 from '../Common/FeaturesCard2';

const FeaturesCategories = () => {
    const swiperRef = useRef(null);

   const featuresData = [
        {
            _id: 1,
            image: '/home2/Selling/1.svg',
            title: 'Clothes',
            heading: 'Pet Clothes',
            description: 'Stylish and comfortable pet clothes for all seasons.',
        },
        {
            _id: 2,
            image: '/home2/Selling/1.svg',
            title: 'Food',
            heading: 'Pet Food',
            description: 'Premium quality food for your pets to keep them healthy.',
        },
        {
            _id: 3,
            image: '/home2/Selling/1.svg',
            title: 'Toys',
            heading: 'Pet Toys',
            description: 'Fun and safe toys to keep your pets entertained.',
        },
        {
            _id: 4,
            image: '/home2/Selling/1.svg',
            title: 'Grooming',
            heading: 'Grooming Kits',
            description: 'All the essentials for keeping your pet looking great.',
        },
        {
            _id: 5,
            image: '/home2/Selling/1.svg',
            title: 'Accessories',
            heading: 'pet’s Clothes',
            description: 'High-quality accessories for pet convenience and style.',
        },
        {
            _id: 6,
            image: '/home2/Selling/1.svg',
            title: 'Training',
            heading: 'pet’s Clothes',
            description: 'Effective tools for training and disciplining your pets.',
        },
    ];

    return (
        <div className="max-w-[1320px] mx-auto mt-16">
            <div className="max-w-[500px] mx-auto">
                <HeadingMiddle
                    heading="Features Categories"
                    description="At petstick, access pet listings, shop easily, and book grooming, vet visits, and training all through personalized profiles."
                />
            </div>
            <div className='feature2'>
                <Swiper
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    modules={[Keyboard, Navigation, Pagination]}
                    ref={swiperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                >
                    {featuresData.map((feature) => (
                        <SwiperSlide key={feature._id}>
                            <FeaturesCard2 
                                heading={feature.heading}
                                innerImage={feature.image} 
                                title={feature.title} 
                                description={feature.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturesCategories;

