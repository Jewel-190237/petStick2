'use client';
import Post from "@/components/Home1/Post";
import TransformContent from "@/components/Common/TransformContent";
import ShopPeat from "@/components/Home1/ShopPeat";
import FeaturesCategories from "@/components/Home1/FeaturesCategories";
import Review from "@/components/Home1/Review";
import Team from "@/components/Home1/Team";
import Health from "@/components/Home1/Health";
import ExploreBreads from "@/components/Home1/ExploreBreads";
import SellingProduct from "@/components/Home1/SellingProduct";
import LookingFor from "@/components/Home1/LookingFor";
import Hero from "@/components/Home1/Hero";
import Service from "@/components/Home1/Service";
import DayCare from "@/components/Home1/DayCare";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesCategories />
      <Service />
      {/* <DayCare bg='/home1/Daycare/bg.svg' /> */}
      <SellingProduct />
      <LookingFor />
      <ExploreBreads />
      <ShopPeat />
      <Health />
      <Team />
      <Review />
      <TransformContent bg='/home1/bg.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
      <Post />
    </>
  );
}
