import { Earth, Menu } from "lucide-react";
import React from "react";

const Navbar = ({ clickHandle }) => {
  return (
    <>
      <nav className=" flex items-center justify-between px-4 py-6">
        <div className="flex items-center justify-center gap-3 text-4xl cursor-pointer">
          <Earth size={60}></Earth>
          World Explorer
        </div>
        <ul className=" gap-9 hidden md:flex">
          <li className="text-lg cursor-pointer" onClick={() => clickHandle()}>
            Home
          </li>
          <li className="text-lg cursor-pointer" onClick={() => clickHandle()}>
            About
          </li>
          <li className="text-lg cursor-pointer" onClick={() => clickHandle()}>
            Contact
          </li>
        </ul>
        <Menu onClick={clickHandle} className="md:hidden"></Menu>
      </nav>
    </>
  );
};

export default Navbar;
