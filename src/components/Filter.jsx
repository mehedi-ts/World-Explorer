import { Search } from "lucide-react";
import React from "react";

const Filter = () => {
  return (
    <div className=" bg-white/15 backdrop-blur-lg border border-white/20  flex py-3 items-center justify-between rounded-4xl px-5">
      <div
        id="srcbox"
        className="border border-[#b7b7b7] flex items-center w-[60%] h-12 rounded-full overflow-hidden "
      >
        <input
          className=" px-3 w-fit h-full flex-1 bg-[#00000041] focus:outline-none text-white "
          type="search"
          name=""
          id=""
          placeholder="Search hear"
        />
        <button className="btn border-none  h-full bg-[#ffffff65]">
          <Search></Search>
        </button>
      </div>
      <div
        id="sort"
        className=" flex border-l border-[#9191919c] flex-col px-6  gap-2 "
      >
        <label className="text-base">Sort By</label>
        <select
          className="text-xl  bg-[#3c3891] rounded-md p-1 focus:outline-none"
          name="short"
          id=""
        >
          <option value="asia">All Regions</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
