'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewCard3 from '../Common/ReviewCard3';
import Image from 'next/image';

const Review3 = () => {
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

    const reviewData = [
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },
        { rate: 4, description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend", image: '/home1/Review/person.jpg', name: "saifa tazrin rati", country: "united state" },

    ];

    return (
        <div className='bg-[#F8D9CC] mt-20'>
            <div className='pet-container grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-20 xl:gap-24 pt-10 md:pt-12 lg:pt-14 xl:pt-16'>
                <div className=''>
                    <h1 className='heading1 !text-left'>some good word’ from <br className='hidden lg:flex' /> customer</h1>
                    <p className='description mt-5 lg:mt-6'>Here’s what our happy customers are saying about Petstick – trusted by pet <br className='hidden lg:flex' /> owners for quality, safety, and endless fun!</p>
                </div>
                {/* Review card */}
                <div className='mt-10 lg:mt-14 xl:mt-16 pb-5 lg:pb-0'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}

                        keyboard={{
                            enabled: true,
                        }}

                        modules={[Keyboard, Navigation]}
                        ref={swipperRef}
                        className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                    >
                        {reviewData.map((data, index) => (
                            <SwiperSlide key={index} >
                                <ReviewCard3 rate={data.rate} country={data.country} description={data.description} name={data.name} image={data.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex items-center justify-center gap-5 mt-5 lg:mt-10 xl:mt-12'>
                        <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                        <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex items-end justify-between lg:-mt-12 xl:-mt-40'>
                <Image className='w-[40%] xl:w-[50%]' src='/home1/Review/dog11.svg' width={798} height={445} alt='Dog 1' />
                <Image src='/home1/Review/dog12.svg' width={462} height={180} alt='Dog 2' />
            </div>
        </div>
    );
};

export default Review3;