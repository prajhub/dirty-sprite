

export default async function getTopMensClothing() {
    const res = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");


    if(!res.ok) throw new Error('Failed to fetch top picks')

    return res.json()
}   