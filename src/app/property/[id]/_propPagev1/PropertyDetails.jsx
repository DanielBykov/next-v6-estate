import { MapPin, Home, Car } from "lucide-react"
import { Badge_ as Badge } from "@/components/ui/badge"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function PropertyDetails() {
  return (
    <div className="space-y-6">
      {/* Property Description */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Property Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This stunning contemporary home offers the perfect blend of modern luxury and comfortable living. Located in
            the heart of Auckland Central, this property features an open-plan design with high-end finishes throughout.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The spacious living areas flow seamlessly to a private outdoor entertaining area, perfect for hosting
            friends and family. The gourmet kitchen boasts premium appliances and stone countertops, while the master
            suite includes a walk-in wardrobe and ensuite bathroom.
          </p>
        </CardContent>
      </Card>

      {/* Property Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Property Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Badge variant="outline" className="justify-start p-3">
              <Home className="h-4 w-4 mr-2" />4 Bedrooms
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              <Home className="h-4 w-4 mr-2" />3 Bathrooms
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              <Car className="h-4 w-4 mr-2" />2 Car Garage
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Air Conditioning
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Dishwasher
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Garden
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Alarm System
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Built-in Wardrobes
            </Badge>
            <Badge variant="outline" className="justify-start p-3">
              Outdoor Entertainment
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
            <span className="text-muted-foreground">Interactive Map</span>
          </div>
          <p className="text-muted-foreground">
            Located in the prestigious Auckland Central area, this property offers easy access to shopping, dining, and
            public transport. Walking distance to parks and schools.
          </p>
        </CardContent>
      </Card>

    </div>
  )
}
