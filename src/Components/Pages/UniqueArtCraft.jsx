import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleUniqueArtCraft from "./SingleUniqueArtCraft";
import { Typewriter } from "react-simple-typewriter";

const UniqueArtCraft = () => {
  const uniqueCraft = useLoaderData();
  const { photo, name, subcategory, description, price, rating, process } =
    uniqueCraft;

  const [artCrafts, setArtCraft] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-server-side-muhammad-sefat.vercel.app/subcraft")
      .then((res) => res.json())
      .then((data) => {
        setArtCraft(data);
      });
  }, []);

  const uniqueValue = artCrafts.filter(
    (artcraft) => uniqueCraft.subcategory === artcraft.subcategory
  );

  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={photo}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col text-left justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">{name}</h3>
              <h4 className="pt-3 text-xl font-medium">{subcategory}</h4>
              <p className="my-4 dark:text-gray-600 font-medium">
                {description}
              </p>
              <hr />
              <div className="flex justify-between items-center py-5">
                <p className=" font-medium border border-orange-500 rounded-md p-2">
                  Price : {price}
                </p>
                <p className=" font-medium border border-orange-500 rounded-md p-2">
                  Rating : {rating}
                </p>
              </div>
              <hr />
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className=" py-2 text-lg font-semibold">
                  Process_Time : {process}
                </p>
                <p className=" pb-2 text-lg font-semibold">
                  Made By : Alvee Peterson
                </p>
              </div>
              <p className="  text-lg font-semibold">Customization : Yes</p>
            </div>
          </div>
        </div>
      </section>
      <p className="text-2xl md:text-4xl font-bold py-5 text-center text-orange-500">
        Releted{" "}
        <span className="text-lime-500">
          <Typewriter
            words={["Art And Craft"]}
            loop
            typeSpeed={70}
            deleteSpeed={100}
          ></Typewriter>
        </span>
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {uniqueValue.slice(0, 3).map((craft) => (
          <SingleUniqueArtCraft
            key={craft._id}
            crafts={craft}
          ></SingleUniqueArtCraft>
        ))}
      </div>
    </div>
  );
};

export default UniqueArtCraft;
