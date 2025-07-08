"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";



// Define the Category type if not imported from elsewhere
type Category = {
  _id: string;
  slug: string;
  name: string;
  media?: {
    mainMedia?: {
      image?: {
        url?: string;
      };
    };
  };
};

interface CatSliderProps {
  collection: {
    items: Category[];
  };
}

const CatSlider = ({ collection }: CatSliderProps) => {
  return (
    <Swiper
      slidesPerView={5.4}
      spaceBetween={30}
      freeMode={true}
      breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          570: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4.4,
            spaceBetween: 50,
          },
      }}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {collection?.items.map((categories: Category) => (
        <SwiperSlide key={categories._id}>
          <Link
            href={`/list?cat=${categories.slug}`}
            className="flex flex-col flex-shrink-0 w-full transition-all rounded-md ease-linear duration-300 hover:scale-[102%]"
          >
            <div className="relative bg-slate-100 w-full h-[280px] rounded-md md:h-96">
              <Image
                src={categories.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="100%"
                className="object-cover w-full"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {categories?.name}
            </h1>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CatSlider;
