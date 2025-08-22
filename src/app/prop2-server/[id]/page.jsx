import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import PropPageV1 from "@/app/prop2-server/[id]/_propPagev1/PropPageV1";
import {prisma} from "@/lib/prisma";

export default async function PropertyPage({params}) {
  const {id} = await params

  const property = await prisma.property.findUnique({
    where: {id}
  })

  // prisma.property.

  console.log('d256 property:', property)

  return (
    <div>
      <Link
        href="/prop2-server"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to a property list (PROP 2 Server)
      </Link>

      <PropPageV1 id={id}/>

    </div>
  )
}
