import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const Crafts = useLoaderData();
  const {
    craft,
    subcategory,
    photo,
    price,
    rating,
    stock,
    process,
    description,
    customization,
  } = Crafts;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={photo}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-left"
          >
            <h1 className="text-4xl font-bold pb-2">{craft}</h1>
            <h2 className="text-2xl font-semibold">{subcategory}</h2>
            <p className="py-2 font-semibold">{description}</p>
            <div className="flex justify-between items-center py-3">
              <p className="text-lg font-semibold">Price : {price}</p>
              <p className="text-lg font-semibold">Rating : {rating}</p>
              <p className="text-lg font-semibold">
                Customization : {customization}
              </p>
            </div>
            <hr className="py-3" />
            <div className="flex justify-between items-center gap-5">
              <p className="text-lg font-semibold border border-orange-500 p-3 rounded-md">
                Stock Status : {stock}
              </p>
              <p className="text-lg font-semibold border border-orange-500 p-3 rounded-md">
                Processing Time : {process}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
