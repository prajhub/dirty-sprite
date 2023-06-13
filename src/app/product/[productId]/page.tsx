import getProduct from "@/lib/getSingleProduct"
import ProductImage from "@/components/ProductImage";
import {notFound} from 'next/navigation'

type Params = {
    params: {
        productId: string
    }
}


export default async  function ProductPage({ params: { productId }}: Params) {

    
    try {

        const productData: Promise<AllProducts> = getProduct(productId)

        const product = await productData

        return (
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
            <ProductImage product={product} />
    
            <div className="divide-y">
              <div className="space-y-2 pb-8">
                <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
                <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                  ${product.price}
                </h2>
              </div>
    
              <div className="pt-8">
                <p className="text-xs md:text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        );
      } catch (error) {
        notFound();
      }

    

}