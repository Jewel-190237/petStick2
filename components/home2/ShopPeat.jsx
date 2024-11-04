'use client';
import Image from 'next/image';
import React from 'react';
import HeadingMiddle from '../Common/HeadingMiddle';

const ShopPeat = () => {
    const fakeData = [
        { _id: 1, image: '/home2/ShopPeat/1.svg', heading: 'Dog' },
        { _id: 2, image: '/home2/ShopPeat/1.svg', heading: 'Cat' },
        { _id: 3, image: '/home2/ShopPeat/1.svg', heading: 'Bird' },
        { _id: 4, image: '/home2/ShopPeat/1.svg', heading: 'Fish' },
        { _id: 5, image: '/home2/ShopPeat/1.svg', heading: 'Rabbit' },
        { _id: 6, image: '/home2/ShopPeat/1.svg', heading: 'Hamster' },
    ];

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='mb-10'>
                <HeadingMiddle heading='Shop by Peat' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {fakeData.map((item) => (
                    <div key={item._id} className='bg-white p-4 group rounded-[20px] shadow-md'>
                        <Image
                            className='rounded-t-[20px] w-full lg:w-[172px] lg:h-[172px]'
                            width={172}
                            height={172}
                            alt={item.heading}
                            src={item.image}
                        />
                        <h1 className='text-textMain text-center group-hover:text-primary transition-all duration-300 text-[28px] capitalize font-bold font-laila mt-6 mb-2'>
                            {item.heading}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPeat;
