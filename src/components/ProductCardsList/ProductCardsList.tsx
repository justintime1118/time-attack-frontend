import { ComponentProps } from "react";
import ProductCard from "../ProductCard";

interface ProductCardsListProps {
  title: string;
  products: Array<ComponentProps<typeof ProductCard>["product"]>;
}

function ProductCardsList({
  title,
  products: products,
}: ProductCardsListProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      <ol className="grid grid-cols-6 gap-x-5 gap-y-7">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProductCardsList;
