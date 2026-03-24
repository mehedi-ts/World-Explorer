import { Earth } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="border flex items-center justify-between px-4 py-6">
        <div className="flex items-center justify-center gap-3 text-4xl">
          <Earth size={60}></Earth>
          World Explorer
        </div>
        <ul className="flex gap-9">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
