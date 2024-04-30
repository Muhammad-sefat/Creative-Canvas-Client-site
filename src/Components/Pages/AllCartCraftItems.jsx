import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllCartCraftItems = () => {
  const craftItem = useLoaderData();
  return (
    <div>
      <div className="text-3xl bg-orange-500 text-center p-5 my-5 font-bold text-white">
        <Typewriter
          words={["Our All Arts And Crafts Here"]}
          loop={1}
          typeSpeed={120}
          deleteSpeed={80}
        />
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
                  <Link to={`/viewdetails/${crafts._id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCartCraftItems;
