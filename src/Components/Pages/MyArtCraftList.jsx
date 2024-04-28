import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import MyCraft from "./MyCraft";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-3xl font-bold py-3">My Arts and Crafts</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {crafts.map((craft) => (
          <MyCraft
            key={craft._id}
            craftss={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></MyCraft>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
