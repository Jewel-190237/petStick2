'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard3 = ({ image, socialData, name, title }) => {
    return (
        <div className='p-4 md:p-5 lg:p-6 shadow-lg border rounded-[20px] group transition-transform duration-300 '>
          
            <div className='relative w-full rounded-[20px] '>
                <Image 
                    className='w-full transition-transform duration-300 overflow-hidden' 
                    src={image} 
                    width={264} 
                    height={288} 
                    alt='Team Image' 
                />
                
               
                <div className='absolute rounded-[20px] inset-0 bg-[#00A9A5] bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center'>
               
                    <div className='flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {socialData.map((data, index) => (
                            <Link href={data.link} key={index} className='team-social-styles'>
                                {data.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

           
            <h3 className='heading2 mt-4 md:mt-5 lg:mt-6 group-hover:text-primary transition-colors duration-300'>{name}</h3>
            <p className='description capitalize'>{title}</p>
        </div>
    );
};

export default TeamCard3;