
'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import TeamCard2 from '../Common/TeamCard2';

const Team2 = () => {

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
    const socialData = [
        { icon: <FaXTwitter size={20} />, link: 'https://twitter.com/yourprofile' },
        { icon: <FaFacebookF size={20} />, link: 'https://facebook.com/yourprofile' },
        { icon: <FaLinkedinIn size={20} />, link: 'https://linkedin.com/in/yourprofile' }
    ];

    const teamData = [
        { image: '/home1/Team/teamImage.jpg', name: 'saifa tazrin rati', title: 'Doctor', socialData },
        { image: '/home1/Team/teamImage.jpg', name: 'rayhan ul Islam', title: 'Dog Groomer', socialData },
        { image: '/home1/Team/teamImage.jpg', name: 'Murubbi William', title: 'Dog Groomer', socialData },
        { image: '/home1/Team/teamImage.jpg', name: 'saifa tazrin rati', title: 'Dog Groomer', socialData },
        { image: '/home1/Team/teamImage.jpg', name: 'Murubbi William', title: 'Dog Groomer', socialData },
        { image: '/home1/Team/teamImage.jpg', name: 'rayhan ul Islam', title: 'Dog Groomer', socialData },
    ]
    return (
        <div className='bg-[#F8D9CC] mt-20'>
            <div className='pet-container py-8 md:py-10 lg:py-12 xl:py-14'>
                <h1 className='heading1'>our team</h1>
                <p className='description text-center mt-5 lg:mt-6'>Meet our dedicated team, passionate about providing <br className='hidden lg:flex' />
                    the best care for your pets!</p>

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
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                    }}
                    modules={[Keyboard, Navigation]}
                    ref={swipperRef}
                    className="mt-8 md:mt-10 lg:mt-12 xl:mt-14"
                >
                    {teamData.map((data, index) => (
                        <SwiperSlide key={index}  >
                            <TeamCard2 key={index} image={data.image} name={data.name} title={data.title} socialData={data.socialData} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex items-center justify-center gap-5 mt-10'>
                    <button onClick={Previous} className='swipper-button'><FaArrowLeft size={20} /></button>
                    <button onClick={Next} className='swipper-button'><FaArrowRight size={20} /></button>
                </div>

            </div>
        </div>
    );
};

export default Team2;