import { Hero } from "@/components/sections/hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Categories } from "@/components/sections/categories";
import { EditorialBanner } from "@/components/sections/editorial-banner";
import { InstagramSection } from "@/components/sections/instagram-section";
import { WhyIbomen } from "@/components/sections/why-ibomen";
import { StoresSection } from "@/components/sections/stores-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <EditorialBanner />
      <InstagramSection />
      <WhyIbomen />
      <StoresSection />
    </>
  );
}
