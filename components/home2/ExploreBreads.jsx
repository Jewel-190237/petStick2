'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules'; // Import Pagination module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Import Pagination CSS
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import ExploreCards2 from '../Common/ExporeCards2';
import HeadingLeft from '../Common/HeadingLeft';

const Explores = [
    { _id: '1', image: '/home1/Explore/dog.svg', heading: 'Airedale Terrier', age: '2 years', breed: 'Vizsla/Labrador' },
    { _id: '2', image: '/home1/Explore/dog.svg', heading: 'Airedale Terrier', age: '3 months', breed: 'Vizsla/Labrador' },
    { _id: '3', image: '/home1/Explore/dog.svg', heading: 'Airedale Terrier', age: '1 year', breed: 'Vizsla/Labrador' },
    { _id: '4', image: '/home1/Explore/dog.svg', heading: 'Alasken Malamute', age: '6 months', breed: 'Vizsla/Labrador' },
    { _id: '5', image: '/home1/Explore/dog.svg', heading: 'Alasken Malamute', age: '4 years', breed: 'Vizsla/Labrador' },
    { _id: '6', image: '/home1/Explore/dog.svg', heading: 'Alasken Malamute', age: '2 years 3 months', breed: 'Vizsla/Labrador' }
];

const ExploreBreads = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, []);

    const Next = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const Previous = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='max-w-[1320px] mx-auto my-[120px]'>
           <div className='max-w-[600px]'>
           <HeadingLeft
                heading='Explore Breeds'
                description='Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.'
            />
           </div>
            <div className='explore'>
                <Swiper
                    keyboard={{ enabled: true }}
                    pagination={{ clickable: true }} // Enable clickable pagination
                    navigation={false}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 4, spaceBetween: 24 }
                    }}
                    modules={[Keyboard, Navigation, Pagination]} // Add Pagination module
                    ref={swiperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                >
                    {Explores.map((data) => (
                        <SwiperSlide key={data._id}>
                            <ExploreCards2 {...data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex ml-auto -mt-2 justify-end gap-5 w-60'>
                    <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                    <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default ExploreBreads;
