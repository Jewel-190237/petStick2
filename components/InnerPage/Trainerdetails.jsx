"use client";
import React, { useState } from "react";
import BasicHeader from "../Common/BasicHeader";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import CommonNav from "../Common/CommonNav";

const Trainerdetails = () => {
  const detailsData = [
    {
      title: "Specialties",
      details: [
        { item: "Basic Obedience & Advanced Commands" },
        { item: "Socialization & Behavior Modification" },
        { item: "Puppy Training & Housebreaking" },
        { item: "Positive Reinforcement Techniques" },
      ],
    },
    {
      title: "Certifications:",
      details: [
        { item: "Certified Professional Dog Trainer (CPDT-KA)" },
        { item: "Animal Behavior College Certification" },
        { item: "Pet First Aid and CPR" },
      ],
    },
  ];
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

  const awardData = [
    {
      year: "2022 - 2023",
      awardName: "best Trainer of the Year",
      image: "/Innerpage/award.svg",
    },
    {
      year: "2021 - 2022",
      awardName: "Positive Training Pioneer Award",
      image: "/Innerpage/award1.jpg",
    },
    {
      year: "2020 - 2021",
      awardName: "Animal Rescue Collaboration Award",
      image: "/Innerpage/award2.jpg",
    },
  ];
  const markData = [
    {
      title: "Customized Training Programs",
      description:
        "Tailors sessions to each pet’s unique needs, ensuring effective and compassionate training",
    },
    {
      title: "Behavioral Expertise",
      description:
        "Skilled in resolving complex issues like aggression, anxiety, and socialization challenges",
    },
    {
      title: "Positive Reinforcement Focus",
      description:
        "Employs scientifically-backed, humane methods for lasting behavior change",
    },
    {
      title: "Owner Education",
      description:
        "Guides owners in maintaining training progress, fostering trust and communication with their pets",
    },
    {
      title: "Commitment to Animal Welfare",
      description:
        "Collaborates with rescues and shelters, helping rehabilitate and rehome animals",
    },
    {
      title: "Proven Success Recor",
      description:
        "Consistently receives positive client feedback and high success rates with training outcomes.",
    },
  ];
  const [selectedAward, setSelectedAward] = useState(awardData[0]);
  return (
    <div>
      <BasicHeader heading="expert by trainer" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24 ">
        <h4 className="heading1">john lavender</h4>
        <div className="relative mt-5 md:mt-7 lg:mt-10 xl:mt-12 flex flex-col items-center md:flex-row gap-3 lg:gap-4 xl:gap-8 py-5 lg:py-0 box-shadow">
          <Image
            className="rounded-[40px] w-full md:w-1/2 xl:w-fit"
            src="/InnerPage/expert.svg"
            width={648}
            height={656}
            alt="Trainer Image"
          />

          <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 mt-5 lg:mt-0 ml-3 md:ml-0">
            <p className="description capitalize">pet training specialist</p>
            <h3 className="heading3">john lavender</h3>
            <p className="description">
              John Levender is a professional pet trainer with expertise in
              obedience training, behavior correction, and positive
              reinforcement techniques.
            </p>

            {/* Mapping over detailsData */}
            {detailsData.map((section, index) => (
              <div key={index}>
                <h4 className="heading4 !font-semibold text-primary">
                  {section.title}
                </h4>
                <ul className="list-none pl-0 mt-2 lg:mt-3 xl:mt-4">
                  {section.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-3 description"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{" "}
                      {/* Circle */}
                      <span>{detail.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex items-center gap-4 mt-3">
              {socialData.map((data, index) => (
                <Link
                  key={index}
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team2-social-styles rounded-full border"
                >
                  {data.icon}
                </Link>
              ))}
            </div>
            <div className="absolute -bottom-5 -right-8 hidden lg:flex">
              <Image
                className="rounded-[40px]"
                src="/InnerPage/shape.svg"
                width={200}
                height={200}
                alt="Trainer Image"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-12">
          <h3 className="heading5">professional information</h3>
          <p className="description mt-3 md:mt-4 lg:mt-5 xl:mt-5">
            John Levender is an accomplished pet trainer with expertise in
            behavior modification, obedience, and socialization. Dedicated to
            strengthening the relationship between pets and their owners,
            employs scientifically-backed, positive reinforcement techniques to
            create a safe, effective training environment. Known for their
            professionalism and patience, John Levender addresses complex
            behavioral challenges and promotes well-rounded development for each
            pet. Known for their professionalism, patience, and commitment to
            achieving lasting behavioral improvements, John Levender has a
            proven track record of addressing complex behavioral
            challenges—ranging from aggression and anxiety to socialization and
            house manners. Their training philosophy emphasizes clear
            communication, consistency, and encouragement, empowering both pets
            and their owners to build trust and mutual understanding. Through
            targeted training programs, John Levender promotes the development
            of well-rounded, confident and well behaved pets who thrive in a
            family setting, enhancing the quality of life for both the animals
            and their owners.
          </p>
        </div>
        {/* Award section */}
        <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-12 flex flex-col md:flex-row gap-5 lg:gap-16 xl:gap-28">
          <div>
            <h3 className="heading5">Award & Honors</h3>
            <p className="description mt-3 md:mt-4 lg:mt-5 xl:mt-5">
              Awards and honors for distinguished pet trainers include
              Excellence in Training, Animal Welfare Service, Behavioral
              Specialist Distinction, and Trainer of the Year.
            </p>
            <div className="mt-5 md:mt-6 lg:mt-8 xl:mt-10">
              {awardData.map((data, index) => (
                <div
                  onClick={() => setSelectedAward(data)}
                  key={index}
                  className="mb-3 md:mb-4 lg:mb-5 xl:mb-6 last:mb-0 w-full mx-0 cursor-pointer"
                >
                  <p
                    className={`rounded-[40px] border heading4 px-2 md:px-3 lg:px-4 xl:px-10 py-1 md:py-2 lg:py-3 xl:py-[14px] transition-all duration-300 ${
                      selectedAward.awardName === data.awardName
                        ? "bg-[#4B3C34] text-white"
                        : "hover:bg-[#4B3C34] hover:text-white"
                    }`}
                  >
                    <span className="text-primary">{data.year}: </span>
                    {data.awardName}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {selectedAward && (
            <Image
              className="rounded-[40px] w-full md:w-1/2 xl:w-fit max-w-[536px] h-[393px]"
              src={selectedAward.image}
              width={536}
              height={393}
              alt="Award Image"
            />
          )}
        </div>
        <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-12">
          <h3 className="heading5">Markable points of our work</h3>
          <p className="description mt-3 md:mt-4 lg:mt-5 xl:mt-5">
            These key aspects of John Levender's work reflect his unwavering
            dedication to improving the well-being of pets while strengthening
            the bond between them and their owners. With a commitment to
            tailored, compassionate training, John has become renowned for his
            ability to address complex behavioral issues, ranging from
            aggression to anxiety, using scientifically-backed, positive
            reinforcement techniques.
          </p>
          <div className="mt-3 md:mt-4 lg:mt-5 xl:mt-5 w-full lg:w-1/2">
            {markData.map((data, index) => (
              <div key={index}>
                <ul className="list-none pl-0 mt-2 lg:mt-3 xl:mt-4">
                  <li key={index} className="flex space-x-3">
                    <span className="w-2 h-1.5 bg-primary rounded-full mt-2"></span>{" "}
                    <span className="heading4">
                      {data.title}:{" "}
                      <span className="description"> {data.description}</span>{" "}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <CommonNav />
      </div>
    </div>
  );
};

export default Trainerdetails;
