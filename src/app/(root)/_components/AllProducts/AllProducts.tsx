export const revalidate = 1; // revalidate every minute

import API from "@/api";
import ProductCardsList from "@/components/ProductCardsList";

async function AllProducts({ title }: { title: string }) {
  const products = await API.products.getProducts();
  return <ProductCardsList title={title} products={products || []} />;
}

export default AllProducts;
