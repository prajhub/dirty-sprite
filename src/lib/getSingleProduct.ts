export default async function getProduct(productId: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) throw new Error("Failed to load product");

  return res.json();
}
