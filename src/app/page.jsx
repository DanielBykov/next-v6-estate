import {HeroSection} from "@/app/(home-page)/hero-section";
import {AboutSection} from "@/app/(home-page)/about-section";
import {NewListingsSection} from "@/app/(home-page)/new-listings-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <NewListingsSection />
    </div>
  );
}
