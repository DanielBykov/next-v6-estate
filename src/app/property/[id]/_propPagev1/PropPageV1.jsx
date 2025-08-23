import PropertyDetails from "@/app/property/[id]/_propPagev1/PropertyDetails";
import PropertyHero from "@/app/property/[id]/_propPagev1/PropertyHero";
import PropertyContact from "@/app/property/[id]/_propPagev1/PropertyContact";

export default function PropPageV1({propertyData: d}) {
  const {
    price,
    address,
    bedrooms,
    bathrooms,
    sqm,
    description,
    agent: {name, phone, email, info, photo}
  } = d
  return (
    <div className="min-h-screen bg-background">
      {/*<PropertyHeader />*/}
      <PropertyHero
        price={price}
        address={address}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        sqm={sqm}
      />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyDetails description={description}/>
            </div>
            <div className="lg:col-span-1">
              <PropertyContact
                name={name}
                phone={phone}
                email={email}
                info={info}
                photo={photo}
              />
            </div>
          </div>
          {/*<PropertySimilar />*/}
        </div>
    </div>
  )
}
