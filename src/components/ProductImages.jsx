"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/1861907/pexels-photo-1861907.jpeg",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg",
//   },
// ];

const ProductImages = ({ items }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 ">
        {items.map((img, index) => (
          <div
            key={img._id}
            className="w-full h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(index)}
          >
            <Image
              src={img?.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
