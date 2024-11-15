"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
  FaMoneyCheckAlt,
  FaSearch,
} from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdNotificationsActive } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import Chart from "../InnerPage/Chart";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  const sidebarRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/dashboard", label: "Overview", icon: RxDashboard },
    { to: "/", label: "Home", icon: FaHome },
    { to: "/dashboard/profile", label: "Profile", icon: FaUser },
    { to: "/dashboard/payment", label: "Payment", icon: FaMoneyCheckAlt },
  ];

  // Close menu if clicked outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Listen for clicks outside of sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="max-w-[1920px] mx-auto health-shadow m-5">
      <div className="flex">
        {/* Sidebar for small and medium devices */}
        <div
          ref={sidebarRef}
          className={`w-52 bg-primary rounded-xl p-4 ${
            isMenuOpen ? "block absolute top-0 left-0 z-50" : "hidden"
          } block lg:hidden`}
        >
          <ul className="mt-10">
            <h1 className="heading5 p-5 lg:p-6 xl:p-8">Petstick</h1>
            {navItems.map((item, index) => (
              <li key={index} className="p-1 uppercase">
                <Link href={item.to} passHref>
                  <div
                    className={`flex items-center space-x-2 p-1 hover:bg-primary hover:text-white rounded duration-300 ${
                      activeItem === item.label
                        ? "bg-primary text-white border"
                        : ""
                    }`}
                    onClick={() => setActiveItem(item.label)}
                  >
                    <item.icon className="text-xl" />
                    <span className="heading4 !font-semibold">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar for large and above devices */}
        <div className="hidden lg:block w-72 bg-white border-r">
          <h1 className="heading5 p-5">Petstick</h1>
          <ul className="p-4">
            {navItems.map((item, index) => (
              <li key={index} className="p-1 uppercase">
                <Link href={item.to} passHref>
                  <div
                    className={`flex items-center space-x-2 p-3 hover:bg-primary hover:text-white duration-300 rounded-xl ${
                      activeItem === item.label ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => setActiveItem(item.label)}
                  >
                    <item.icon className="text-xl" />
                    <span className="heading4 !font-semibold">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden fixed top-0 left-0 w-full bg-primary p-4 flex justify-between items-center z-50">
          <h1 className="heading5 text-white">Admin Dashboard</h1>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="w-full">
          <div className="flex items-center justify-between border gap-8 overflow-x-auto">
            <h1 className="heading5 p-5">dashboard</h1>
            <div className="flex items-center gap-4 lg:gap-5 mr-5">
              <div className=" md:w-48 lg:w-60 xl:w-80 flex items-center border bg-gray-100 rounded-xl p-2 description">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search here"
                  className="outline-none w-full bg-gray-100"
                />
              </div>
              <div className="rounded-xl bg-gray-100">
                <MdNotificationsActive className="p-2 text-4xl" />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-full max-w-[60px] h-[60px]"
                  src="/InnerPage/cat111.png"
                  width={60}
                  height={60}
                  alt="user image"
                />
                <div>
                  <p className="heading4 !font-semibold">Arabian king cat</p>
                  <p className="description mt-1">cat111@wegmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* other components */}
          <div className="bg-gray-100 pt-10 p-5 w-full">
            <h1 className="heading5">Overview</h1>
            <div className="mt-10 w-full lg:w-1/2 xl:w-[60%]">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
