import Hero from "@/components/Hero";


import TopCategories from "@/components/Topcategories";
import TopProducts from "@/components/Topproducts";
import productsData from "@/data/Products.json";
import MarqueeSlider from "@/components/Marqueeslider";
import StatsSection from "@/components/Statssection";
import AboutBabaji from "@/components/About";
import InstagramSection from "@/components/InstagramSection";
import TestimonialsSection from "@/components/TestimonialSection";

import CTASection from "@/components/Ctasection";

export default function Home() {
  return (
   <>
 
 
   <Hero/>
    <MarqueeSlider/>
    <StatsSection/>
    <TopCategories categories={productsData.categories} />
        

      <TopProducts products={productsData.products} />
   <AboutBabaji/>
   <InstagramSection/>
   <TestimonialsSection/>
   <CTASection/>

   </>
  );
}
