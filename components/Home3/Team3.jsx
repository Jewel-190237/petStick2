"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Team3Card from "../Common/Team3Card";
import HeadingMiddle from "../Common/HeadingMiddle";

const Team3 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  const socialData = [
    { icon: <FaXTwitter size={20} />, link: "https://twitter.com/yourprofile" },
    {
      icon: <FaFacebookF size={20} />,
      link: "https://facebook.com/yourprofile",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      link: "https://linkedin.com/in/yourprofile",
    },
  ];

  const teamData = [
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
    {
      image: "/home1/Team/team.svg",
      name: "Murubbi William",
      title: "Dog Groomer",
      socialData,
    },
  ];
  return (
    <div className=" py-8 md:py-10 lg:py-12 xl:py-14 mt-20">
      <div className="pet-container">
        <div className="max-w-[350px] mx-auto">
          <HeadingMiddle
            align="center"
            heading="Our Team"
            description="Meet our dedicated team, passionate about providing the best care for your pets!"
          />
        </div>

        <Swiper
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Keyboard, Navigation, Pagination]}
          ref={swiperRef}
          className="mt-8 feature md:mt-10 lg:mt-12 xl:mt-14 feature2  "
        >
          {teamData.map((data, index) => (
            <SwiperSlide key={index}>
              <Team3Card
                key={index}
                image={data.image}
                name={data.name}
                title={data.title}
                socialData={data.socialData}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team3;
