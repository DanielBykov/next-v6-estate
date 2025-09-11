import { Search } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import {ButtonV1} from "@/_UI/_shadcnCustom/ButtonV1";
import {PROPERTY_PAGE_URI} from "@/app/property/const";

export function HeroSection() {
  return (
    <section className="relative h-[700px] flex items-center justify-center">
      {/* Hero Background Image */}
      <Image src={"/home-hero.jpg"} alt="Home Hero" fill className="object-cover" />
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Find Your Dream Home</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
          Discover the perfect property that matches your lifestyle and budget
        </p>

        <ButtonV1
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
        >
          {/*<Search className="mr-2 h-5 w-5" />*/}
          <Link href={"/"+PROPERTY_PAGE_URI} >Search Properties</Link>
        </ButtonV1>
      </div>
    </section>
  )
}
