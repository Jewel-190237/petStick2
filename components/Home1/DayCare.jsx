"use client";
import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { MdPets } from "react-icons/md";
import { FaDog, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

const { Option } = Select;

const DayCare = ({ bg }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [petType, setPetType] = useState(null);
  const [guestCount, setGuestCount] = useState(null);

  const handlePetTypeChange = (value) => {
    setPetType(value);
    console.log(`Selected pet type: ${value}`);
  };

  const handleGuestCountChange = (value) => {
    setGuestCount(value);
    console.log(`Selected quantity: ${value}`);
  };

  const handleCheckInChange = (date, dateString) => {
    setCheckInDate(dateString);
    if (checkOutDate && date && date.isAfter(checkOutDate)) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutChange = (date, dateString) => {
    if (checkInDate && date && date.isBefore(checkInDate)) {
      console.error("Check-out date cannot be before check-in date");
    } else {
      setCheckOutDate(dateString);
    }
  };

  const handleSubmit = () => {
    if (!checkInDate || !checkOutDate || !petType || !guestCount) {
      console.error("All fields are required!");
      return;
    }

    console.log({
      checkInDate,
      checkOutDate,
      petType,
      guestCount,
    });
  };

  return (
    <div className="relative w-full pet-container mt-20 rounded-[20px]">
      <section
        className="relative w-full h-full bg-cover bg-center rounded-[20px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
        <div className="flex items-center flex-col md:flex-row md:gap-6 lg:gap-8 xl:gap-10 relative z-10">
          <div className="flex-1 py-10 md:py-14 lg:py-16 xl:py-20">
            <div className="bg-white rounded-[20px] ml-1 md:ml-4 lg:ml-8 xl:ml-10 py-8 md:py-10 lg:py-12 xl:py-14">
              <h3 className="heading3 text-center">Online Reservation</h3>
              <div className="bg-[#D9D9D9] h-[1px] w-full mt-4 lg:mt-6"></div>
              <div className="px-3 md:px-4 lg:px-6 flex flex-col sm:flex-row items-center gap-5 lg:gap-8 xl:gap-10 mt-6 lg:mt-8 xl:mt-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 online-heading">
                    <MdPets />
                    <h4>Pet Types</h4>
                  </div>
                  <Select
                    style={{ borderColor: "#D9D9D9" }}
                    className="w-full mt-4"
                    placeholder="Select Pet Type"
                    onChange={handlePetTypeChange}
                    required
                  >
                    <Option value="dog">Dog</Option>
                    <Option value="cat">Cat</Option>
                    <Option value="bird">Bird</Option>
                    <Option value="reptile">Reptile</Option>
                  </Select>
                </div>
                <div className="flex-1 mt-5 sm:mt-0">
                  <div className="flex items-center gap-2 online-heading">
                    <FaDog />
                    <h4>Guests</h4>
                  </div>
                  <Select
                    style={{ borderColor: "#D9D9D9" }}
                    className="w-full mt-4"
                    placeholder="Select Quantity"
                    onChange={handleGuestCountChange}
                    required
                  >
                    <Option value="1">1 pet</Option>
                    <Option value="2">2 pets</Option>
                    <Option value="3">3 pets</Option>
                    <Option value="4">4 pets</Option>
                  </Select>
                </div>
              </div>

              <div className="px-3 md:px-4 lg:px-6 flex flex-col sm:flex-row items-center gap-5 lg:gap-8 xl:gap-10 mt-6 lg:mt-8 xl:mt-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 online-heading">
                    <FaCalendarAlt />
                    <h4>Check In</h4>
                  </div>
                  <DatePicker
                    style={{ borderColor: "#D9D9D9" }}
                    className="w-full mt-4"
                    placeholder="DD-MM-YY"
                    format="DD-MM-YY"
                    onChange={handleCheckInChange}
                    disabledDate={(current) =>
                      current && current < moment().endOf("day")
                    }
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 online-heading">
                    <FaCalendarAlt />
                    <h4>Check Out</h4>
                  </div>
                  <DatePicker
                    style={{ borderColor: "#D9D9D9" }}
                    className="w-full mt-4"
                    placeholder="DD-MM-YY"
                    format="DD-MM-YY"
                    onChange={handleCheckOutChange}
                    disabled={!checkInDate}
                    disabledDate={(current) =>
                      current &&
                      (current < moment(checkInDate, "DD-MM-YY") ||
                        current < moment().endOf("day"))
                    }
                  />
                </div>
              </div>
              <button
                className="check-button mt-7 md:mt-8 lg:mt-10 xl:mt-12 mx-12 w-[60%] sm:w-[70%] md:w-[85%]"
                onClick={handleSubmit}
              >
                Check Availability
              </button>
            </div>
          </div>
          <div className="flex-1 pb-8 md:pb-0">
            <h1 className="heading1 text-white !text-left">Pet’s Day Care</h1>
            <p className="description text-white mt-4 md:mt-5 lg:mt-6">
              Providing a safe, fun, and nurturing environment for your beloved
              pets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayCare;
