'use client';
import React from 'react';
const HeadingLeft = ({heading , description }) => {
    return (
        <div >
            <h1 className='text-[48px] font-laila font-bold text-textMain capitalize'> {heading} </h1>
            <p className='text-[16px] font-lora leading-[170%] text-textBody '> {description} </p>
        </div>
    );
};

export default HeadingLeft;