import API from "@/api";
import ProductCardsList from "@/components/ProductCardsList";

// TODO: 60초에 한 번씩 새롭게 Static Site를 Generate해야 합니다.

async function getProducts() {
  return await API.products.getProducts();
}

async function TrendingProducts() {
  const products = await getProducts();
  return (
    <ProductCardsList title="이 주의 인기 강의" products={products || []} />
  );
}

export default TrendingProducts;
