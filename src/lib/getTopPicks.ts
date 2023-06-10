export default async function getTopPicks() {

    const res = await fetch('https://fakestoreapi.com/products?limit=4')

    if(!res.ok) throw new Error('Failed to fetch top picks')

    return res.json()
}