import { useLoaderData } from "react-router-dom";
import SingleCraftItem from "./SingleCraftItem";

const CraftItems = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold pt-8 text-orange-500">Our Crafts</h2>
      <p className="p-5 md:w-[80%] mx-auto font-semibold pt-3">
        Drawing, on the other hand, relies on lines, shapes, and shading to
        represent objects, scenes, or figures. From realistic portraits to
        abstract designs, drawings capture the essence of the subject with
        precision and creativity. Artists often use pencils, charcoal, ink, or
        digital tools to bring their ideas to life on paper or digital screens.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {allCrafts.slice(0, 6).map((craft) => (
          <SingleCraftItem key={craft._id} crafts={craft}></SingleCraftItem>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
