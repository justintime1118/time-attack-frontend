import API from "@/api";
import { Brand } from "@/types/Brand.type";
import Link from "next/link";

async function BrandList() {
  const brandsList = await API.brands.getBrands();

  return (
    <>
      <Link className="flex justify-center items-center mb-4" href="/brands">
        ALL
      </Link>
      <ol className="grid grid-cols-6 gap-4">
        {brandsList.map((brand: Brand) => (
          <li key={brand.id}>
            <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default BrandList;
