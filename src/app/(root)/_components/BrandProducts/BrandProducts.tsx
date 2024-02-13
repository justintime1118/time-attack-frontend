export const revalidate = 1; // revalidate every minute

import API from "@/api";
import ProductCardsList from "@/components/ProductCardsList";

async function BrandProducts({
  title,
  brandId,
}: {
  title: string;
  brandId: number;
}) {
  const brand = await API.brands.getProductsByBrand(brandId);
  return <ProductCardsList title={title} products={brand.products || []} />;
}

export default BrandProducts;
