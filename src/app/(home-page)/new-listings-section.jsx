import {prisma} from "@/lib/prisma";
import PropertyCard2 from "@/app/property/property-card";

export async function NewListingsSection() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
    take: 3
  })
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
          {properties.map((property) => (
            <PropertyCard2 key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
