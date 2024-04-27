import { useLoaderData } from "react-router-dom";
import CraftTable from "./CraftTable";

const AllCartCraftItems = () => {
  const craftItem = useLoaderData();
  console.log(craftItem);
  return (
    <div>
      <div className="text-2xl bg-orange-500 text-center p-5 my-5 font-semibold text-white">
        Our All Arts And Crafts Here
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th></th>
              <th>User Name</th>
              <th>Craft Name</th>
              <th>Subcategory</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {craftItem.map((crafts, index) => (
              <tr key={crafts._id}>
                <th>{index + 1}</th>
                <td>{crafts.name}</td>
                <td>{crafts.craft}</td>
                <td>{crafts.subcategory}</td>
                <td>{crafts.price}</td>
                <td>
                  <button className="btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {craftItem.map((craft) => (
        <CraftTable key={craft._id} crafts={craft}></CraftTable>
      ))} */}
    </div>
  );
};

export default AllCartCraftItems;
