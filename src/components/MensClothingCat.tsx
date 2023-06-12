
import getTopMensClothing from "@/lib/getTopMensClothing"
import Image from "next/image"
import Link from "next/link"

export default async function MesClothingCat() {
    const topMensClothing: Promise<AllProducts[]> = getTopMensClothing()
    const picks = await topMensClothing


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-wide text-gray-900 ">Men's Clothing</h2>
                
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {
                    picks.map((pick) => (
                        <div 
                         key={
                                pick.id
                            }
                            className="group relative border-b ">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image src={
                                        pick.image
                                    }
                                    width={200}
                                    height={200}
                                    alt={
                                        pick.title
                                    }
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link href={
                                            `/product/${pick.id}`
                                        }>
                                            <span aria-hidden="true" className="relative tracking-wide  font-semibold"> {
                                            pick.title
                                        } </span></Link>
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">
                                        {
                                        product.color
                                    }</p> */}
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                   ${
                                    pick.price
                                }</p>
                            </div>
                        </div>
                    ))
                } </div>
            </div>
        </div>
    )
}