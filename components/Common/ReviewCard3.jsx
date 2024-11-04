import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

const ReviewCard3 = ({ rate, description, image, name, country}) => {
    return (
        <div className='w-full'>
            <div className='bg-white p-6 lg:p-8 xl:p-10 rounded-[20px]'>
                <span className=' w-full'>
                    <Rate className='' defaultValue={rate} disabled />
                    <p className='description text-justify mt-6 lg:mt-8 xl:mt-10'>{description}</p>
                </span>
                <div className='flex justify-between items-center mt-8 md:mt-10 lg:mt-12 xl:mt-14'>
                    <div className='flex items-center gap-2 lg:gap-3 xl:gap-4'>
                        <Image className='rounded-full' src={image} width={60} height={60} alt='Reviewer' />
                        <div>
                            <h4 className='text-[16px] lg:text-[18px] font-semibold font-laila capitalize'>{name}</h4>
                            <p className='text-primary capitalize description !font-medium'>{country}</p>
                        </div>
                    </div>
                    <Image src='/home1/Review/coma.svg' width={32} height={24} alt='Coma' />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard3;