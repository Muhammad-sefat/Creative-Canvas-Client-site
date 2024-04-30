import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const singleCraft = useLoaderData();
  const {
    _id,
    craft,
    subcategory,
    stock,
    description,
    price,
    rating,
    customization,
    process,
    photo,
  } = singleCraft;
  const handleUpadeteCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const craft = form.craft.value;
    const subcategory = form.subcategory.value;
    const stock = form.stock.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const process = form.process.value;
    const photo = form.photo.value;
    const updateCraft = {
      craft,
      subcategory,
      stock,
      description,
      price,
      rating,
      customization,
      process,
      photo,
    };

    fetch(`https://b9a10-server-side-muhammad-sefat.vercel.app/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Craft Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleUpadeteCraft}
        className="border border-orange-700 rounded-md  md:w-[90%] mx-auto my-5 p-8 "
      >
        <h1 className="text-center text-3xl text-orange-600 font-bold py-5">
          Update Your Craft
        </h1>

        <div className="flex flex-col md:flex-row  md:gap-8 text-left">
          <div className="md:w-[50%]">
            <label className="font-semibold ">Craft Name</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="craft"
              placeholder="Enter craft name"
              defaultValue={craft}
            />
            <label className="font-semibold">Stock Status</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="stock"
              placeholder="Stock status"
              defaultValue={stock}
            />
            <br />
            <label className="font-semibold ">Price</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="price"
              placeholder="Enter Price"
              defaultValue={price}
            />
            <br />
            <label className="font-semibold ">Customization</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="customization"
              placeholder="customization"
              defaultValue={customization}
            />
          </div>
          <div className="md:w-[50%]">
            <label className="font-semibold ">Subcategory Name</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="subcategory"
              placeholder="Enter subcategory name"
              defaultValue={subcategory}
            />

            <br />
            <label className="font-semibold">Photo URL</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              defaultValue={photo}
            />
            <br />
            <label className="font-semibold ">Rating</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="rating"
              placeholder="Enter rating"
              defaultValue={rating}
            />
            <br />
            <label className="font-semibold ">Processing Time</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="process"
              placeholder="Processing time"
              defaultValue={process}
            />
          </div>
        </div>
        <div className="text-left">
          <label className="font-semibold ">Short Description</label>
          <br />
          <textarea
            className="border border-gray-500 p-2 rounded-md w-full mb-2"
            type="text"
            name="description"
            placeholder="Enter short description"
            defaultValue={description}
          />
        </div>
        <input
          className="w-full bg-amber-600 text-white text-xl font-semibold p-2 rounded-md my-4"
          type="submit"
          value=" Update Craft"
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
