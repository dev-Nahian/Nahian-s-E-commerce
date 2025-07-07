import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "../../components/ProductImages";
import Add from "@/components/Add";

const SinglePage = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[160px] relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-medium capitalize">Product Name</h2>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus
          magni sit sequi fugiat, nemo tenetur consectetur dicta error id?
        </p>

        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />

        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />

        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
            quos nam laboriosam corporis officia eius ipsam adipisci nesciunt
            nisi.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
            quos nam laboriosam corporis officia eius ipsam adipisci nesciunt
            nisi.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
            quos nam laboriosam corporis officia eius ipsam adipisci nesciunt
            nisi.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SinglePage;
