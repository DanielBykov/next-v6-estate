"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import {ButtonC} from "@/_UI/_shadcnCustom/ButtonC";
import PropertyCard2 from "@/app/prop2/property-card";
import SearchFilters from "@/app/prop2/search-filters";

export default function Prop2() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProperties = async (filters = {}) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== "all") {
          params.append(key, value)
        }
      })

      const response = await fetch(`/api/properties?${params}`)
      const data = await response.json()
      setProperties(data)
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProperties()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Residential (HC)</h1>
            <Link href="/add-property">
              <ButtonC className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Property
              </ButtonC>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters onSearch={fetchProperties} />

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"/>
            <p className="mt-4 text-gray-600">Loading properties...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">{properties.length} Properties Found</h2>
            </div>

            {properties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No properties found matching your criteria.</p>
                <Link href="/add-property">
                  <ButtonC>Add the first property</ButtonC>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard2 key={property.id} property={property} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
