'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import HeadingMiddle from '../Common/HeadingMiddle';
import LatestCard from '../Common/LatestCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const LatestPost = () => {
    const postData = [
        { image: '/home1/dog4.svg', heading: 'A recipe for dog biscuits suitable for the holidays', date: "17 October, 2024", time: '9' },
        { image: '/home1/dog4.svg', heading: 'A recipe for dog biscuits suitable for the holidays', date: "17 October, 2024", time: '9' },
        { image: '/home1/dog4.svg', heading: 'A recipe for dog biscuits suitable for the holidays', date: "17 October, 2024", time: '9' },
        { image: '/home1/dog4.svg', heading: 'A recipe for dog biscuits suitable for the holidays', date: "17 October, 2024", time: '9' },
    ];

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
        <div className='max-w-[1320px] mx-auto mt-28 pb-28 -mb-20'>
            <div className='mb-10'>
                <HeadingMiddle heading='latest post & articles' />
            </div>
            <div>
                <Swiper
                    keyboard={{ enabled: true }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    modules={[Keyboard, Navigation]}
                    ref={swiperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 "
                >
                    {postData.map((post, index) => (
                        <SwiperSlide key={index}>
                            <LatestCard
                                image={post.image}
                                heading={post.heading}
                                date={post.date}
                                time={post.time}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='flex items-center justify-center mt-10 gap-5'>
                <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
            </div>
        </div>
    );
};

export default LatestPost;
