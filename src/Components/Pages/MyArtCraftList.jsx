import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  console.log(crafts);

  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);
  return (
    <div>
      <h2>My Arts and Crafts</h2>
    </div>
  );
};

export default MyArtCraftList;
