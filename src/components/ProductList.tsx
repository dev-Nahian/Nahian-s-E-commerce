import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

// const featureProduct = [
//   {
//     id: 0,
//     imageOne:
//       "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg",
//     imageTwo:
//       "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
//     productName: "Product Name",
//     productPrice: "$49",
//     productDescription: "My Description",
//   },
//   {
//     id: 1,
//     imageOne:
//       "https://images.pexels.com/photos/3259599/pexels-photo-3259599.jpeg",
//     imageTwo:
//       "https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg",
//     productName: "Product Name",
//     productPrice: "$49",
//     productDescription: "My Description",
//   },
//   {
//     id: 2,
//     imageOne:
//       "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
//     imageTwo:
//       "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg",
//     productName: "Product Name",
//     productPrice: "$49",
//     productDescription: "My Description",
//   },
//   {
//     id: 3,
//     imageOne:
//       "https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg",
//     imageTwo:
//       "https://images.pexels.com/photos/3259599/pexels-photo-3259599.jpeg",
//     productName: "Product Name",
//     productPrice: "$49",
//     productDescription: "My Description",
//   },
// ];

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  if (!categoryId) {
    console.warn("Missing categoryId. Returning empty product list.");
    return <div>No category selected.</div>;
  }

  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .hasSome("collectionIds", [categoryId])
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res?.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={"/" + product?.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-linear duration-500 "
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className=" absolute object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-between ">
            <span className="font-medium">{product?.name}</span>
            <span className="font-semibold">${product?.priceData?.price}</span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "Description"
                  )?.description || ""
                ),
              }}
            />
          )}

          <button className="rounded-2xl ring-1 ring-nahian text-nahian w-max py-2 px-4 text-xs hover:bg-nahian hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
