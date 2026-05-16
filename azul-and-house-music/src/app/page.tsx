import { Hero } from "@/components/sections/hero";
import { Featured } from "@/components/sections/featured";
import { Story } from "@/components/sections/story";
import { Gallery } from "@/components/sections/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <Story />
      <Gallery />
    </>
  );
}
