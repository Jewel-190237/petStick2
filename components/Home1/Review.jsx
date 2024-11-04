'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewCard1 from "../Common/ReviewCard1";

const Review = () => {

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
        <div className='pet-container mt-16 md:mt-20 lg:mt-24 xl:mt-28'>
            <h1 className='heading1 !text-left'> some good words from <br className='hidden lg:flex' /> customers </h1>
            <p className='description mt-5 lg:mt-6'> Here’s what our happy customers are saying about Petstick – trusted by pet <br className='hidden lg:flex' /> owners for quality, safety, and endless fun! </p>
            
            <div className='flex items-center justify-center md:justify-end gap-5'>
                <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
            </div>

            <Swiper
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{

                    0: {
                        slidesPerView: 1,
                        spaceBetween: 24
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                }}
                modules={[Keyboard, Navigation]}
                ref={swipperRef}
                className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
            >
                {reviewData.map((data, index) => (
                    <SwiperSlide  key={index} >
                        <ReviewCard1 rate={data.rate} country={data.country} description={data.description} name={data.name} image={data.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;
