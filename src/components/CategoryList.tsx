import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import CatSlider from "./CatSlider";

const Category = [
  {
    id: 0,
    image: "https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg",
    category: "Shirt",
  },
  {
    id: 1,
    image: "https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg",
    category: "Business Formal",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg",
    category: "T-Shirt",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4980538/pexels-photo-4980538.jpeg",
    category: "Singlets",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/10870295/pexels-photo-10870295.jpeg",
    category: "Perfumes",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3087891/pexels-photo-3087891.jpeg",
    category: "Bikini",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3259599/pexels-photo-3259599.jpeg",
    category: "Category Name",
  },
];

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const collection = await wixClient.collections.queryCollections().find();

  return (
    <>
      <div className="mt-12 px-8 overflow-x-scroll scroll-hide">
        {/* <div className="flex gap-4 md:gap-8 min-w-[100%] cursor-grabbing">
          {collection?.items.map((categories) => (
            <Link
              key={categories._id}
              href={`/list?cat=${categories.slug}`}
              className="flex flex-col flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 transition-all ease-linear duration-300 hover:scale-[102%]"
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={categories.media?.mainMedia?.image?.url || "cat.png"}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide">
                {categories?.name}
              </h1>
            </Link>
          ))}
        </div> */}

        <CatSlider
          collection={{
            items: collection.items
              .filter((item) => typeof item._id === "string" && typeof item.slug === "string")
              .map((item) => ({
                ...item,
                _id: item._id as string,
                slug: item.slug as string,
                name: typeof item.name === "string" ? item.name : "Unnamed Category",
              })),
          }}
        />
      </div>
    </>
  );
};

export default CategoryList;
