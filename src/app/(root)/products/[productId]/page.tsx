import API from "@/api";
import Page from "@/components/Page";
import Image from "next/image";
import AddToCartButton from "./_components/AddToCartButton";

async function ProductDetailPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const product = await API.products.getProduct(Number(productId));

  return (
    <Page>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div>
          <Image
            src={product.imgSrc}
            alt={product.name}
            width={500}
            height={650}
            unoptimized
          />
        </div>
        <div className="py-8 flex flex-col">
          <h6 className=" text-base font-bold mb-4">{product.name}</h6>
          <AddToCartButton product={product} />
        </div>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
