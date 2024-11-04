import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard3 = ({ image, socialData, name, title }) => {
    return (
        <div className='p-4 md:p-5 lg:p-6 bg-white rounded-[20px] group transition-transform duration-300 hover:scale-105'>
            <div className='relative w-full rounded-[20px] overflow-hidden'>
                <Image 
                    className='w-full transition-transform duration-300 group-hover:scale-110' 
                    src={image} 
                    width={264} 
                    height={288} 
                    alt='Team Image' 
                />
                
                {/* Hover Overlay with Centered Social Icons */}
                <div className='absolute inset-0 bg-[#00A9A5] bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center'>
                    {/* Social Icons */}
                    <div className='flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {socialData.map((data, index) => (
                            <Link href={data.link} key={index} className='team-social-styles'>
                                {data.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Name and Title */}
            <h3 className='heading2 mt-4 md:mt-5 lg:mt-6 group-hover:text-primary transition-colors duration-300'>{name}</h3>
            <p className='description capitalize'>{title}</p>
        </div>
    );
};

export default TeamCard3;
