import React from "react";

const Hero = () => {
  return (
    <div className="w-full border-olive-600  text-center">
      <div className=" py-15  md:w-[59%] lg:w-[48%] flex flex-col gap-5 mx-auto px-2 ">
        <h1 className="md:text-5xl text-4xl lg:text-7xl font-medium">
          Explore Countries Around the World
        </h1>
        <p className="md:text-base text-sm text-[#627382] px-7">
          Discover the beauty, culture, and diversity of countries across the
          globe. Start your journey today and explore the wonders waiting in
          every corner of the world.
        </p>
      </div>
    </div>
  );
};

export default Hero;
