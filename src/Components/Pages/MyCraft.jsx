const MyCraft = ({ crafts }) => {
  const { craft, photo, price, rating, customization, stock } = crafts;
  console.log(crafts);
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
            <button className="btn bg-orange-500 text-white">Update</button>
            <button className="btn bg-orange-500 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraft;
