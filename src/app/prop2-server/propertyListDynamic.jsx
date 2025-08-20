import {ButtonC} from "@/_UI/_shadcnCustom/ButtonC";
import PropertyCard2 from "@/app/prop2-server/property-card";
import {prisma} from "@/lib/prisma";
import {delay} from "@/lib/utils";
import Link from "next/link";

export const PropertyFallback = () => (
  <div className="text-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"/>
    <p className="mt-4 text-gray-600">Loading properties...</p>
  </div>
)

export default async function PropertyListDynamic ({searchParams}){
  const s = await searchParams
  const {
    search,
    city,
    minPrice,
    maxPrice,
    propertyType
  } = s

  const where = {}
  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { address: { contains: search, mode: "insensitive" } },
    ]
  }

  if (city) {
    where.city = { contains: city, mode: "insensitive" }
  }

  if (minPrice || maxPrice) {
    where.price = {}
    if (minPrice) where.price.gte = Number.parseInt(minPrice)
    if (maxPrice) where.price.lte = Number.parseInt(maxPrice)
  }

  if (propertyType && propertyType !== "all") {
    where.propertyType = propertyType
  }

  // await delay(2000)
  const properties = await prisma.property.findMany({
    where,
    orderBy: { createdAt: "desc" },
  })

  if (properties.length === 0) return (
    <div className="text-center py-12">
      <p className="text-gray-600 mb-4">No properties found matching your criteria.</p>
      <Link href="/add-property">
        <ButtonC>Add the first property</ButtonC>
      </Link>
    </div>
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard2 key={property.id} property={property} />
      ))}
    </div>
  )
}
