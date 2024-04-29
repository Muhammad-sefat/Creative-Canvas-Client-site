import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import MyCraft from "./MyCraft";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  const [customize, setCustomize] = useState([]);
  const [displayCustomize, setDisplayCustomize] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        console.log(data);
      });
  }, [user]);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setDisplayCustomize(customize);
    } else if (filter === "Yes") {
      const custom = customize.filter((cus) => cus.customization === "Yes");
      setDisplayCustomize(custom);
    } else if (filter === "No") {
      const customz = customize.filter((cus) => cus.customization === "No");
      setDisplayCustomize(customz);
    }
  };

  const UniqueData = (data, property) => {
    let newValue = data.map((currElm) => {
      return currElm[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };

  const filterOnlyData = UniqueData(crafts, "customization");

  useEffect(() => {
    if (crafts.length > 0) {
      const uniqueValue = crafts.filter((currentElm) => {
        return filterOnlyData.includes(currentElm.customization);
      });
      setCustomize(uniqueValue);
      setDisplayCustomize(uniqueValue);
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold py-3 bg-orange-500 p-3 text-white rounded-md">
        My Arts and Crafts
      </h2>
      <div className="dropdown dropdown-bottom flex items-center justify-center gap-5">
        <p className=" text-3xl font-bold">Filter By : </p>
        <div
          tabIndex={0}
          role="button"
          className="btn my-5 text-lg font-semibold border border-orange-500"
        >
          {" "}
          Customization
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
        >
          <li
            onClick={() => handleFilter("All")}
            className="border border-orange-500 rounded-md"
          >
            <a>All</a>
          </li>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {displayCustomize.map((craft) => (
          <MyCraft
            key={craft._id}
            crafts={craft}
            displayCustomize={displayCustomize}
            setDisplayCustomize={setDisplayCustomize}
          ></MyCraft>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
