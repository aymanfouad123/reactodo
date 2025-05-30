import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center bg-gray-600 text-white px-7 py-2">
        <div className="logo">
          <span className="font-medium text-xl">Taskify</span>
        </div>
        <ul className="flex gap-6">
          <li className="cursor-pointer min-w-[80px] text-center hover:font-bold">
            Home
          </li>
          <li className="cursor-pointer min-w-[80px] text-center hover:font-bold">
            Todo List
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
