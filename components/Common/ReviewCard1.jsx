import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

const ReviewCard1 = ({ rate, description, image, name, country }) => {
    return (
        <div className=''>
            <div className='w-full '>
                <div className='bg-white review-card'>
                    <span className='p-5 w-full'>
                        <Rate className='p-5' defaultValue={rate} disabled />
                        <p className='description text-justify px-5'>{description}</p>
                    </span>
                </div>
            </div>
            <Image className='relative ml-20 -mt-[0.25px] ' src='/home1/Review/Polygon.svg' width={40} height={40} alt='Polygon' />
            <div className='flex items-center gap-2 ml-[70px] mt-4'>
                <Image className='rounded-full' src={image} width={60} height={60} alt='Reviewer' />
                <div>
                    <h4 className='text-[16px] lg:text-[18px] font-semibold font-laila capitalize'>{name}</h4>
                    <p className='text-primary capitalize description !font-medium'>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard1;