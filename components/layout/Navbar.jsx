"use client"; 
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle, IoMdHeartEmpty } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri'; // Import the arrow icon
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const links = [
    {
        name: 'Home', path: '/',
        submenu: [
            { name: 'Home 1', path: '/' },
            { name: 'Home 2', path: '/home2' },
            { name: 'Home 3', path: '/home3' },
        ]
    },
    { name: 'Pets', path: 'pets' },
    {
        name: 'Service',
        path: '/service'

    },
    { name: 'Shop', path: '/shop' },
    {
        name: 'Experts',
        path: '/experts'
    },
    {
        name: 'More',
        path: '/more',
        submenu: [
            { name: 'Career', path: '/v3/career' },
            { name: "Terms & Condition", path: '/v3/condition' },
            { name: "FAQ'S", path: '/v3/faq' },
            { name: "Pricing", path: '/v3/pricing' },
        ]
    },
];

const Navbar = ({ textColor }) => {
    const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const textColorClass = textColor === 'white' ? 'text-white' : 'text-black';

    const pathname = usePathname(); // Get the current path using usePathname
    const router = useRouter(); // Use router for navigation

    useEffect(() => {
        const activeItem = links.find(link =>
            link.path === pathname ||
            link?.submenu?.find(subLink => subLink.path === pathname)
        );
        if (activeItem) {
            setActiveLink(activeItem.name);
        }
    }, [pathname]);

    const handleLinkClick = (linkName, path) => {
        setActiveLink(linkName);
        setIsOpen(false);
        if (path) {
            router.push(path); // Navigate using router.push
        }
    };

    const toggleDropdown = (linkName) => {
        setOpenDropdown(prev => (prev === linkName ? '' : linkName));
    };

    const handleMouseEnter = (linkName) => {
        clearTimeout(dropdownTimeout);
        const timeout = setTimeout(() => {
            setOpenDropdown(linkName);
        }, 300);
        setDropdownTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(dropdownTimeout);
        setOpenDropdown('');
    };

    const renderLinks = () =>
        links.map((link, index) => (
            <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center">
                    <p
                        className={`font-noto cursor-pointer text-[18px] font-medium ${activeLink === link.name ? 'text-primary ' : {textColorClass}}`}
                        onClick={() => !link.submenu && handleLinkClick(link.name, link.path)}
                    >
                        {link.name}
                    </p>
                    {link.submenu && (
                        <button onClick={() => toggleDropdown(link.name)}>
                            <RiArrowDropDownLine
                                className={`${textColorClass} text-3xl ml-1 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                    )}
                </div>

                {/* Hover-based dropdown for large screens */}
                {link.submenu && openDropdown === link.name && (
                    <div
                        className="absolute hidden lg:block left-0 whitespace-pre pt-3 bg-white text-black rounded-lg"
                        onMouseEnter={() => setOpenDropdown(link.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {link.submenu.map((subLink, subIndex) => (
                            <Link href={subLink.path} key={subIndex}>
                                <p
                                    className={`px-4 hover:bg-gray-200 cursor-pointer ${pathname === subLink.path ? 'bg-gray-300' : ''}`}
                                    onClick={() => handleLinkClick(subLink.name, subLink.path)}
                                >
                                    {subLink.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Click-based dropdown for mobile screens */}
                {link.submenu && openDropdown === link.name && isOpen && (
                    <div className="lg:hidden absolute left-4 bg-white text-black rounded-lg z-50">
                        {link.submenu.map((subLink, subIndex) => (
                            <Link href={subLink.path} key={subIndex}>
                                <p
                                    className={`px-4 py-2 hover:bg-gray-200 ${pathname === subLink.path ? 'bg-gray-300' : ''}`}
                                    onClick={() => handleLinkClick(subLink.name, subLink.path)}
                                >
                                    {subLink.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        ));

    return (
        <nav className="w-full h-fit relative z-50 py-4">
            <div className="max-w-[1320px] px-2 md:px-0 mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className='md:w-[160px] md:h-[35px] w-[100px] h-[28px]'>
                        <Image
                            src="/logo.svg"
                            alt="logoImage"
                            width={160}
                            height={43}
                        />
                    </div>
                </Link>

                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 ml-8">
                    <button className={`text-[#FFF] text-lg bg-[#E65F33] px-5 py-3 sm:px-8 sm:py-4 rounded-full`}>
                        Become A Seller
                    </button>
                </div>

                <div className="lg:hidden flex flex-col justify-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#fff] focus:outline-none absolute right-4"
                    >
                        {isOpen ? (
                            <IoMdCloseCircle className="text-3xl" />
                        ) : (
                            <GiHamburgerMenu className="text-3xl" />
                        )}
                    </button>
                </div>

                <div className={`hidden lg:flex items-center text-[18px] font-medium ${textColorClass} space-x-10 `}>
                    {renderLinks()}
                </div>

                <div className="hidden lg:flex relative  justify-center lg:justify-end">
                    <div className='flex space-x-6 items-center mr-16'>
                        <IoMdHeartEmpty className={`text-2xl ${textColorClass}`}/>
                        <MdOutlineShoppingCart className= {`text-2xl ${textColorClass}`} />
                        <FaUserLarge className={`text-2xl ${textColorClass}`} />
                    </div>
                    <button className={` text-[#fff] text-lg bg-[#E65F33] px-5 py-3 sm:px-10 sm:py-[22px] rounded-full`}>
                        Become A Seller
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className={`lg:hidden agency rounded absolute top-16 right-0 w-1/3 z-50 flex flex-col text-[18px] font-medium px-4`}>
                    {renderLinks()}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
