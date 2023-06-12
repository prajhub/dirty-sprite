export default async function getTopJewel() {

    const res = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')

    if(!res.ok) throw new Error('Failed to fetch top picks')

    return res.json()
}