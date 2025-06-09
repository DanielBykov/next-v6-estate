import Image from "next/image"
import { Bed, Bath, Calendar, House , TentTree} from "lucide-react"
import Link from "next/link";
import {Card, CardContent} from "@/_UI/elements/card";

export default function PropertyCard(prop) {
  const {
    title,
    subTitle,
    pricing,
    dateListed,
    listingID,
    propertyDetails,
    photos,
    featuresIcon: {
      bedroom,
      bathroom,
      landArea,
      houseArea
    }
  } = prop

  return (
    <Link href={`/property/${listingID}`} passHref>
      <Card className="w-full max-w-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Photo Masonry Section */}
        <div className="relative h-64 grid grid-cols-2 grid-rows-2 gap-1">
          {/* Large main image */}
          <div className="col-span-1 row-span-2">
            <Image
              src={photos[0]}
              alt="Property main view"
              width={200}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second smaller image */}
          <div className="col-span-1 row-span-1">
            <Image
              src={photos[1]}
              alt="Property view 2"
              width={200}
              height={127}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third smaller image with overlay */}
          <div className="col-span-1 row-span-1 relative group">
            <Image
              src={photos[2]}
              alt="Property view 3"
              width={200}
              height={127}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{`+${photos.length - 3}`}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          {/* Middle Section */}
          <div className="space-y-2">
            {/* Listed Date */}
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1"/>
              <span>Listed {dateListed.toDateString()}</span>
            </div>

            <h3 data-n="title" className="text-lg font-semibold text-foreground">{title}</h3>
            <p data-n="subtitle" className="text-sm text-muted-foreground">{subTitle}</p>

            {/* Type of Sale */}
            <div className="flex items-center gap-2">
              {/*<Badge variant="secondary" className="flex items-center gap-1">*/}
              {/*  <Tag className="w-3 h-3" />*/}
              {/*  Auction*/}
              {/*</Badge>*/}
              <span data-n="pricing" className="text-lg font-bold text-foreground">{pricing}</span>
            </div>
          </div>

          {/* Bottom Section - Property Features */}
          <div className="pt-2 border-t">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bed className="w-4 h-4"/>
                <span>{bathroom}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bath className="w-4 h-4"/>
                <span>{bathroom}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TentTree className="w-4 h-4"/>
                <span>{landArea}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <House className="w-4 h-4"/>
                <span>{houseArea}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card></Link>
  )
}
