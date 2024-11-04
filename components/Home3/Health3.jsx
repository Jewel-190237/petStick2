'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Health3 = () => {
    const [active, setActive] = useState('dog');
    const [selectedItem, setSelectedItem] = useState({ item: 'dog regular checkup', image: '/home1/Health/person1.svg' });

    const handleActive = (value) => {
        setActive(value);

        // Set selectedItem to the first item of the new category
        const firstItem = 
            value === 'dog' ? dogData[0] :
            value === 'cat' ? catData[0] :
            otherData[0];

        setSelectedItem(firstItem);
    };

    const dogData = [
        { item: 'dog regular checkup', image: '/home1/Health/person1.svg' },
        { item: 'dog dental care', image: '/home1/Health/person1.svg' },
        { item: 'dog nutrition', image: '/home1/Health/person1.svg' },
        { item: 'dog vaccination', image: '/home1/Health/person1.svg' },
    ];
    const catData = [
        { item: 'cat regular checkup', image: '/home1/Health/person1.svg' },
        { item: 'cat dental care', image: '/home1/Health/person1.svg' },
        { item: 'cat nutrition', image: '/home1/Health/person1.svg' },
        { item: 'cat vaccination', image: '/home1/Health/person1.svg' },
    ];
    const otherData = [
        { item: 'other pet checkup', image: '/home1/Health/person1.svg' },
        { item: 'other pet dental care', image: '/home1/Health/person1.svg' },
        { item: 'other pet nutrition', image: '/home1/Health/person1.svg' },
        { item: 'other pet vaccination', image: '/home1/Health/person1.svg' },
    ];

    const currentData = active === 'dog' ? dogData : active === 'cat' ? catData : otherData;

    return (
        <div className='pet-container mt-20 flex flex-col sm:flex-row-reverse sm:gap-5 md:gap-6 lg:gap-16 xl:gap-20 items-center bg-white shadow-lg rounded-[40px]'>
            <div className='flex-1 px-5 md:px-6 lg:px-8 xl:px-10 py-8 md:py-10 lg:py-12 xl:py-14'>
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

                <div className='mt-7 lg:mt-8 xl:mt-10 flex flex-col gap-4 w-full lg:w-[80%]'>
                    {currentData.map((data, index) => (
                        <div key={index} className='flex items-center '>
                            <input
                                type='radio'
                                name='petService' 
                                id={`radio-${index}`}
                                checked={selectedItem.item === data.item} 
                                onChange={() => setSelectedItem(data)}
                                className='mr-2 custom-radio'
                            />
                            <label htmlFor={`radio-${index}`} className='cursor-pointer heading2 !font-medium p-3'>
                                {data.item}
                            </label>
                        </div>
                    ))}
                </div>

                <button className='pet-button mt-8 md:mt-10 lg:mt-12 xl:mt-14 capitalize !text-[#E65F33] hover:!text-white'>make an appointment</button>
            </div>
            <div className='mt-10 md:mt-0 w-full sm:w-1/2'>
                <Image className='rounded-[40px] w-full' src={selectedItem.image} width={719} height={860} alt='person Image' />
            </div>
        </div>
    );
};

export default Health3;
