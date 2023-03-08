import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
const SideBar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              FOOD
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 rounded-lg text-white flex justify-center"
            >
              <RiHome6Line className="text-3xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiPercentLine className="text-3xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiPieChartLine className="text-3xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiMailLine className="text-3xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiNotification3Line className="text-3xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiSettings4Line className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 rounded-lg text-[#ec7c6a] flex justify-center transition-colors"
            >
              <RiLogoutCircleRLine className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
