"use client";
import React from 'react';
import HeadingMiddle from '../Common/HeadingMiddle';
import Image from 'next/image';

const LookingFor = ({bgColor}) => {
    const lookingForData = [
        {
            _id: '1',
            image: '/home2/LookingFor/1.png',
            heading: 'Find Puppies',
            description: 'Find responsibly bred purebred Bully puppies.'
        },
        {
            _id: '2',
            image: '/home2/LookingFor/1.png',
            heading: 'Dog Training',
            description: 'Professional training  a well-behaved pet.'
        },
        {
            _id: '3',
            image: '/home2/LookingFor/1.png',
            heading: 'Grooming ',
            description: 'Keep your pet looking and feeling with our grooming.'
        },
        {
            _id: '4',
            image: '/home2/LookingFor/1.png',
            heading: 'Dog Boarding',
            description: 'Safe and comfortable for your beloved pet.'
        }
    ];
    return (
        <div className={`bg-[${bgColor}]  py-14`}>
            <div className='max-w-[1320px] mx-auto'>
                <div className='max-w-[680px] mx-auto'>
                    <HeadingMiddle
                        heading='What Are You Looking For?'
                        description='We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.'
                    />
                </div>

                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {lookingForData.map((item) => (
                        <div key={item._id} className='text-center group'>
                            <div className="mx-auto mb-4">
                                <Image
                                    className='rounded-[20px]  w-full lg:max-w-[312px]'
                                    width={312}
                                    height={312}
                                    alt='image'
                                    src={item.image}
                                />
                            </div>
                            <div className='max-w-[230px] mx-auto'>
                                <h1 className='text-textMain group-hover:text-primary transition-all duration-300 font-bold text-[28px] font-laila mb-4'>{item.heading}</h1>
                                <p className='text-[16px] text-textBody font-lora'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LookingFor;