import Link from "next/link"
import { Plus } from "lucide-react"
import {ButtonC} from "@/_UI/_shadcnCustom/ButtonC";
import {prisma} from "@/lib/prisma";
import PropertyListDynamic, {PropertyFallback} from "@/app/prop2-server/propertyListDynamic";
import {Suspense} from "react";
import SearchFiltersParams from "@/app/prop2-server/search-filters";

export default async function Prop2({searchParams}) {
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
        <SearchFiltersParams />

        <Suspense fallback={<PropertyFallback/>}>
          <PropertyListDynamic searchParams={searchParams}/>
        </Suspense>

      </main>
    </div>
  )
}
