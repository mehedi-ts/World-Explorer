import { Search } from "lucide-react";
import React from "react";

const Filter = ({ clickHandle }) => {
  return (
    <div className=" bg-white/10 backdrop-blur-lg border border-white/20 md:w-[80%] w-[95%] mx-auto flex mb-15 items-center justify-between rounded-4xl md:px-5">
      <div
        id="srcbox"
        className="border border-white/10 flex items-center md:w-[60%] h-12 rounded-full overflow-hidden "
      >
        <input
          className=" px-3 h-full flex-1 bg-[#00000041] focus:outline-none text-white "
          type="search"
          name=""
          id=""
          placeholder="Search hear"
        />
        <button
          onClick={() => clickHandle()}
          className="btn border-none  h-full bg-[#ffffff65]"
        >
          <Search></Search>
        </button>
      </div>
      <div
        id="sort"
        className="mx-auto flex items-center justify-center  md:flex md:items-start border-l border-[#9191919c] flex-col md:px-6  gap-1  "
      >
        <label className="text-base hidden md:flex">Sort By</label>
        <select
          className="md:text-xl text-base  rounded-md p-1 focus:outline-none"
          name="short"
          id=""
        >
          <option value="asia">All Regions</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
