'use client';
import TransformContent from "@/components/Common/TransformContent";
import LatestPost from "@/components/home2/LatestPost";
import Review2 from "@/components/home2/Review2";
import ShopPeat from "@/components/home2/ShopPeat";
import ExploreBreads from "@/components/home2/ExploreBreads";
import SellingProduct2 from "@/components/home2/SellingProduct2";
import FeaturesCategories from "@/components/home2/FeaturesCategories";
import LookingFor from "@/components/home2/LookingFor";
import Hero2 from "@/components/home2/Hero2";
import Service2 from "@/components/home2/Service2";
import DayCare from "@/components/Home1/DayCare";
import Health2 from "@/components/home2/Health2";
import Team2 from "@/components/home2/Team2";

export default function Home2() {
  return (
    <div className="bg-[#F7F3EB]">
      <Hero2 />
      <FeaturesCategories />
      <Service2 />
      {/* <DayCare bg='/home1/Daycare/bg.svg' /> */}
      <SellingProduct2 />
      <LookingFor bgColor='#F8D9CC' />
      <ExploreBreads />
      <ShopPeat />
      <Health2 />
      <Team2 />
      <Review2 />
      <TransformContent bg='/home1/bg.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
      <LatestPost />
    </div>
  );
}