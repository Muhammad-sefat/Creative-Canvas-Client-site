import { useLoaderData } from "react-router-dom";

const ViewCraft = () => {
  const crafts = useLoaderData();
  const {
    craft,
    photo,
    subcategory,
    description,
    price,
    rating,
    stock,
    customization,
    process,
  } = crafts;
  return (
    <div className="p-5 md:px-10 mx-auto">
      <p className="bg-orange-500 p-5 rounded-md font-semibold text-3xl text-white">
        Details {subcategory}
      </p>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={photo}
              alt="Image"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none ">{craft}</h1>
            <p className="text-xl font-semibold py-3">{subcategory}</p>
            <p className="mb-3 text-lg sm:mb-12">{description}</p>
            <hr />
            <div className="flex justify-between items-center py-4 gap-5">
              <p className="border border-orange-600 font-medium p-2 rounded-md">
                Price : {price}
              </p>
              <p className="border border-orange-600 font-medium p-2 rounded-md">
                Rating : {rating}
              </p>
              <p className="border border-orange-600 font-medium p-2 rounded-md">
                Customization : {customization}
              </p>
            </div>
            <div className="flex justify-between items-center py-4 gap-5">
              <p className="border border-orange-600 font-medium p-2 rounded-md">
                Stock Status : {stock}
              </p>
              <p className="border border-orange-600 font-medium p-2 rounded-md">
                Processing Time : {process}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewCraft;
