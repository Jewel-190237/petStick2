'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuMoveRight } from "react-icons/lu";

const Health = () => {
    const [active, setActive] = useState('dog');
    const [selectedItem, setSelectedItem] = useState({
        item: 'dog regular checkup', 
        image1: '/home1/Health/dog1.svg', 
        image2: '/home1/Health/dog2.svg', 
        image3: '/home1/Health/dog3.svg', 
        description1: 'Regular checkups keep your dog healthy and protected.', 
        heading2: 'Behavioral Assessment', 
        description2: "Address any changes in behavior or mobility", 
        heading3: 'dog day care trips', 
        description3: "Monitor weight and adjust diet if needed."
    });

    const handleActive = (value) => {
        setActive(value);

        // Automatically set the first item of the selected category as the selected item
        const firstItem = 
            value === 'dog' ? dogData[0] : 
            value === 'cat' ? catData[0] : 
            otherData[0];

        setSelectedItem(firstItem);
    };

    const dogData = [
        { item: 'dog regular checkup', image1: '/home1/Health/dog1.svg', image2: '/home1/Health/dog2.svg', image3: '/home1/Health/dog3.svg', description1: 'Regular checkups keep your dog healthy and protected.', heading2: 'Behavioral Assessment', description2: "Address any changes in behavior or mobility", heading3: 'dog day care trips', description3: "Monitor weight and adjust diet if needed." },
        { item: 'dog dental care' },
        { item: 'dog nutrition' },
        { item: 'dog vaccination' },
    ];
    const catData = [
        { item: 'cat regular checkup' },
        { item: 'cat dental care' },
        { item: 'cat nutrition' },
        { item: 'cat vaccination' },
    ];
    const otherData = [
        { item: 'other pet checkup' },
        { item: 'other pet dental care' },
        { item: 'other pet nutrition' },
        { item: 'other pet vaccination' },
    ];

    const currentData = active === 'dog' ? dogData : active === 'cat' ? catData : otherData;

    return (
        <div className='pet-container mt-20 flex flex-col md:flex-row gap-4 lg:gap-0'>
            <div className='flex-1'>
                <h1 className='heading1 !text-left'>Health and Wellness <br className='hidden lg:flex' /> Services</h1>
                <p className='description mt-5 lg:mt-6'>
                    Designed so animals can relax & indulge in pet stylists, <br className='hidden lg:flex' />
                    run around our exercise yards, make new friends.
                </p>

                <div className='mt-7 md:mt-8 xl:mt-10 flex items-center gap-4 lg:gap-8 xl:gap-10'>
                    <button
                        onClick={() => handleActive('dog')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'dog' ? 'underline text-primary' : ''}`}
                    >
                        For Dog
                    </button>
                    <button
                        onClick={() => handleActive('cat')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'cat' ? 'underline text-primary' : ''}`}
                    >
                        For Cat
                    </button>
                    <button
                        onClick={() => handleActive('others')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'others' ? 'underline text-primary' : ''}`}
                    >
                        For Others
                    </button>
                </div>

                <div className='mt-7 lg:mt-8 xl:mt-10 flex flex-col gap-6 w-full lg:w-[60%]'>
                    {currentData.map((data, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedItem(data)}
                            className={`heading2 !font-medium flex items-center justify-between p-3 border rounded-tr-lg rounded-br-lg transition-all duration-300 ${selectedItem.item === data.item ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                                }`}
                        >
                            {data.item} <LuMoveRight />
                        </button>
                    ))}
                </div>

                <button className='pet-button mt-8 md:mt-10 lg:mt-12 xl:mt-14 capitalize !text-[#E65F33] hover:!text-white'>make an appointment</button>
            </div>

            <div className='flex-1 mt-10 md:mt-0'>
                <div className='ml-0 lg:ml-5 xl:ml-28'>
                    <div className='w-full lg:w-[62%] bg-[#D0F9FF] rounded-lg border border-[#44433F] border-dashed p-5 md:p-6 lg:p-8 xl:p-10'>
                        <p className='text-sm lg:text-[18px] font-semibold font-lora capitalize'>{selectedItem.item || 'item'}</p>
                        <div className='bg-[#44433F] h-[1px] mt-6 w-[90%] bg-opacity-40'> <br /> </div>
                        <p className='description mt-4 w-[85%]'>{selectedItem.description1 || 'Description'}</p>
                    </div>
                    <div className='flex justify-end'>
                        <Image className='hidden lg:flex -mt-[270px]' src={selectedItem.image1} width={300} height={300} alt='dog Image' />
                    </div>
                </div>

                <div className='mt-8 md:mt-12 lg:mt-16 xl:mt-20'>
                    <div className='flex items-center gap-6'>
                        <div className='w-full lg:w-[62%] bg-[#FFE1B5] rounded-lg border border-[#44433F] border-dashed p-5 lg:!pl-20 md:p-6 lg:p-8 xl:p-10'>
                            <p className='text-sm lg:text-[18px] font-semibold font-lora capitalize'>{selectedItem.heading2 || 'Heading2'}</p>
                            <div className='bg-[#44433F] h-[1px] mt-6 w-full lg:w-[90%] bg-opacity-40'> <br /> </div>
                            <p className='description mt-4 w-full'>{selectedItem.description2 || 'Description2'}</p>
                        </div>
                        <Image className='hidden lg:flex' src='/home1/Health/watch.svg' width={300} height={187} alt='dog Image' />
                    </div>
                    <Image className='hidden lg:flex -ml-36 -mt-[280px]' src={selectedItem.image2} width={242} height={300} alt='dog Image' />
                </div>

                <div className='ml-0 lg:ml-5 xl:ml-28 mt-8 md:mt-12 lg:mt-16 xl:mt-20'>
                    <div className='w-full lg:w-[62%] bg-[#F4E1D3] rounded-lg border border-[#44433F] border-dashed p-5 md:p-6 lg:p-8 xl:p-10'>
                        <p className='text-sm lg:text-[18px] font-semibold font-lora capitalize'>{selectedItem.heading3 || 'Heading3'}</p>
                        <div className='bg-[#44433F] h-[1px] mt-6 w-full lg:w-[90%] bg-opacity-40'> <br /> </div>
                        <p className='description mt-4 lg:w-[80%] xl:w-[85%]'>{selectedItem.description3 || 'Description3'}</p>
                    </div>
                    <div className='hidden lg:flex justify-end'>
                        <Image className='-mt-[270px]' src={selectedItem.image3} width={300} height={300} alt='dog Image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health;