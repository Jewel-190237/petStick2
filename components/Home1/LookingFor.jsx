'use client';
import React from 'react';
import HeadingLeft from '../Common/HeadingLeft';
import Image from 'next/image';

const lookingForData = [
    {
        _id: '1',
        image: '/home1/looking/1.svg',
        heading: 'Find Puppies',
        description: 'Find responsibly bred purebred Bully puppies.'
    },
    {
        _id: '2',
        image: '/home1/looking/2.svg',
        heading: 'Dog Training',
        description: 'Professional training  a well-behaved pet.'
    },
    {
        _id: '3',
        image: '/home1/looking/1.svg',
        heading: 'Grooming ',
        description: 'Keep your pet looking and feeling with our grooming.'
    },
    {
        _id: '4',
        image: '/home1/looking/2.svg',
        heading: 'Dog Boarding',
        description: 'Safe and comfortable for your beloved pet.'
    }
];

const LookingFor = () => {
    return (
        <div className='bg-[#FFE6E4]'>
            <div className='max-w-[1320px] mx-auto py-16'>
                <div className='max-w-[680px]'>
                    <HeadingLeft 
                        heading='What Are You Looking For?' 
                        description='We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.' 
                    />
                </div>

                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {lookingForData.map((item) => (
                        <div key={item._id} className='text-center'>
                            <div className="bg-container relative overflow-hidden rounded-full max-w-[300px] max-h-[300px] mx-auto mb-4">
                                <Image 
                                    className='rounded-full ml-4 mt-6 max-w-[260px] max-h-[300px]' 
                                    width={260} 
                                    height={360} 
                                    alt='image' 
                                    src={item.image} 
                                />
                            </div>
                            <div className='max-w-[230px] mx-auto'>
                                <h1 className='text-textMain hover:text-primary font-bold text-[28px] font-laila mb-4'>{item.heading}</h1>
                                <p className='text-[16px] text-textBody font-lora'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='-mt-64 -ml-72'>
                    <Image width={200} height={200} alt='design' src='/home1/looking/d.svg'></Image>
                </div>
            </div>
        </div>
    );
};

export default LookingFor;
