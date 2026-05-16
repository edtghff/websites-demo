import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Featured } from "@/components/sections/featured";
import { Pillars } from "@/components/sections/pillars";
import { Story } from "@/components/sections/story";
import { Club } from "@/components/sections/club";
import { Editorial } from "@/components/sections/editorial";
import { Gallery } from "@/components/sections/gallery";
import { Drop } from "@/components/sections/drop";
import { InstagramSection } from "@/components/sections/instagram-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Featured />
      <Pillars />
      <Story />
      <Club />
      <Editorial />
      <Gallery />
      <Drop />
      <InstagramSection />
    </>
  );
}
