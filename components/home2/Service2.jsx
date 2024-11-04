import Image from 'next/image';
import React from 'react';

const Service2 = () => {
    const serviceData1 = [
        { icon: '/home1/service/comb.svg', heading: 'Grooming', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
        { icon: '/home1/service/train.svg', heading: 'Training', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
        { icon: '/home1/service/sit.svg', heading: 'Dog Sitting', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
    ]
    const serviceData2 = [
        { icon: '/home1/service/vet.svg', heading: 'Grooming', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
        { icon: '/home1/service/bre.svg', heading: 'Training', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
        { icon: '/home1/service/pet.svg', heading: 'Dog Sitting', description: "At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care." },
    ]
    return (
        <section className='mt-20'>
            <div className='pet-container py-8 md:py-10 lg:my-12 xl:my-14'>
                <h1 className='heading1 !text-left'>our services</h1>
                <p className='description lg:mt-6 w-full lg:w-[50%]'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                <div className='pt-8 md:pt-10 lg:mt-12 xl:mt-14 flex flex-col md:flex-row md:gap-4 lg:gap-8 items-center'>
                    {/* first part */}
                    <div className='flex-1'>
                        {serviceData1.map((data, index) => (
                            <div key={index} className=''>
                                <div className={`${index > 0 && 'mt-6 lg:mt-8 xl:mt-10'} flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-7`}>
                                    <div>
                                        <div>
                                            <div className='w-[100px] h-[100px] rounded-full bg-[#f7dbd0] flex items-center justify-center'>
                                                <Image src='/home1/service/element.svg' width={70} height={70} alt='element' />
                                            </div>
                                            <Image className='-mt-20 ml-5' src={data.icon} width={60} height={60} alt='element' />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='service-heading'>{data.heading}</h3>
                                        <p className='description mt-2'>{data.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Middle part */}
                    <div className='flex-1 mt-8 md:mt-0'>
                        {serviceData2.map((data, index) => (
                            <div key={index} className=''>
                                <div className={`${index > 0 && 'mt-6 lg:mt-8 xl:mt-10'} flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-7`}>
                                    <div>
                                        <div>
                                            <div className='w-[100px] h-[100px] rounded-full bg-[#f7dbd0] flex items-center justify-center'>
                                                <Image src='/home1/service/element.svg' width={70} height={70} alt='element' />
                                            </div>
                                            <Image className='-mt-20 ml-5' src={data.icon} width={60} height={60} alt='element' />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='service-heading'>{data.heading}</h3>
                                        <p className='description mt-2'>{data.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Last part  */}
                    <div className='hidden lg:block flex-1'>
                        <Image className='-mt-52' src='/home1/service/shape.svg' width={600} height={900} alt='element' />
                        <Image className='-mt-[190px] -ml-20' src='/home1/service/carrier.svg' width={100} height={100} alt='carrier' />
                        <Image className='-mt-60' src='/home1/service/cat.svg' width={593} height={500} alt='cat' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service2;