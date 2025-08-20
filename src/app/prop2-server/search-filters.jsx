"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import {Input} from "@/_UI/_shadcnCustom/input";
import {ButtonC} from "@/_UI/_shadcnCustom/ButtonC";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchFiltersParams() {

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    })
    replace(`${pathname}?${params.toString()}`);
  }

  const [filters, setFilters] = useState({
    search: params.get("search") || "",
    city: params.get("city") || "",
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
    propertyType: params.get("propertyType") || "all",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(filters)
  }

  const handleReset = () => {
    const resetFilters = {
      search: "",
      city: "",
      minPrice: "",
      maxPrice: "",
      propertyType: "all",
    }
    setFilters(resetFilters)
    handleSearch(resetFilters)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-2">
          <Input
            placeholder="Search properties..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        <div>
          <Input
            placeholder="City"
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          />
        </div>

        <div>
          <Input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
        </div>

        <div>
          <Input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
        </div>

        <div>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <ButtonC type="submit" className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Search
        </ButtonC>
        <ButtonC type="button" variant="outline" onClick={handleReset}>
          Reset
        </ButtonC>
      </div>
    </form>
  )
}
