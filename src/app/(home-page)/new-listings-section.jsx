// import { PropertyCard } from "@/components/property-card"

const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Condo",
    price: "$750,000",
    location: "Downtown District",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,200",
    image: "/placeholder-5ym7o.png",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: "$950,000",
    location: "Maple Heights",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,800",
    image: "/placeholder-7s818.png",
  },
  {
    id: 3,
    title: "Luxury Waterfront Villa",
    price: "$2,100,000",
    location: "Lakeside Estates",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "4,500",
    image: "/placeholder-sbfbo.png",
  },
]

export function NewListingsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">New Listings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest property listings featuring the most desirable homes in prime locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*{featuredProperties.map((property) => (*/}
          {/*  <PropertyCard key={property.id} property={property} />*/}
          {/*))}*/}
        </div>
      </div>
    </section>
  )
}
