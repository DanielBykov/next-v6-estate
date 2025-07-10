import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const city = searchParams.get("city")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const propertyType = searchParams.get("propertyType")

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

    const properties = await prisma.property.findMany({
      where,
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error("Error fetching properties:", error)
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const property = await prisma.property.create({
      data: {
        title: body.title,
        description: body.description,
        price: Number.parseInt(body.price),
        bedrooms: Number.parseInt(body.bedrooms),
        bathrooms: Number.parseInt(body.bathrooms),
        sqft: Number.parseInt(body.sqft),
        address: body.address,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        propertyType: body.propertyType,
        images: body.images || [],
      },
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error("Error creating property:", error)
    return NextResponse.json({ error: "Failed to create property" }, { status: 500 })
  }
}
