import React, { use } from "react";
import CountryCard from "./CountryCard";

const Countries = ({ countriesPromis, clickHandle }) => {
  const countriesData = use(countriesPromis);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-6">
      {countries.map((country, index) => {
        return (
          <CountryCard
            key={index}
            country={country}
            clickHandle={clickHandle}
          ></CountryCard>
        );
      })}
    </div>
  );
};

export default Countries;
