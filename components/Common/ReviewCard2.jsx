'use client';
import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

const ReviewCard2 = ({ rate, description, image, name, country }) => {
    return (
        <div className=''>
            <div className='w-full border rounded-[20px]'>
                <div className='bg-white rounded-[20px] shadow-xl p-6'>
                    <span className=' w-full'>
                        <Rate className='' defaultValue={rate} disabled />
                        <p className='description text-justify'>{description}</p>
                    </span>
                    <div className='flex items-center justify-between'>
                    <div className='flex gap-2 mt-6 '>
                        <Image className='rounded-full' src={image} width={60} height={60} alt='Reviewer' />
                        <div>
                            <h4 className='text-[16px] lg:text-[18px] font-semibold font-laila capitalize'>{name}</h4>
                            <p className='text-primary capitalize description !font-medium'>{country}</p>
                        </div>
                    </div>
                    <div>
                        <Image width={32} height={24} alt='koma' src='/home2/Review2/koma.svg'/> 
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard2;