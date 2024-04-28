import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = ({ craftss, crafts, setCrafts }) => {
  const { craft, photo, price, rating, customization, stock, _id } = craftss;

  const deleteCraft = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaning = crafts.filter((crf) => crf._id !== id);
              setCrafts(remaning);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{craft}</h2>
          <div className="flex justify-between items-center gap-2">
            <p className="font-medium border border-orange-500 p-1 rounded-md">
              Price : {price}
            </p>
            <p className="font-medium border border-orange-500 p-1 rounded-md">
              Rating : {rating}
            </p>
          </div>
          <hr className="my-2" />
          <div className="text-left pb-3">
            <p className="font-medium">Customization : {customization}</p>
            <p className="font-medium">Stock Status : {stock}</p>
          </div>
          <div className="flex justify-between items-center ">
            <Link to={`/updateCraft/${_id}`}>
              {" "}
              <button className="btn bg-orange-500 text-white">Update</button>
            </Link>
            <button
              onClick={() => deleteCraft(_id)}
              className="btn bg-orange-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraft;
