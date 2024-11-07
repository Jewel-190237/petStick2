"use client";
import React, { useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import ShopPeat from "../Home1/ShopPeat";
import Health2 from "../home2/Health2";

const Service = () => {
  const serviceData = [
    {
      idIndex: 1,
      title: "pet day care",
      image: "/InnerPage/image.svg",
      heading: "Delivering World Class Pet day care",
      description:
        "Main Hospitals or larger hospital systems may provide their own ambulance service as a service to the community, where ambulance care is unreliable or chargeable. Many hospital-based EMS departments operate solely with their hospital, though some operate The physicians will attempt to treat casualties at the scene and will only transport them to hospital if it is deemed necessary. If patients are transported to hospital, they are more likely to go straight to a ward rather than to Proper pet care lifetime commitment furry family member that depends on you for his or her health and well-being that all responsible pet owners need to provide.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
    {
      idIndex: 0,
      title: "tanning",
      image: "/InnerPage/image1.svg",
      image1: "/InnerPage/dog1.svg",
      image2: "/InnerPage/dog2.svg",
      heading: "Delivering World Class Pet day care",
      description:
        "Our professional pet grooming services ensure your pet looks and feels their best. With experienced groomers, we provide a range of services including bathing, brushing, nail trimming, and breed-specific styling. We prioritize your pet's comfort, using gentle techniques and high-quality products to maintain healthy skin and coats. Whether it's a simple trim or a full grooming session, we tailor our services to meet your pet’s unique needs, leaving them refreshed, clean, and looking great.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
    {
      idIndex: 0,
      title: "pet sitting",
      image: "/InnerPage/image.svg",
      image1: "/InnerPage/dog1.svg",
      image2: "/InnerPage/dog2.svg",
      heading: "Delivering World Class Pet day care",
      description:
        "Our professional pet grooming services ensure your pet looks and feels their best. With experienced groomers, we provide a range of services including bathing, brushing, nail trimming, and breed-specific styling. We prioritize your pet's comfort, using gentle techniques and high-quality products to maintain healthy skin and coats. Whether it's a simple trim or a full grooming session, we tailor our services to meet your pet’s unique needs, leaving them refreshed, clean, and looking great.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
    {
      idIndex: 2,
      title: "veterinary",
      image: "/InnerPage/image2.svg",
      heading: "Expert Veterinary Care Services",
      description:
        "Our Expert Veterinary Care Services provide comprehensive healthcare solutions for your pet. From routine check-ups and vaccinations to advanced diagnostics and treatments, our experienced veterinarians are dedicated to keeping your pet healthy and happy. We offer personalized care plans tailored to your pet's specific needs, ensuring they receive the best possible medical attention. Whether it's preventive care or urgent medical issues, our team is here to provide expert support at every stage of your pet’s life.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
    {
      idIndex: 0,
      title: "pet breeding",
      image: "/InnerPage/image.svg",
      image1: "/InnerPage/dog1.svg",
      image2: "/InnerPage/dog2.svg",
      heading: "Delivering World Class Pet day care",
      description:
        "Our professional pet grooming services ensure your pet looks and feels their best. With experienced groomers, we provide a range of services including bathing, brushing, nail trimming, and breed-specific styling. We prioritize your pet's comfort, using gentle techniques and high-quality products to maintain healthy skin and coats. Whether it's a simple trim or a full grooming session, we tailor our services to meet your pet’s unique needs, leaving them refreshed, clean, and looking great.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
    {
      idIndex: 0,
      title: "grooming",
      image: "/InnerPage/image1.svg",
      image1: "/InnerPage/dog1.svg",
      image2: "/InnerPage/dog2.svg",
      heading: "Professional Pet Grooming Services",
      description:
        "Our professional pet grooming services ensure your pet looks and feels their best. With experienced groomers, we provide a range of services including bathing, brushing, nail trimming, and breed-specific styling. We prioritize your pet's comfort, using gentle techniques and high-quality products to maintain healthy skin and coats. Whether it's a simple trim or a full grooming session, we tailor our services to meet your pet’s unique needs, leaving them refreshed, clean, and looking great.",
      faciities: [
        {
          item: "Pets are almost always considered ‘family’ by leaving a child to a nanny or babysitter very important.",
        },
        {
          item: " Compassion and empathy. Kindness and respect are both very important when dealing with animals, and equally",
        },
        {
          item: "Dogs is just natural to be a dog walker, one can either join an existing company you can also be a private dog walker",
        },
        {
          item: "Pet boarding attendants are a combination of a pet sitter and a veterinary difference is that pet boarding attendants",
        },
      ],
    },
  ];

  const [activeService, setActiveService] = useState(serviceData[0]);

  return (
    <section className="mt-1">
      <BasicHeader heading="service" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="flex flex-col md:flex-row md:gap-3 lg:gap-6">
          <div className="w-full md:w-1/2 lg:w-[25%] box-shadow p-4 md:p-5 lg:p-6">
            <p className="heading3 border-b border-[#D9D9D9] pb-5 lg:pb-6">
              {" "}
              service’s{" "}
            </p>
            <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex flex-col gap-3 md:gap-4 lg:gap-6">
              {serviceData.map((data, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-between border-b border-[#D9D9D9] pb-2 lg:pb-3 last:pb-0 last:border-b-0 ${
                    activeService.title === data.title
                      ? "text-primary"
                      : "text-textMain"
                  }`}
                  onClick={() => setActiveService(data)}
                >
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-lora font-semibold capitalize">
                    {data.title}
                  </p>
                  <FaArrowRightLong />
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[75%]">
            <Image
              className="rounded-[20px]"
              src={activeService.image}
              width={984}
              height={494}
              alt="Service Image"
            />
          </div>
        </div>
        <div className="mt-7 md:mt-8 lg:mt-10 xl:mt-12">
          <h1 className="heading1 ">{activeService.heading}</h1>
          <p className="description mt-5 md:mt-6 lg:mt-7 xl:mt-8">
            {activeService.description}
          </p>
          <div className="description mt-5 md:mt-6 lg:mt-7 xl:mt-8">
            <ul>
              {activeService.faciities.map((facility, index) => (
                <li key={index} className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 bg-textMain rounded-full"></div>
                  <span className="">{facility.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-7 md:mt-8 lg:mt-10 xl:mt-12">
          {activeService.idIndex == 1 ? (
            <ShopPeat />
          ) : activeService.idIndex == 2 ? (
            <Health2 />
          ) : (
            <section>
              <div className="flex  items-center gap-3 lg:gap-5 xl:gap-6">
                <Image
                  className="rounded-[20px]"
                  src={activeService.image1}
                  width={650}
                  height={460}
                  alt="Service Image"
                />
                <Image
                  className="rounded-[20px]"
                  src={activeService.image2}
                  width={650}
                  height={460}
                  alt="Service Image"
                />
              </div>
              <button className="pet-button mt-5 md:mt-7 lg:mt-8 xl:mt-10">book now</button>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
