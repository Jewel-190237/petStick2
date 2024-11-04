import Image from 'next/image';
import React from 'react';

const Service = () => {
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
        <section className='bg-[#FFE6E4] mt-20'>
            <div className='pet-container py-8 md:py-10 lg:my-12 xl:my-14'>
                <h1 className='heading1 !text-left'>our services</h1>
                <p className='description lg:mt-6 w-full lg:w-[50%]'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                <div className='pt-8 md:pt-10 lg:mt-12 xl:mt-14 flex flex-col md:flex-row md:gap-4 lg:gap-14 items-center'>
                    {/* first part */}
                    <div>
                        {serviceData1.map((data, index) => (
                            <div key={index} className=''>
                                <div className={`${index > 0 && 'mt-8 lg:mt-10 xl:mt-12'} flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-7`}>
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
                                        <p className='description mt-4'>{data.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* middle part  */}
                    <div className='hidden lg:flex'>
                        <Image  src='/home1/service/dog.svg' width={460} height={798} alt='element' />
                    </div>

                    {/* last part */}
                    <div className='mt-8 md:mt-0'>
                        {serviceData2.map((data, index) => (
                            <div key={index} className=''>
                                <div className={`${index > 0 && 'mt-8 lg:mt-10 xl:mt-12'} flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-7`}>
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
                                        <p className='description mt-4'>{data.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;