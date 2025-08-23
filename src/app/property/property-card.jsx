import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import {Card, CardContent} from "@/components/ui/card";
import {Badge_} from "@/components/ui/badge";
import {PROPERTY_PAGE_URI} from "@/app/property/const";

export default function PropertyCard2({ property }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "NZD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link href={`/${PROPERTY_PAGE_URI}/${property.id}/`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={property.images?.[0] || "/placeholder.svg?height=200&width=300"}
            alt={property.title}
            fill
            className="object-cover"
          />
          <Badge_ className="absolute top-2 right-2 bg-green-600">{property.status}</Badge_>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
            <span className="text-xl font-bold text-green-600">{formatPrice(property.price)}</span>
          </div>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {property.city}, {property.state}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{property.bedrooms} bed</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{property.bathrooms} bath</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{property.sqm.toLocaleString()} sqm</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
