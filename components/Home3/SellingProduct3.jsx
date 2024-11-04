"use client";
import React from 'react';
import Image from 'next/image';
import HeadingLeft from '../Common/HeadingLeft';
import SellingCard3 from '../Common/SellingCard3';


const sellingData = [
    {
        _id: '1',
        image: '/home2/Selling/1.svg',
        hoverImage: '/home2/Selling/2.svg',
        heading: 'Delicious Pizza',
        rating: 4.5,
        name: 'Pizza',
        price: '$120'
    },
    {
        _id: '2',
        image: '/home2/Selling/1.svg',
        hoverImage: '/home2/Selling/2.svg',
        heading: 'Juicy Burger',
        rating: 4.2,
        name: 'Burger',
        price: '$80'
    },
    {
        _id: '3',
        image: '/home2/Selling/1.svg',
        hoverImage: '/home2/Selling/2.svg',
        heading: 'Pasta Delight',
        rating: 4.7,
        name: 'Pasta',
        price: '$90'
    },
    {
        _id: '4',
        image: '/home2/Selling/1.svg',
        hoverImage: '/home2/Selling/2.svg',
        heading: 'Tasty Sushi',
        rating: 4.8,
        name: 'Sushi',
        price: '$150'
    }

];

const SellingProduct3 = () => {
    return (
        <div className='overflow-hidden'>
            <div className='my-[120px] max-w-[1320px] mx-auto'>
                <div className='ml-auto flex justify-end -mt-32 -mb-36  -mr-72'>
                    <Image width={200} height={200} alt='design' src='/home1/Explore/dr.svg'></Image>
                </div>
                <HeadingLeft heading='Our Best Selling Product' />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                    {sellingData.map((item) => (
                        <SellingCard3
                            key={item._id}
                            image={item.image}
                            heading={item.heading}
                            rating={item.rating}
                            name={item.name}
                            price={item.price}
                            hoverImage= {item.hoverImage}
                        />
                    ))}
                </div>
                <div className='-mt-72 -ml-72'>
                    <Image width={200} height={200} alt='design' src='/home1/Explore/dl.svg'></Image>
                </div>
                <div className='flex justify-center'>
                    <button className='pet-button '>See More </button>
                </div>
            </div>
        </div>
    );
};

export default SellingProduct3;
