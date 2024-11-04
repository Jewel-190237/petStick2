'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation, Pagination } from 'swiper/modules'; // Import Pagination module
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewCard2 from '../Common/ReviewCard2';
import HeadingLeft from '../Common/HeadingLeft';


const Review2 = () => {

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
           <div className='max-w-[600px]'>
           <HeadingLeft heading='some good words from customers' description='Here’s what our happy customers are saying about Petstick - trusted by pet owners for quality, safety, and endless fun!'/>
           </div>
    
           <div className='explore'>
           <Swiper
                keyboard={{
                    enabled: true,
                }}
                pagination={{ clickable: true }} 
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
                modules={[Keyboard, Navigation,Pagination]}
                ref={swipperRef}
                className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
            >
                {reviewData.map((data, index) => (
                    <SwiperSlide  key={index} >
                        <ReviewCard2 rate={data.rate} country={data.country} description={data.description} name={data.name} image={data.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
           </div>
            <div className='flex items-center justify-center md:justify-end gap-5'>
                <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
            </div>
        </div>
    );
};

export default Review2;
