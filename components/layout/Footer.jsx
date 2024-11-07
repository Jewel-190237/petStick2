"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {

    const icons = [{ icon: <GrFacebookOption />, link: '' }, { icon: <GrTwitter />, link: '' }, { icon: <GrInstagram />, link: '' }, { icon: <SiWhatsapp />, link: '' }];

    const footerLinks = [
        { heading: 'Quick Links', items: [{ item: 'Home', link: '/home' }, { item: 'About', link: '/about' }, { item: 'Shop', link: '/shop' }, { item: 'Service', link: '/service' }, { item: 'Blog', link: '/blog' }] },
        { heading: 'Support', items: [{ item: 'Contact Us', link: '/contact' }, { item: "FAQ's", link: '/faq' }, { item: 'Privacy Policy', link: '/privacy-policy' }, { item: 'Terms', link: '/terms' }, { item: 'Condition', link: '/condition' }] },
        { heading: 'Working Time', items: [{ item: 'Mon - Fri: 9.00am - 5.00pm' }, { item: "Saturday: 10.00am - 6.00pm" }, { item: 'Sunday - closed' }] }
    ];

    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);  
            },
            {
                threshold: 0.5,  
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div ref={footerRef} className='bg-[#FFE6E4] mt-20 relative'>
            <div className='pet-container py-12 md:py-16 lg:py-20 xl:py-24'>
                <div className='flex flex-col md:flex-row md:gap-10 lg:gap-24 xl:gap-32 ml-16'>
                    <div className='w-full md:w-[25%]'>
                        <Image src='/logo.svg' width={118} height={43} alt='Logo' />
                        <p className='description text-[#2B2B2B] mt-8 md:mt-10 xl:mt-12'>
                            At petstick, we offer quality products and services to keep your pet healthy and happy, with expert care from our dedicated team.
                        </p>
                        <div className="flex items-center gap-5 lg:gap-6 mt-8 md:mt-10 xl:mt-12">
                            {icons.map((data, index) => (
                                <Link href={data.link} className="text-[14px] lg:text-xl p-2 lg:p-3  border border-[#2B2B2B] hover:border-primary text-[#2B2B2B] hover:text-primary rounded-full transition-all duration-300" key={index}>{data.icon}</Link>
                            ))}
                        </div>
                    </div>

                    <div className='w-full md:w-[75%] mt-8 md:mt-0'>
                        <h2 className="heading2 text-[#2B2B2B]">There’s only one thing we care about, and that’s the happiness and well-being of your pets.</h2>
                        <div className="flex flex-col sm:flex-row justify-between mt-7 md:mt-8 lg:mt-10">
                            {footerLinks.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="mt-8 md:mt-0 w-full sm:w-[30%]">
                                    <h3 className="text-[#2B2B2B] font-lora text-[18px] md:text-xl xl:text-2xl font-medium">{section.heading}</h3>
                                    {section.items.map((linkItem, itemIndex) => (
                                        <div key={itemIndex} className={`flex items-center ${itemIndex === 0 ? 'mt-4 md:mt-6' : 'mt-3'}`} >
                                            {sectionIndex === 2 ? (
                                                <span className="w-2 h-2 bg-[#2B2B2B] rounded-full mr-2"></span>
                                            ) : null}

                                            {sectionIndex < 2 ? (
                                                <Link href={linkItem.link} className="description hover:text-primary transition duration-300">
                                                    {linkItem.item}
                                                </Link>
                                            ) : (
                                                <p className="description">{linkItem.item}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`hidden xl:flex absolute bottom-0 -ml-[295px] ${isVisible ? 'animate-slideInRight' : 'hidden'}`}>
                    <Image
                        className="max-h-[300px] max-w-[348px]"
                        src="/footer/footerDog.svg"
                        width={348}
                        height={300}
                        alt="Dog Image"
                    />
                </div>
            </div>
        </div>
    );
};
export default Footer;