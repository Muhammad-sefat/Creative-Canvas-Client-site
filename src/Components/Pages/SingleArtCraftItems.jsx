const SingleArtCraftItems = ({ artCraft }) => {
  const { name, subcategory, description, photo } = artCraft;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="image" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <h3 className="text-xl font-medium">{subcategory}</h3>
          <p className="font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArtCraftItems;
