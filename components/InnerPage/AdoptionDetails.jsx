"use client";
import React, { useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import CommonNav from "../Common/CommonNav";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

const AdoptionDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const ownerData = [
    { item: "Name", value: "Md. Riaz Mahmud" },
    { item: "email", value: "riazmahmudcse@gmail.com" },
    { item: "Phone number", value: "01925158914" },
    { item: "Gender", value: "Male" },
    { item: "date of birth", value: "May 25, 1994" },
    { item: "location", value: "Osenia, USA" },
  ];

  const detailsData = [
    { item: "Breed", value: "Labrador" },
    { item: "color", value: "Blonde" },
    { item: "age", value: "1 Year" },
    { item: "Gender", value: "Male" },
    { item: "weight", value: "13 KG" },
    { item: "vaccination status", value: "done" },
    { item: "date of birth", value: "19 oct. 2023" },
    { item: "location", value: "Osenia, USA" },
  ];
  const thinkData = [
    {
      item: "Squeaky Toy: Many dogs love squeaky toys and will spend hours pouncing on them, biting them, and carrying them around proudly.",
    },
    {
      item: "Sunny Window or Patio Spot: Many pets love lying in a sunny patch, soaking up the warmth and watching the world go by.",
    },
    {
      item: "Under the Table or Desk: Some dogs and cats feel secure in a little “den” and enjoy curling up under tables or desks.",
    },
    {
      item: "Peanut Butter: A huge favorite among dogs, peanut butter is a treat they’ll lick for ages, especially if it’s spread inside a toy.",
    },
    {
      item: "Freeze-Dried Liver Treats: A high-value treat that many pets go crazy for, perfect for training and rewards.",
    },
    {
      item: "Walks or Hikes: Many dogs have an endless enthusiasm for walks, sniffing around, and discovering new places",
    },
    {
      item: "Belly Rubs: Many pets can’t resist a good belly rub and will often nudge or roll over to ask for one.",
    },
  ];
  return (
    <div className="mt-1">
      <div className="pb-20 lg:pb-28 xl:pb-32">
        <BasicHeader heading="adoption" />
        <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 xl:gap-10">
            <div className="w-full md:w-[60%]">
              <Image
                className="w-full max-h-[584px] rounded-[40px] object-fill"
                src="/InnerPage/cat.jpg"
                width={744}
                height={620}
                alt="Pet Details Image"
              />
              <div className="mt-3 lg:mt-4 xl:mt-6 hidden md:flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
                <Image
                  className="max-w-[132px] lg:max-w-[232px] max-h-[264px] rounded-[20px]"
                  src="/InnerPage/cat1.jpg"
                  width={232}
                  height={264}
                  alt="Pet Details Image"
                />
                <Image
                  className="max-w-[132px] lg:max-w-[232px] max-h-[264px] rounded-[20px]"
                  src="/InnerPage/cat1.jpg"
                  width={232}
                  height={264}
                  alt="Pet Details Image"
                />
                <Image
                  className="max-w-[132px] lg:max-w-[232px] max-h-[264px] rounded-[20px]"
                  src="/InnerPage/cat1.jpg"
                  width={232}
                  height={264}
                  alt="Pet Details Image"
                />
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="health-shadow rounded-[40px] p-3 lg:p-5 xl:p-10 w-full">
                <h2 className="heading1">Azrael</h2>
                <div className="mt-3 lg:mt-5 xl:mt-6 flex items-center justify-between">
                  <p className="heading2">about</p>
                  <p className="heading2 text-primary !font-lora">$ 120</p>
                </div>
                <div className="mt-5 md:mt-6 lg:mt-7 xl:mt-10 flex flex-col gap-4 lg:gap-5 xl:gap-6 description">
                  {detailsData.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between capitalize border-b last:border-b-0 pb-3 lg:pb-4"
                    >
                      <p>{data.item}: </p>
                      <p>{data.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  className="pet-button mt-5 md:mt-6 lg:mt-8 xl:mt-12 w-full"
                  onClick={handleModalToggle}
                >
                  Contact to Owner
                </button>
              </div>

              {isModalOpen && (
                <div
                  onClick={handleBackdropClick}
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <div className="bg-white rounded-[40px] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[30%]">
                    <div className="flex justify-end items-center mt-5 mr-5">
                      <button onClick={handleModalToggle}>
                        <RxCrossCircled className="text-3xl text-gray-500 hover:text-gray-900" />
                      </button>
                    </div>
                    <div className="p-4 md:p-6 lg:p-8 xl:p-10 -mt-10">
                      <h3 className="heading3 text-center">
                        Owner Information
                      </h3>
                      <div className="mt-5 md:mt-6 lg:mt-7 xl:mt-10 flex flex-col gap-4 lg:gap-5 xl:gap-6 description">
                        {ownerData.map((data, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between capitalize border-b last:border-b-0 pb-3 lg:pb-4"
                          >
                            <p>{data.item}: </p>
                            <p>{data.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24">
            <h2 className="heading5">Description</h2>
            <div className="mt-7 md:mt-8 lg:mt-10 xl:mt-12 border rounded-[20px]">
              <p className="description p-3 md:p-5 lg:p-8 xl:p-10">
                Azrael is more than just a dog; he is an irreplaceable member of
                our family and a true companion. With his striking presence and
                spirited energy, he commands attention wherever he goes. His
                playful nature and boundless enthusiasm fill our home with joy
                and laughter, turning even the simplest activities into
                cherished memories. Azrael’s loyalty is unwavering; he stands by
                my side through thick and thin, offering comfort and
                companionship in every moment. Whether we’re enjoying long walks
                in the park, embarking on adventures in the great outdoors, or
                simply relaxing at home, his affectionate nature and warm
                demeanor remind us of the deep bond we share. With a heart full
                of love, Azrael not only enriches our lives but also inspires us
                to appreciate the beauty of each day. He embodies the joy and
                unconditional love that only a pet can provide, making every
                moment spent together a treasured experience.
              </p>
              <div className="description p-5 lg:p-8 xl:p-10 xl:-mt-5">
                <h2 className="heading5">Favorite Things</h2>
                <ul className="mt-3 md:mt-4 lg:mt-5 xl:mt-6 list-disc list-inside space-y-2">
                  {thinkData.map((data, index) => (
                    <li key={index} className="flex items-start gap-2 pt-2">
                      <span className="text-orange-500">●</span>
                      {data.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonNav />
    </div>
  );
};

export default AdoptionDetails;
