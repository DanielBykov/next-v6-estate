import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import PropPageV1 from "@/app/property/[id]/_propPagev1/PropPageV1";
import {prisma} from "@/lib/prisma";
import {PROPERTY_PAGE_URI} from "@/app/property/const";
import { unstable_cache } from 'next/cache';

export default async function PropertyPage({params}) {
  const {id} = await params

  const getPropertyData = unstable_cache(
    async (id) => {
      return prisma.property.findUnique({
        where: {id: parseInt(id)},
        include: {agent: true}
      })
    },
    ['property-by-id', id],
    {
      revalidate: 60, // revalidate cache every 60 seconds
      tags: ['property']
    }
  );

  const propertyData = await getPropertyData(id);

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
