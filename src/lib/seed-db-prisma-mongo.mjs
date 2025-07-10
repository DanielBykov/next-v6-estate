import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const sampleProperties = [
  {
    title: "Modern Downtown Apartment",
    description:
      "Stunning modern apartment in the heart of downtown with city views, updated kitchen, and luxury amenities. Walking distance to restaurants, shopping, and public transportation.",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    address: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    propertyType: "apartment",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    title: "Charming Victorian House",
    description:
      "Beautiful Victorian home with original hardwood floors, high ceilings, and modern updates. Features a spacious backyard and off-street parking.",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    address: "456 Oak Avenue",
    city: "Oakland",
    state: "CA",
    zipCode: "94610",
    propertyType: "house",
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    title: "Luxury Condo with Bay Views",
    description:
      "Spectacular luxury condominium with panoramic bay views. Features floor-to-ceiling windows, gourmet kitchen, and access to building amenities including gym and rooftop deck.",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    address: "789 Bay Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94133",
    propertyType: "condo",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    title: "Cozy Townhouse",
    description:
      "Perfect starter home with 3 bedrooms, 2.5 baths, and a private patio. Recently updated with new appliances and fresh paint throughout.",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1600,
    address: "321 Pine Street",
    city: "Berkeley",
    state: "CA",
    zipCode: "94702",
    propertyType: "townhouse",
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    title: "Spacious Family Home",
    description:
      "Large family home with 5 bedrooms, 4 bathrooms, and a huge backyard. Perfect for entertaining with an open floor plan and updated kitchen.",
    price: 950000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    address: "654 Elm Drive",
    city: "Palo Alto",
    state: "CA",
    zipCode: "94301",
    propertyType: "house",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

async function main() {
  console.log("Seeding database...")

  for (const property of sampleProperties) {
    await prisma.property.create({
      data: property,
    })
  }

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
