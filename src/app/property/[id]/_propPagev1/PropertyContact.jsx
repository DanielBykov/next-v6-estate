import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ButtonV1} from "@/_UI/_shadcnCustom/ButtonV1";
import { Phone, Mail, MessageSquare } from "lucide-react"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export default function PropertyContact(props) {
  const {
    name,
    phone,
    email,
    info,
    photo,
  } = props
  return (
    <div className="space-y-6">
      {/* Agent Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Contact Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/real-estate-agent-headshot.png" alt="Agent" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-primary">{name}</h3>
              <p className="text-sm text-muted-foreground">{info}</p>
              <p className="text-sm text-muted-foreground">Premium Properties Ltd [hc]</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-accent" />
              <span>{email}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <ButtonV1 className="flex-1 bg-accent hover:bg-accent/90">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </ButtonV1>
            <ButtonV1 variant="outline" className="flex-1 bg-transparent">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </ButtonV1>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Send Enquiry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+64 21 123 4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="I'm interested in this property. Please contact me to arrange a viewing."
              rows={4}
            />
          </div>

          <ButtonV1 className="w-full bg-accent hover:bg-accent/90">Send Enquiry</ButtonV1>
        </CardContent>
      </Card>

      {/* Mortgage Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Mortgage Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount</Label>
            <Input id="loanAmount" placeholder="$1,000,000" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deposit">Deposit %</Label>
              <Input id="deposit" placeholder="20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Term (years)</Label>
              <Input id="term" placeholder="30" />
            </div>
          </div>

          <ButtonV1 variant="outline" className="w-full bg-transparent">
            Calculate Repayments
          </ButtonV1>

          <div className="text-center p-4 bg-card rounded-lg">
            <p className="text-sm text-muted-foreground">Estimated weekly payment</p>
            <p className="text-2xl font-bold text-accent">$1,247</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
