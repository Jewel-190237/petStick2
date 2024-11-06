'use client';
import React from 'react';
const HeadingMiddle = ({heading , description, align }) => {
    return (
        <div className=''>
            <h1 className={`heading1 text-${align}`}> {heading} </h1>
            <p className= {`mt-3 text-${align} description text-[#2B2B2B]`}> {description} </p>
        </div>
    );
};

export default HeadingMiddle;