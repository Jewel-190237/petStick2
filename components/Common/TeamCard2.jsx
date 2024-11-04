import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard2 = ({ socialData, image, name, title }) => {
    return (
        <div className='bg-white rounded-[20px] group hover:bg-primary transition-all duration-300'>
            <Image className='w-full rounded-t-[20px] rounded-b-[300px] group-hover:rounded-full group-hover:p-14 transition-all duration-300' src={image} width={312} height={322} alt='Team Image' />
            <div className='flex items-center px-5 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                {socialData.map((data, index) => (
                    <Link href={data.link} key={index} className='team2-social-styles'>
                        {data.icon}
                    </Link>
                ))}
            </div>
            <h3 className='heading2 pl-5 xl:pl-6 mt-5 lg:mt-6 group-hover:text-white transition-all duration-300'>{name}</h3>
            <p className='description mt-3 capitalize pb-5 xl:pb-6 pl-5 xl:pl-6 group-hover:text-white transition-all duration-300'>{title}</p>
        </div>
    );
};

export default TeamCard2;