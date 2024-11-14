"use client";
import React, { useState, useEffect } from "react";
import BasicHeader from "../Common/BasicHeader";
import Image from "next/image";
import CommonNav from "../Common/CommonNav";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PetCard from "../Common/PetCard";
import { Pagination } from "antd";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Adoption = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const petData = [
    {
      _id: "1",
      Name: "Bella",
      image: "/InnerPage/dog.svg",
      Category: "Mixed Breed",
      Gender: "Female",
      Location: "California, USA",
      Pet: "Dog",
      Size: "Small",
    },
    {
      _id: "2",
      Name: "Max",
      image: "/InnerPage/dog.svg",
      Category: "Golden Retriever",
      Gender: "Male",
      Location: "Texas, USA",
      Pet: "Dog",
      Size: "Large",
    },
    {
      _id: "3",
      Name: "Luna",
      image: "/InnerPage/dog.svg",
      Category: "Siamese Cat",
      Gender: "Female",
      Location: "Florida, USA",
      Pet: "Cat",
      Size: "Small",
    },
    {
      _id: "4",
      Name: "Charlie",
      image: "/InnerPage/dog.svg",
      Category: "Beagle",
      Gender: "Male",
      Location: "New York",
      Pet: "Dog",
      Size: "Small",
    },
    {
      _id: "5",
      Name: "Lucy",
      image: "/InnerPage/dog.svg",
      Category: "Mixed Breed",
      Gender: "Female",
      Location: "Illinois, USA",
      Pet: "Dog",
      Size: "Medium",
    },
    {
      _id: "6",
      Name: "Rocky",
      image: "/InnerPage/dog.svg",
      Category: "Bulldog",
      Gender: "Male",
      Location: "Ohio, USA",
      Pet: "Dog",
      Size: "Large",
    },
    {
      _id: "7",
      Name: "Daisy",
      image: "/InnerPage/dog.svg",
      Category: "Poodle",
      Gender: "Female",
      Location: "Georgia",
      Pet: "Dog",
      Size: "Small",
    },
    {
      _id: "8",
      Name: "Milo",
      image: "/InnerPage/dog.svg",
      Category: "German Shepherd",
      Gender: "Male",
      Location: "Michigan, USA",
      Pet: "Dog",
      Size: "Large",
    },
    {
      _id: "9",
      Name: "Lola",
      image: "/InnerPage/dog.svg",
      Category: "Persian Cat",
      Gender: "Female",
      Location: "Virginia, USA",
      Pet: "Cat",
      Size: "Small",
    },
    {
      _id: "10",
      Name: "Buddy",
      image: "/InnerPage/dog.svg",
      Category: "Labrador Retriever",
      Gender: "Male",
      Location: "North Carolina, USA",
      Pet: "Dog",
      Size: "Large",
    },
    {
      _id: "11",
      Name: "Coco",
      image: "/InnerPage/dog.svg",
      Category: "Mixed Breed",
      Gender: "Female",
      Location: "Pennsylvania, USA",
      Pet: "Dog",
      Size: "Medium",
    },
    {
      _id: "12",
      Name: "Bailey",
      image: "/InnerPage/dog.svg",
      Category: "Parrot",
      Gender: "Male",
      Location: "Arizona, USA",
      Pet: "Other",
      Size: "Small",
    },
    {
      _id: "13",
      Name: "Molly",
      image: "/InnerPage/dog.svg",
      Category: "Bengal Cat",
      Gender: "Female",
      Location: "Nevada, USA",
      Pet: "Cat",
      Size: "Medium",
    },
    {
      _id: "14",
      Name: "Oscar",
      image: "/InnerPage/dog.svg",
      Category: "Chihuahua",
      Gender: "Male",
      Location: "New Mexico, USA",
      Pet: "Dog",
      Size: "Small",
    },
    {
      _id: "15",
      Name: "Maggie",
      image: "/InnerPage/dog.svg",
      Category: "Cocker Spaniel",
      Gender: "Female",
      Location: "Tennessee, USA",
      Pet: "Dog",
      Size: "Medium",
    },
    {
      _id: "16",
      Name: "Simba",
      image: "/InnerPage/dog.svg",
      Category: "Sphynx Cat",
      Gender: "Male",
      Location: "Colorado, USA",
      Pet: "Cat",
      Size: "Medium",
    },
  ];

  const [filteredPets, setFilteredPets] = useState(petData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBreed, setSelectedBreed] = useState("All Breed");
  const [selectedGender, setSelectedGender] = useState("All Gender");
  const [selectedSize, setSelectedSize] = useState("All Size");
  const [location, setLocation] = useState("");

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  // Filter pets when any filter state changes
  useEffect(() => {
    const filtered = petData.filter((pet) => {
      const matchesCategory =
        selectedCategory === "All" || pet.Pet === selectedCategory;
      const matchesBreed =
        selectedBreed === "All Breed" || pet.Category === selectedBreed;
      const matchesGender =
        selectedGender === "All Gender" || pet.Gender === selectedGender;
      const matchesSize =
        selectedSize === "All Size" || pet.Size === selectedSize;
      const matchesLocation =
        location === "" || pet.Location.includes(location);

      return (
        matchesCategory &&
        matchesBreed &&
        matchesGender &&
        matchesSize &&
        matchesLocation
      );
    });
    setFilteredPets(filtered);
  }, [selectedCategory, selectedBreed, selectedGender, selectedSize, location]);

  const paginatedProducts = filteredPets.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const petCategory = ["All", "Dog", "Cat", "Other"];
  const breed = [
    "All Breed",
    "Mixed Breed",
    "Golden Retriever",
    "Siamese Cat",
    "Beagle",
    "Bulldog",
  ];
  const petGender = ["All Gender", "Male", "Female"];
  const petSize = ["All Size", "Small", "Medium", "Large"];
  return (
    <div className="mt-1">
      <div className="pb-20 lg:pb-28 xl:pb-32">
        <BasicHeader heading="adoption" />
        <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 xl:gap-10">
            <div>
              <h1 className="heading1">Your New Best Friend Awaits</h1>
              <p className="description mt-3 md:mt-4 lg:mt-5 xl:mt-5">
                Find a loving companion with our trusted pet adoption program.
                We're here to make your journey smooth and joyful. Discover your
                forever friend today!
              </p>
              <div className="mt-5 md:mt-6 lg:mt-8 xl:mt-10 flex items-center gap-3 lg:gap-4 xl:gap-8">
                {petCategory.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`heading4 ${
                      selectedCategory === category
                        ? "text-primary underline"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 md:mt-8 lg:mt-11 xl:mt-14">
                <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 xl:gap-6 justify-between">
                  <div className="relative w-full">
                    <p className="heading4 !font-normal">Select Category: </p>
                    <button
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className="mt-2 lg:mt-3 xl:mt-5 heading4 !font-normal border w-full rounded-[10px] px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-6 flex justify-between items-center"
                    >
                      {selectedBreed}
                      {isCategoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    {isCategoryOpen && (
                      <div className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
                        {breed.map((breed) => (
                          <button
                            key={breed}
                            onClick={() => {
                              setSelectedBreed(breed);
                              setIsCategoryOpen(false);
                            }}
                            className="description block px-4 py-2 text-left w-full hover:bg-gray-100"
                          >
                            {breed}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className=" relative w-full">
                    <p className="heading4 !font-normal">Select Gender: </p>
                    <button
                      onClick={() => setIsGenderOpen(!isGenderOpen)}
                      className="mt-2 lg:mt-3 xl:mt-5 heading4 !font-normal border w-full rounded-[10px] px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-6 flex justify-between items-center"
                    >
                      {selectedGender}
                      {isGenderOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isGenderOpen && (
                      <div className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
                        {petGender.map((gender) => (
                          <button
                            key={gender}
                            onClick={() => {
                              setSelectedGender(gender);
                              setIsGenderOpen(false);
                            }}
                            className="description block px-4 py-2 text-left w-full hover:bg-gray-100"
                          >
                            {gender}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 lg:mt-4 xl:mt-6 flex flex-col sm:flex-row items-center gap-3 lg:gap-4 xl:gap-6 justify-between">
                  <div className=" relative w-full">
                    <p className="heading4 !font-normal">Select Size: </p>
                    <button
                      onClick={() => setIsSizeOpen(!isSizeOpen)}
                      className="mt-2 lg:mt-3 xl:mt-5 heading4 !font-normal border w-full rounded-[10px] px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-6 flex justify-between items-center"
                    >
                      {selectedSize}
                      {isSizeOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isSizeOpen && (
                      <div className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
                        {petSize.map((size) => (
                          <button
                            key={size}
                            onClick={() => {
                              setSelectedSize(size);
                              setIsSizeOpen(false);
                            }}
                            className="description block px-4 py-2 text-left w-full hover:bg-gray-100"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <p className="heading4 !font-normal">Search Location: </p>
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-2 lg:mt-3 xl:mt-5 heading4 !font-normal border w-full rounded-[10px] px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="max-w-[648px] max-h-[712px] rounded-[40px] w-full md:w-1/2 xl:w-fit"
              src="/InnerPage/adoption.svg"
              width={648}
              height={712}
              alt="Adoption Image"
            />
          </div>

          {/* Adoptable pet section */}
          <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24">
            <h2 className="heading5">adoptable pet</h2>
            <div className="mt-8 lg:mt-10 xl:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
              {paginatedProducts.map((data, index) => (
                <PetCard key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredPets.length}
            onChange={setCurrentPage}
            itemRender={(page, type) => {
              if (type === "prev") {
                return <FaArrowLeftLong className="text-xl" />;
              }
              if (type === "next") {
                return <FaArrowRightLong className="text-xl" />;
              }
              return <a>{page}</a>;
            }}
          />
        </div>
      </div>
      <CommonNav />
    </div>
  );
};

export default Adoption;
