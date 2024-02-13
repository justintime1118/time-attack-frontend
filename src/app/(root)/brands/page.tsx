"use client";

import Page from "@/components/Page";
import { useSearchParams } from "next/navigation";
import AllProducts from "../_components/AllProducts";
import BrandProducts from "../_components/BrandProducts";
import BrandList from "./_component/BrandList";

function ByBrandPage() {
  const searchParams = useSearchParams();
  const brandId = Number(searchParams.get("brandId"));

  return (
    <Page>
      <section>
        <h3 className=" p-10 text-3xl font-bold flex justify-center items-center mb-10 mt-10">
          Brands
        </h3>
      </section>
      <BrandList />
      {brandId ? (
        <>
          <section>
            <BrandProducts title="" brandId={brandId} />
          </section>
        </>
      ) : (
        <>
          <section>
            <AllProducts title="" />
          </section>
        </>
      )}
    </Page>
  );
}

export default ByBrandPage;
