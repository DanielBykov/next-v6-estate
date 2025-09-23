import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import PropPageV1 from "@/app/property/[id]/_propPagev1/PropPageV1";
import {prisma} from "@/lib/prisma";
import {PROPERTY_PAGE_URI} from "@/app/property/const";
import {delay} from "@/lib/utils";

export default async function PropertyPage({params}) {
  const {id} = await params

  await delay(2000)
  const propertyData = await prisma.property.findUnique({
    where: {id: parseInt(id)},
    include: {agent: true}
  })

  return (
    <div>
      <Link
        href={"/"+PROPERTY_PAGE_URI}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to the property list
      </Link>

      <PropPageV1 propertyData={propertyData}/>

    </div>
  )
}
