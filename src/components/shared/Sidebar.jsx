import {
  RiHome6Line,
  RiLogoutCircleLine,
  RiMailLine,
  RiNotification3Line,
  RiPercentFill,
  RiPieChart2Fill,
  RiSettings3Line,
} from "react-icons/ri";
import React from "react";

const Sidebar = ({ showMenu }) => {
  return (
    <div
      className={`bg-[#1F1D28] fixed lg:left-0 top-0 w-28 h-full flex justify-between flex-col rounded-tr-xl rounded-br-xl z-50 ${
        showMenu ? "left-0" : "-left-full"
      } transition-all`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-lg text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-2 rounded-xl text-white flex justify-center"
            >
              <RiHome6Line className="text-white text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentFill className=" text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChart2Fill className=" text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className=" text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className=" text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings3Line className=" text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4 py-6">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ">
            <a
              href="#"
              className="p-2 rounded-xl text-[#ec7c6a] flex justify-center group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleLine className=" text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
