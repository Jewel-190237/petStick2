"use client";
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules'; // Import Pagination module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Import Pagination CSS
import HeadingMiddle from '../Common/HeadingMiddle';
import FeatureCard from '../Common/FeaturesCard';
import Image from 'next/image';

const FeaturesCategories = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, []);

    const features = [
        { id: 1, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/1.svg', title: 'German Puppies' },
        { id: 2, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/2.svg', title: 'Golden Puppies' },
        { id: 3, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/1.svg', title: 'Bulldog Puppies' },
        { id: 4, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/2.svg', title: 'Poodle Puppies' },
        { id: 5, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/1.svg', title: 'Siberian Puppies' },
        { id: 6, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/1.svg', title: 'Bulldog Puppies' },
        { id: 7, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/2.svg', title: 'Poodle Puppies' },
        { id: 8, bgImage: '/home1/features/bg.svg', innerImage: '/home1/features/2.svg', title: 'Siberian Puppies' },
    ];

    return (
        <div className='overflow-hidden'>
                    <div className='max-w-[1320px] mx-auto mt-20'>
             <div className='ml-auto flex justify-end -mt-10 -mb-60  -mr-72'>
                    <Image width={200} height={200} alt='design' src='/home1/Explore/dr.svg'></Image>
                </div>
            <div className='max-w-[500px] mx-auto'>
                <HeadingMiddle 
                    heading='Features Categories' 
                    description='At petstick, access pet listings, shop easily, and book grooming, vet visits, and training all through personalized profiles.'
                />
            </div>
            <div className='features'>
                <Swiper
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: true }} // Enable clickable pagination
                    navigation={false}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 24 },
                        525: { slidesPerView: 2, spaceBetween: 24 },
                        768: { slidesPerView: 3, spaceBetween: 24 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                        1280: { slidesPerView: 5, spaceBetween: 24 }
                    }}
                    modules={[Keyboard, Navigation, Pagination]} // Add Pagination module
                    ref={swiperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                >
                {features.map((feature) => (
                    <SwiperSlide key={feature.id}>
                        <FeatureCard 
                            bgImage={feature.bgImage} 
                            innerImage={feature.innerImage} 
                            title={feature.title} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </div>
    );
};

export default FeaturesCategories;
