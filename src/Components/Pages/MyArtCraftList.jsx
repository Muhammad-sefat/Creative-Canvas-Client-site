import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import MyCraft from "./MyCraft";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  const [customize, setCustomize] = useState([]);
  const [displayCustomize, setDisplayCustomize] = useState([]);

  console.log(crafts.customization);

  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);

  const handleFilter = (filter) => {
    console.log(filter);
    if (filter === "Yes") {
      const remoteJobs = customize.filter((job) => job.customization === "Yes");
      setDisplayCustomize(remoteJobs);
    } else if (filter === "No") {
      const onsiteJobs = customize.filter((job) => job.customization === "No");
      setDisplayCustomize(onsiteJobs);
    }
  };

  useEffect(() => {}, [crafts]);

  return (
    <div>
      <h2 className="text-3xl font-bold py-3 bg-orange-500 p-3 text-white rounded-md">
        My Arts and Crafts
      </h2>
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn my-5 text-lg font-semibold border border-orange-500"
        >
          Customization
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
        >
          <li
            onClick={() => handleFilter("Yes")}
            className="border border-orange-500 rounded-md"
          >
            <a>Yes</a>
          </li>
          <li
            onClick={() => handleFilter("No")}
            className="border border-orange-500 rounded-md"
          >
            <a>No</a>
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-5 py-5">
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
