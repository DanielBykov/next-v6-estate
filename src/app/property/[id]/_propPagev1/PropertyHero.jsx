import {ButtonV1} from "@/_UI/_shadcnCustom/ButtonV1";
import { ChevronLeft, ChevronRight, MapPin, Badge } from "lucide-react"

export default function PropertyHero() {
  return (
    <section className="relative">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img src="/modern-luxury-house-exterior.png" alt="Property exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Navigation arrows */}
        <ButtonV1
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary"
        >
          <ChevronLeft className="h-6 w-6" />
        </ButtonV1>
        <ButtonV1
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary"
        >
          <ChevronRight className="h-6 w-6" />
        </ButtonV1>

        {/* Photo counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm">1 / 24</div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                For Sale
              </Badge>
              <Badge variant="outline">New Listing</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">$1,250,000</h1>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>123 Elm Street, Auckland Central, Auckland</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>4 bed</span>
              <span>•</span>
              <span>3 bath</span>
              <span>•</span>
              <span>2 car</span>
              <span>•</span>
              <span>320m² floor</span>
            </div>
          </div>
          <div className="flex gap-2">
            <ButtonV1 variant="outline">Schedule Viewing</ButtonV1>
            <ButtonV1 className="bg-accent hover:bg-accent/90">Contact Agent</ButtonV1>
          </div>
        </div>
      </div>
    </section>
  )
}
