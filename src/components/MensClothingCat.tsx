import getTopMensClothing from "@/lib/getTopMensClothing"
import ProductImage from "./ProductImage"
import Link from "next/link"

export default async function MesClothingCat() {
  const topMensClothing: Promise<AllProducts[]> = getTopMensClothing()
  const picks = await topMensClothing

  return (
    <section className="flex flex-col mt-3 mx-auto max-w-7xl">
      <div className="my-4">
        <span className="font-semibold text-lg">Men&apos;s Clothing</span>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {picks.map((pick) => (
          <Link
            key={pick.id}
            href={`/product/${pick.id}`}
            className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
          >
            <div className="relative max-h-72 flex-1">
              <ProductImage product={pick} fill />
            </div>
            <div className="font-semibold flex items-center justify-between mt-4 mb-1">
              <p className="w-44 truncate">{pick.title}</p>
              <p className="text-gray-600">${pick.price}</p>
            </div>
            <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
              {pick.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
