import PropertyHeader from "@/app/prop2-server/[id]/_propPagev1/PropertyHeader";
import PropertyDetails from "@/app/prop2-server/[id]/_propPagev1/PropertyDetails";
import PropertyHero from "@/app/prop2-server/[id]/_propPagev1/PropertyHero";
import PropertyContact from "@/app/prop2-server/[id]/_propPagev1/PropertyContact";

export default function PropPageV1({id}) {
  return (
    <div className="min-h-screen bg-background">
      {/*<PropertyHeader />*/}
        <PropertyHero />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyDetails />
            </div>
            <div className="lg:col-span-1">
              <PropertyContact />
            </div>
          </div>
          {/*<PropertySimilar />*/}
        </div>
    </div>
  )
}
