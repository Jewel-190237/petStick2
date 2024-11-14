"use client";
import React, { useState } from "react";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import BasicHeader from "../Common/BasicHeader";
import ChechOutCard from "../Common/ChechOutCard"

const CheckOut = () => {
  const [selectedItem, setselectedItem] = useState({ item: "Stripe" });
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [issummaryOpen, setIssummaryOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    location: false,
    city: false,
    postalCode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    // If there are no errors, log the data
    if (Object.values(newErrors).every((error) => !error)) {
      console.log(formData, selectedItem);
    }
  };

  const paymentData = [
    { item: "Stripe" },
    { item: "PayPal" },
    { item: "Payoneer" },
    { item: "Card" },
  ];

  const checkoutData = [
    {
      image: "/InnerPage/catProduct.svg",
      productName: "impact whey protein",
      previousPrice: 53.87,
      curentPrice: 43.64,
      quantity: 2,
    },
    {
      image: "/InnerPage/catProduct.svg",
      productName: "impact whey protein",
      previousPrice: 53.87,
      curentPrice: 43.64,
      quantity: 2,
    },
  ];

  return (
    <section>
      <BasicHeader heading="check out" />
      <div className="pet-container mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <h4 className="heading1">Check Out</h4>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 flex flex-col md:flex-row gap-3 lg:gap-5 xl:gap-8">
          <div className="w-full md:w-[60%]">
            <div className="rounded-[20px]">
              <form className="description text-black" onSubmit={handleSubmit}>
                {/* First and Last Name */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                  <div className="w-full">
                    <label className="block heading4 !font-medium">
                      First Name :
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full p-3 border rounded-[8px] mt-2 lg:mt-3 "
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        Please Input Currect First Name
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="block heading4 !font-medium">
                      Last Name :
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        Please Input Currect Last Name
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Phone Number */}
                <div className="mb-4">
                  <label className="block heading4 !font-medium">Email :</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      Please Input Currect Email
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block heading4 !font-medium">
                    Phone Number :
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      Please Input Currect Phone Number
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className="block heading4 !font-medium">
                    Location :
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location:"
                    className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">
                      Please Input Currect City
                    </p>
                  )}
                </div>

                {/* City and Postal Code */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                  <div className="w-full">
                    <label className="block heading4 !font-medium">
                      Town / City :
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Town / City"
                      className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">
                        Please Input Currect City
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="block heading4 !font-medium">
                      Postal / Zip Code:
                    </label>
                    <input
                      type="number"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Postal Code"
                      className="w-full p-3 border mt-2 lg:mt-3 rounded-[8px]"
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm">
                        Please Input Currect Postal Code
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                  <h3 className="heading2">add a note to your order</h3>
                  <textarea
                    className="mt-3 lg:mt-4 xl:mt-5 w-full border p-3 lg:p-4 xl:p-5 rounded-[20px] h-[150px]"
                    placeholder="Write Something....."
                    name=""
                    id=""
                  />
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                  <h3 className="heading2">Payment Option</h3>
                  <div className="heading4 mt-5 md:mt-6 lg:mt-7 xl:mt-8">
                    {paymentData.map((data, index) => (
                      <div key={index} className="flex items-center ">
                        <input
                          type="radio"
                          name="petService"
                          id={`radio-${index}`}
                          checked={selectedItem.item === data.item}
                          onChange={() => setselectedItem(data)}
                          className="mr-1 custom-radio"
                        />
                        <label
                          htmlFor={`radio-${index}`}
                          className="cursor-pointer heading4 !font-semibold p-3"
                        >
                          {data.item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                  <button
                    type="submit"
                    className="pet-button !rounded-[20px] w-full"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <div className="border rounded-[20px] mt-5">
              <div className="border-b flex items-center justify-between p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-medium">
                <p>order summary</p>
                <button onClick={() => setIssummaryOpen(!issummaryOpen)}>
                  {issummaryOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
                </button>
              </div>
              {issummaryOpen &&
                checkoutData.map((data, index) => (
                  <div key={index} className="last:border-b-0">
                    <ChechOutCard data={data}/>
                  </div>
                ))}
              <div className="border-b flex items-center justify-between p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-medium">
                <p>Add coupon</p>
                <button onClick={() => setIsCouponOpen(!isCouponOpen)}>
                  {isCouponOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
                </button>
              </div>
              {isCouponOpen && (
                <div className="flex items-center justify-between p-3 md:p-4 lg:p-5 xl:p-6 border-b">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="border rounded-[10px] px-6 lg:px-8 py-3 lg:py-4 description w-full"
                  />
                  <button className="pet-button ml-4">Apply</button>
                </div>
              )}
              <div className="border-b flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6 heading4 !font-normal">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$240.57</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p>$0.00</p>
                </div>
              </div>
              <div className="flex justify-between p-3 md:p-4 lg:p-5 xl:p-6 heading2 !font-semibold text-primary">
                <p>Total</p>
                <p>$240.57</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
