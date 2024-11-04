'use client';
import React from 'react';
const TransformContent = ({bg, heading, description}) => {
    return (
        <section
            className="relative bg-cover bg-center h-[300px] lg:h-[400px] 2xl:h-[500px] mt-20"
            style={{ backgroundImage: `url(${bg})` }} // Use the bg variable here
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="pet-container absolute inset-0 flex items-center justify-center">
                <div className="mx-auto ">
                    <h1 className="heading1 !leading-[110%] text-center text-white w-full lg:w-[60%] mx-auto">{heading}</h1>
                    <p className="description mt-4 lg:mt-6 text-white text-center w-full lg:w-[60%] mx-auto">{description} </p>
                    <div className="flex justify-center items-center">
                        <button className="pet-button mt-8 md:mt-10 lg:mt-12 xl:mt-14">Adoption</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformContent;