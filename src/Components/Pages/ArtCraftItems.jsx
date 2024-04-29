import { useEffect, useState } from "react";
import SingleArtCraftItems from "./SingleArtCraftItems";

const ArtCraftItems = () => {
  const [artCrafts, setArtCraft] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subcraft")
      .then((res) => res.json())
      .then((data) => {
        setArtCraft(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold pt-8 text-orange-500">Art & Craft</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {artCrafts.map((artCraft) => (
          <SingleArtCraftItems
            key={artCraft._id}
            artCraft={artCraft}
          ></SingleArtCraftItems>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftItems;
