import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="border flex items-center justify-between px-4 py-6">
        <div>World Explorer</div>
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
