'use client';
import Image from 'next/image';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';

const LatestCard = ({ image, heading, date, time }) => {
    return (
        <div className="overflow-hidden rounded-[20px]">
            <div className="group shadow-lg border bg-white p-3 md:p-3 lg:p-4 rounded-[20px]">
                <Image
                    className="dog-image rounded-t-[20px] w-full"
                    src={image}
                    width={376}
                    height={370}
                    alt="Post Image"
                />
                <div>
                    <h2 className="heading2 group-hover:text-primary transition-all duration-300 mt-5">{heading}</h2>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CiCalendar />
                            <p className="description">{date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMdTime />
                            <p className="description">{time} m read</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestCard;
