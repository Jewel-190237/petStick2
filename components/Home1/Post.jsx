'use client';
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Post = () => {
    const postData = [
        {image: '/home1/dog1.svg', heading: 'A recipe for dog biscuits suitable for the holidays', description: "Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.", date: "17 October, 2024", time: '9'},
        {image: '/home1/dog1.svg', heading: 'A recipe for dog biscuits suitable for the holidays', description: "Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.", date: "17 October, 2024", time: '9'},
        {image: '/home1/dog1.svg', heading: 'A recipe for dog biscuits suitable for the holidays', description: "Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.", date: "17 October, 2024", time: '9'},
        {image: '/home1/dog4.svg', heading: 'A recipe for dog biscuits suitable for the holidays', description: "Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.", date: "17 October, 2024", time: '9'},
      ];
      
    return (
        <div className="pet-container mt-20">
            <h1 className="heading1 text-[#2B2B2B]">Latest Posts & Articles</h1>

            <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 xl:gap-12 mt-8 md:mt-10 lg:mt-12 xl:mt-14">

                {/* Left side - all except the last post */}
                <div className="flex-1">
                    {postData.slice(0, postData.length - 1).map((post, index) => (
                        <div key={index} className="group flex flex-col lg:flex-row sm:gap-5 lg:gap-6 mb-6 transition-transform duration-300 hover:scale-105">
                            <Image className="rounded-[20px] w-full lg:w-fit" src={post.image} width={200} height={200} alt={`Post Image ${index + 1}`} />
                            <div>
                                <h2 className="heading2 group-hover:text-primary mt-5 md:mt-0">{post.heading}</h2>
                                <p className="description mt mt-3 xl:mt-4">{post.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CiCalendar />
                                        <p className="description">{post.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdTime />
                                        <p className="description">{post.time} m read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side - only the last post */}
                <div className="flex-1">
                    {postData.slice(-1).map((post, index) => (
                        <div key={index} className="group shadow-lg p-3 md:p-4 lg:p-6 rounded-[20px] transition-transform duration-300 hover:scale-105">
                            <Image className="dog-image rounded-[20px] w-full" src={post.image} width={582} height={420} alt="Last Post Image" />
                            <div>
                                <h2 className="heading2 group-hover:text-primary">{post.heading}</h2>
                                <p className="description mt mt-3 xl:mt-4">{post.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CiCalendar />
                                        <p className="description">{post.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdTime />
                                        <p className="description">{post.time} m read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Post;