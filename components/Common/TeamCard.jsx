'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard = ({ image, socialData, name, title }) => {
    return (
        <div className='overflow-hidden rounded-[20px] transition-all duration-300'>
            <div className='hover:scale-105 h-auto bg-white transition-all duration-300 rounded-[20px]'>
                <div className='p-4 md:p-5 lg:p-6 group'>
                    <Image className='w-full' src={image} width={264} height={288} alt='Team Image' />

                    <div className='flex flex-col justify-end items-end p-5 gap-4 -mt-48 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        {socialData.map((data, index) => (
                            <div key={index} className='team-social-styles'>
                                <Link href={data.link}>{data.icon}</Link>
                            </div>
                        ))}
                    </div>

                    <h3 className='heading2 mt-4 md:mt-5 lg:mt-6 group-hover:text-primary transition-all duration-300'>
                        {name}
                    </h3>
                    <p className='description capitalize'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
