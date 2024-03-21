import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

import { HiMenu } from "react-icons/hi";
import Sidebar from "../SidebarLayout/Sidebar";
import "./navbar.css";
import { Outlet } from "react-router-dom";

const Navbar = ({ sideBar, setSideBar }) => {
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setSideBar(true);
    } else {
      setSideBar(false);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSideBar(true);
      } else {
        setSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="flex flex-col shadow bg-white ">
      {sideBar && <Sidebar />}
      <div className="px-4 py-3 flex justify-between">
        <div className="flex items-center text-xl px-8">
          <button className="menuIcon m-1 rounded transition duration-1000" onClick={handleSidebar}>
            <HiMenu className="h-8 w-8 text-black" />
          </button>
        </div>
        <div className="flex items-center gap-x-5 pr-[50px]">
          <div className="relative ">
            <button className="text-black cursor-pointer group">
              <FaUserCircle className="w-10 h-10 mt-1" />
              <div className="absolute top-full right-0 z-10 hidden group-focus:block bg-white rounded-lg shadow-lg w-72 h-64">
                <ul className="py-4 mt-8">
                  <li>
                    <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100">
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;