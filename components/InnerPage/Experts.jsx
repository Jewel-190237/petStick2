import React from "react";
import BasicHeader from "../Common/BasicHeader";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import TeamCard2 from "../Common/TeamCard2";

const Experts = () => {
  const socialData = [
    {
      icon: <FaXTwitter size={20} />,
      link: "https://twitter.com/yourprofile",
    },
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
      _id: "1",
      image: "/home1/Team/teamImage.jpg",
      name: "Saifa Tazrin Rati",
      title: "Veterinarian",
      socialData,
    },
    {
      _id: "2",
      image: "/home1/Team/teamImage.jpg",
      name: "Rayhan Ul Islam",
      title: "Dog Groomer",
      socialData,
    },
    {
      _id: "3",
      image: "/home1/Team/teamImage.jpg",
      name: "Murubbi William",
      title: "Dog Trainer",
      socialData,
    },
    {
      _id: "4",
      image: "/home1/Team/teamImage.jpg",
      name: "Saifa Tazrin Rati",
      title: "Pet Nutritionist",
      socialData,
    },
    {
      _id: "5",
      image: "/home1/Team/teamImage.jpg",
      name: "Murubbi William",
      title: "Pet Psychologist",
      socialData,
    },
    {
      _id: "6",
      image: "/home1/Team/teamImage.jpg",
      name: "Rayhan Ul Islam",
      title: "Breeding Expert",
      socialData,
    },
    {
      _id: "7",
      image: "/home1/Team/teamImage.jpg",
      name: "Aisha Khan",
      title: "Animal Care Specialist",
      socialData,
    },
    {
      _id: "8",
      image: "/home1/Team/teamImage.jpg",
      name: "Jabir Hasan",
      title: "Pet Trainer",
      socialData,
    },
    {
      _id: "9",
      image: "/home1/Team/teamImage.jpg",
      name: "Fatima Begum",
      title: "Animal Welfare Officer",
      socialData,
    },
    {
      _id: "10",
      image: "/home1/Team/teamImage.jpg",
      name: "Zainab Rahman",
      title: "Pet Behavior Specialist",
      socialData,
    },
    {
      _id: "11",
      image: "/home1/Team/teamImage.jpg",
      name: "Hassan Ali",
      title: "Veterinary Assistant",
      socialData,
    },
    {
      _id: "12",
      image: "/home1/Team/teamImage.jpg",
      name: "Nabila Ahmed",
      title: "Veterinary Surgeon",
      socialData,
    },
    {
      _id: "13",
      image: "/home1/Team/teamImage.jpg",
      name: "Tariq Javed",
      title: "Animal Behavior Expert",
      socialData,
    },
    {
      _id: "14",
      image: "/home1/Team/teamImage.jpg",
      name: "Shahid Chowdhury",
      title: "Pet Sitter",
      socialData,
    },
    {
      _id: "15",
      image: "/home1/Team/teamImage.jpg",
      name: "Ruhul Amin",
      title: "Pet Grooming Expert",
      socialData,
    },
    {
      _id: "16",
      image: "/home1/Team/teamImage.jpg",
      name: "Nashit Zaman",
      title: "Animal Trainer",
      socialData,
    },
  ];

  return (
    <div>
      <BasicHeader heading="expert by trainer" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <h4 className="heading1">expert by trainer</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 6 mt-7 md:mt-8 lg:mt-10 xl:mt-10">
          {teamData.map((data, index) => (
            <TeamCard2
              key={index}
              _id={data._id}
              image={data.image}
              name={data.name}
              title={data.title}
              socialData={data.socialData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
