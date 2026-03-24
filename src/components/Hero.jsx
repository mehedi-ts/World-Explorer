import React from "react";

const Hero = () => {
  return (
    <div className="w-full border border-olive-600  text-center">
      <div className=" py-20  md:w-[48%] flex flex-col gap-5 mx-auto ">
        <h1 className="text-7xl font-medium">
          Explore Countries Around the World
        </h1>
        <p className="text-base text-[#627382] px-7">
          Discover the beauty, culture, and diversity of countries across the
          globe. Start your journey today and explore the wonders waiting in
          every corner of the world.
        </p>
      </div>
    </div>
  );
};

export default Hero;
