import {
  IconCode,
  IconLayoutDashboard,
  IconLogout,
  IconMessages,
  IconUserCode,
  IconUserMinus,
  IconX
} from "@tabler/icons-react";
import React from "react";
import logo from "../../Admin_panel/svg/Mentorow-logo.svg";
import "./sidebar.css";


function Sidebar({ sideBar, setSideBar }) {
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div
        className={
          sideBar
            ? "sidebar bg-white inset-y-0 left-0 w-64 border-r-2 fixed cursor-pointer  z-40"
            : "hidden opacity-0"
        }
      >
        <button
          onClick={handleSidebar}
          className="absolute -right-12 p-1 top-4 text-black cross"
        >
          <IconX className="h-8 w-8" />
        </button>

        <div className="px-6 mt-5 flex justify-center	">
          <img src={logo} alt="" className=" h-[50px]" />
        </div>

        <div className="p-6">
          <ul className="text-sm leading-6">
            <li className="flex items-center p-3 rounded">
              <IconLayoutDashboard className="h-5 w-5 mr-2 " />
              Home
            </li>

            <li className="flex items-center p-3 rounded">
              <IconMessages className="h-5 w-5 mr-2 " />
              Popup
            </li>
            <li className="flex items-center p-3 rounded">
              <IconUserCode className="h-5 w-5 mr-2 " />
              Mentors
            </li>

            <li className="flex items-center p-3 rounded">
              <IconCode className="h-5 w-5 mr-2" />
              Course
            </li>

            <li className="flex items-center p-3 rounded">
              <IconUserMinus className="h-5 w-5 mr-2" />
              Student Details
            </li>

            <li className="flex items-center p-3 rounded bottom-4 absolute hover:bg-white hover:text-red-500">
              <IconLogout className="h-5 w-5 mr-2" />
              Log out
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;