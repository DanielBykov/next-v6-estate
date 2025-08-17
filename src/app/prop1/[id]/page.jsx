import {ArrowLeftIcon} from "lucide-react";
import Link from "next/link";

export default async function Page({params}) {
  const {id: propId} = await params

  return (
    <div>
      <Link
        href="/prop1"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to a property list
      </Link>
      <h1>Property Page</h1>
      {propId}

    </div>
  )
}
