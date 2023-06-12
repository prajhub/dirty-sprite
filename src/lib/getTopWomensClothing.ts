

export default async function getTOpWomensClothing() {
    const res = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");


    if(!res.ok) throw new Error('Failed to fetch top picks')

    return res.json()
}   