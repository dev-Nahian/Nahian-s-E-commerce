import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

 

  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[160px] relative">
      {/* CAMPAIGN */}
      <div className="hidden md:flex bg-pink-50 mt-5 px-4 justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8 ">
          <h2 className="capitalize text-4xl font-semibold leading-[48px] text-gray-700 w-[55%]">
            grab up to 50% off on selected product
          </h2>
          <button className="rounded-3xl bg-nahian w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* FILTER */}
      <Filter />

      {/* Products */}
      <h2 className="mt-12 text-xl font-semibold capitalize">shoes For You</h2>
      <Suspense fallback={'loading...'}>
        <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams} />
      </Suspense>
    </section>
  );
};

export default ListPage;
