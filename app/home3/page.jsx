'use client';
import TransformContent from '@/components/Common/TransformContent';
import DayCare from '@/components/Home1/DayCare';
import ExploreBreads from '@/components/Home1/ExploreBreads';
import LatestPost from '@/components/home2/LatestPost';
import LookingFor from '@/components/home2/LookingFor';
import ShopPeat from '@/components/home2/ShopPeat';
import FeaturesCategories3 from '@/components/Home3/FeaturesCategories3';
import Health3 from '@/components/Home3/Health3';
import Hero3 from '@/components/Home3/Hero3';
import Review3 from '@/components/Home3/Review3';
import SellingProduct3 from '@/components/Home3/SellingProduct3';
import Service3 from '@/components/Home3/Service3';
import Team3 from '@/components/Home3/Team3';
import React from 'react';

const page = () => {
    return (
        <div>
           <Hero3/>
           <FeaturesCategories3/>
           <Service3 />
           {/* <DayCare bg='/home1/Daycare/image.svg' /> */}
           <SellingProduct3/>
           <LookingFor/>
           <ExploreBreads/> 
           <ShopPeat/>
           <Health3 />
           <Team3/>
           <Review3 />
           <TransformContent bg='/Home3/Transformation/1.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
           <LatestPost/>
        </div>
    );
};

export default page;