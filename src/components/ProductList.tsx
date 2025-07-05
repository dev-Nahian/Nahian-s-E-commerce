import Image from "next/image";
import Link from "next/link";


const featureProduct = [
    {
        id: 0,
        imageOne: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg',
        imageTwo: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
        productName: 'Product Name',
        productPrice: '$49',
        productDescription: 'My Description'
    },
    {
        id: 1,
        imageOne: 'https://images.pexels.com/photos/3259599/pexels-photo-3259599.jpeg',
        imageTwo: 'https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg',
        productName: 'Product Name',
        productPrice: '$49',
        productDescription: 'My Description'
    },
    {
        id: 2,
        imageOne: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
        imageTwo: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg',
        productName: 'Product Name',
        productPrice: '$49',
        productDescription: 'My Description'
    },
    {
        id: 3,
        imageOne: 'https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg',
        imageTwo: 'https://images.pexels.com/photos/3259599/pexels-photo-3259599.jpeg',
        productName: 'Product Name',
        productPrice: '$49',
        productDescription: 'My Description'
    },
]



const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {featureProduct.map((product)=>(
            <Link
            key={product.id}
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                <Image
                    src={product.imageOne}
                    alt=""
                    fill
                    sizes="25vw"
                    className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-linear duration-500 "
                />
                <Image
                    src={product.imageTwo}
                    alt=""
                    fill
                    sizes="25vw"
                    className=" absolute object-cover rounded-md"
                />
                </div>

                <div className="flex justify-between ">
                    <span className="font-medium">{product.productName}</span>
                    <span className="font-semibold">{product.productPrice}</span>
                </div>

                <div className="text-sm text-gray-500">
                    {product.productDescription}
                </div>

                <button className="rounded-2xl ring-1 ring-nahian text-nahian w-max py-2 px-4 text-xs hover:bg-nahian hover:text-white">Add to Cart</button>
            </Link>
        ))}


    </div>
  );
};

export default ProductList;
