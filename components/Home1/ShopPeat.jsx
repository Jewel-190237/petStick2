"use client";
import Image from 'next/image';
import HeadingLeft from '../Common/HeadingLeft';

const ShopPeat = () => {
    const petData = [
        {
            id: 1,
            name: 'dog',
            imgSrc: '/home1/shopPeat/1.png',
        },
        {
            id: 2,
            name: 'cat',
            imgSrc: '/home1/shopPeat/1.png',
        },
        {
            id: 3,
            name: 'bird',
            imgSrc: '/home1/shopPeat/1.png',
        },
        {
            id: 4,
            name: 'dog',
            imgSrc: '/home1/shopPeat/1.png',
        },
        {
            id: 5,
            name: 'cat',
            imgSrc: '/home1/shopPeat/1.png',
        },
        {
            id: 6,
            name: 'bird',
            imgSrc: '/home1/shopPeat/1.png',
        },


    ];
    return (
        <div className='overflow-hidden '>
            <div className="max-w-[1320px] mx-auto">
                <HeadingLeft heading="Shop by Pet" />
                <div className='flex justify-end relative -mt-36 -mr-48'>
                    <Image
                        className="h-[148px] w-[182px] "
                        src='/home1/shopPeat/design.svg'
                        width={200}
                        height={200}
                        alt='design'
                    />  </div>
                <div className="flex  whitespace-nowrap mt-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-[45px]">
                        {petData.map(item => (
                            <div key={item.id} className="flex flex-col items-center max-w-[182px] transition-transform hover:scale-105">
                                <div className="mt-14 transform transition-transform duration-500">
                                    <Image
                                        className="h-[148px] w-[182px]  object-cover rounded-full"
                                        src={item.imgSrc}
                                        width={182}
                                        height={148}
                                        alt={item.name}
                                    />
                                </div>
                                <h1 className="font-laila text-textMain hover:text-primary text-[28px] font-bold text-center capitalize pt-6">
                                    {item.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPeat;