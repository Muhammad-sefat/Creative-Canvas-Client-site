import { useLoaderData } from "react-router-dom";

const UniqueCraftDetails = () => {
  const UniqueCrafts = useLoaderData();
  const { photo, name, subcategory, description, price, rating, process } =
    UniqueCrafts;
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex flex-col text-left justify-center flex-1 p-6 dark:bg-gray-50"
            >
              <h3 className="text-3xl font-bold">{name}</h3>
              <h4 className="pt-3 text-xl font-medium">{subcategory}</h4>
              <p className="my-4 dark:text-gray-600 font-medium">
                {description}
              </p>
              <hr />
              <div className="flex justify-between items-center py-5">
                <p className=" font-medium border border-orange-500 rounded-md p-2">
                  Price : {price}
                </p>
                <p className=" font-medium border border-orange-500 rounded-md p-2">
                  Rating : {rating}
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className=" py-2 text-lg font-semibold">
                  Process_Time : {process}
                </p>
                <p className=" pb-2 text-lg font-semibold">
                  Made By : Alvee Peterson
                </p>
              </div>
              <p className="  text-lg font-semibold">Customization : Yes</p>
            </div>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={photo}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueCraftDetails;
