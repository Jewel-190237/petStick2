'use client';
import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ bgImage, innerImage, title }) => {
    return (
        <div className='flex flex-col max-w-[200px]'>
            <div
                className="max-w-[200px] h-[200px] bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                <div className="p-4 flex justify-center items-center h-full overflow-hidden">
                    <Image
                        src={innerImage}
                        alt="Inside Image"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <div className="mt-6 max-w-[150px] mx-auto">
                <h2 className="text-textBody font-bold text-lg font-sans text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default FeatureCard;
