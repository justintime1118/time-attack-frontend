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
      <h3 className=" p-10 text-3xl font-bold flex justify-center items-center mb-10 mt-10">
        {title}
      </h3>
      <ol className="grid grid-cols-6 gap-4">
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
