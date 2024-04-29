import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const AddCraftItems = () => {
  const { user } = useContext(AuthContext);
  const handleCraftForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const craft = form.craft.value;
    const subcategory = form.subcategory.value;
    const stock = form.stock.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const process = form.process.value;
    const photo = form.photo.value;
    const Craft = {
      name,
      email,
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

    // send data

    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Craft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Craft Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleCraftForm}
        className="border border-amber-900 rounded-md  md:w-[90%] mx-auto my-5 p-8 bg-orange-300"
      >
        <h1 className="text-center text-3xl font-semibold py-3">
          Add New Craft
        </h1>
        <p className="md:w-[70%] mx-auto pb-5 text-center">
          {" "}
          Painting and drawing are timeless forms of artistic expression,
          allowing creators to convey emotions, stories, and ideas through the
          strokes of a brush or pencil. From intricate details in pencil
          sketches to vibrant hues in oil paintings, each piece is a unique
          reflection of the artist's vision and skill.
        </p>
        <div className="flex flex-col md:flex-row  gap-8 text-left">
          <div className="md:w-[50%]">
            <label className="font-semibold ">User Name</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="name"
              defaultValue={user?.displayName || "Muhammad Sefat"}
              readOnly
            />
            <label className="font-semibold ">Craft Name</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="craft"
              placeholder="Enter craft name"
            />
            <label className="font-semibold">Stock Status</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="stock"
              placeholder="Stock status"
            />
            <br />
            <label className="font-semibold ">Price</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="price"
              placeholder="Enter Price"
            />
            <br />
            <label className="font-semibold ">Customization</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="customization"
              placeholder="customization"
            />
          </div>
          <div className="md:w-[50%]">
            <label className="font-semibold ">User Email</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
            />
            <label className="font-semibold">Subcategory Name</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="subcategory"
              placeholder="Enter subcategory name"
            />

            <br />
            <label className="font-semibold">Photo URL</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="photo"
              placeholder="Enter photo URL"
            />

            <br />
            <label className="font-semibold ">Rating</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="rating"
              placeholder="Enter rating"
            />
            <br />
            <label className="font-semibold ">Processing Time</label>
            <br />
            <input
              className="border border-gray-500 p-2 rounded-md w-full mb-2"
              type="text"
              name="process"
              placeholder="Processing time"
            />
          </div>
        </div>
        <div className="text-left">
          <label className="font-semibold ">Short Description</label>
          <br />
          <textarea
            className="border border-gray-500 p-1 rounded-md w-full mb-2"
            type="text"
            name="description"
            placeholder="Enter short description"
          />
        </div>
        <input
          className="w-full bg-amber-600 text-white text-xl font-semibold p-2 rounded-md my-4"
          type="submit"
          value=" Add Craft"
        />
      </form>
    </div>
  );
};

export default AddCraftItems;
