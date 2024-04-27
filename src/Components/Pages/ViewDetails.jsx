import { useLoaderData, useParams } from "react-router-dom";

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
      <img src={photo} alt="" />
      <h2>{craft}</h2>
    </div>
  );
};

export default ViewDetails;
