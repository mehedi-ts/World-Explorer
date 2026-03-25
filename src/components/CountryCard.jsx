import { Landmark, Map, UserRound } from "lucide-react";
import React from "react";

const CountryCard = ({ country, clickHandle }) => {
  const { name, flags, region, population, capital } = country;
  console.log(country);
  console.log(flags.flags.png);

  return (
    <>
      <div className="card flex flex-col gap-2 border p-4 bg-white/9 backdrop-blur-2xl border-white/50">
        <div className="img  w-1/4 max-h-18 overflow-hidden mx-auto">
          <img src={flags.flags.png} alt={flags.flags.alt} />
        </div>
        <div className="nam">
          <p className="text-sm text-[#88959f]">Country name</p>
          <h3 className="text-xl font-bold">{name.common}</h3>
        </div>
        <div className="list">
          <p className="flex items-center justify-between text-lg text-[#c0c5c9] mr-5">
            <span className="flex items-center gap-2">
              <Map size={20}></Map>Region
            </span>{" "}
            <span>{region.region}</span>
          </p>
          <p className="flex items-center justify-between text-lg text-[#c0c5c9] mr-5">
            <span className="flex items-center gap-2">
              <UserRound size={20}></UserRound>Population
            </span>{" "}
            <span>{population.population}</span>
          </p>
          <p className="flex items-center justify-between text-lg text-[#c0c5c9] mr-5">
            <span className="flex items-center gap-2">
              <Landmark size={20}></Landmark>Capital
            </span>{" "}
            <span>{capital.capital[0]}</span>
          </p>
        </div>
        <div className=" w-[80%] mt-3 mx-auto">
          <button
            onClick={() => clickHandle()}
            className="btn w-full btn-outline btn-accent px-7 rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
