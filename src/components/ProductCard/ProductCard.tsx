import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brandId: number;
    brand: {
      id: number;
      nameKr: string;
      nameEn: string;
    };
  };
}

function ProductCard({ product: product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-md text-center flex flex-col items-center"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={product.imgSrc}
          alt={product.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <h6>{product.name}</h6>
    </Link>
  );
}

export default ProductCard;
