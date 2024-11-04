'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeadingMiddle from '../Common/HeadingMiddle';
import FeatureCard3 from '../Common/FeaturesCard3';

const FeaturesCategories3 = () => {
    const swiperRef = useRef(null); 

   const featuresData = [
        {
            _id: 1,
            image: '/home2/Selling/1.svg',
            heading: 'Pet Clothes',
        },
        
        {
            _id: 2,
            image: '/home2/Selling/1.svg',
            heading: 'Pet Food',
    
        },
        {
            _id: 3,
            image: '/home2/Selling/1.svg',
            heading: 'Pet Toys',
        },
        {
            _id: 4,
            image: '/home2/Selling/1.svg',
            heading: 'Grooming Kits',
        },
        {
            _id: 5,
            image: '/home2/Selling/1.svg',
            heading: 'pet’s Clothes',
        },
        {
            _id: 6,
            image: '/home2/Selling/1.svg',
            heading: 'pet’s Clothes',
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
                        550: { slidesPerView: 2, spaceBetween: 24 },
                        768: { slidesPerView: 3, spaceBetween: 24 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                        1280: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                    modules={[Keyboard, Navigation, Pagination]}
                    ref={swiperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                >
                    {featuresData.map((feature) => (
                        <SwiperSlide key={feature._id}>
                            <FeatureCard3
                                image={feature.image} 
                                heading={feature.heading} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturesCategories3;

