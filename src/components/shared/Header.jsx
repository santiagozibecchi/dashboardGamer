import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="">
      {/* TITLE AND SEARCH */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center ">
        <div>
          <h1 className="text-gray-300 text-2xl">Jeager Resto</h1>
          <p className="text-gray-500">5 Diciembre 2022</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              placeholder="Search..."
              type="text"
              className="bg-[#1F1D28] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none lg:max-w-[150px]"
            />
          </div>
        </form>
      </div>
      {/* TABS */}
      <nav className="flex items-center text-gray-300 justify-between border-gray-400 border-b-[2px] mb-5 md:justify-start md:gap-10">
        <a
          href="#"
          className="relative py-2 before:absolute before:w-1/2 text-[#ec7c6a] before:h-[2px]  before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px]"
        >
          Hot dishes
        </a>

        <a href="#" className="py-2">
          Cold dogs
        </a>

        <a href="#" className="py-2">
          Soup
        </a>

        <a href="#" className="py-2">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;
