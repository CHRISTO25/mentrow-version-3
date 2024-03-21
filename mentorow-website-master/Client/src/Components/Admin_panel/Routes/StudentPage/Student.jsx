import React, { useState } from "react"

// react icon
import { HiMenuAlt2 } from "react-icons/hi"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import DropDown from "../DropDown/DropDown"
import { FaUserPlus } from "react-icons/fa6"

import { Link } from "react-router-dom"
import StudentCard from "./StudentCard"
import {student} from "../../Adminstatic/data"
import Framer from "../../Homeframer/Framer"


const Student = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <Framer>

    <div className=" pt-8 bg-gray-100 ">
      
      <div className="flex justify-between flex-col  xl:flex-row md:flex-row ">
        {/* dropdown */}
        <div className="relative text-white h-[60px] mt-[10px] w-[270px] left-3 1000px:block bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          <HiMenuAlt2 size={30} className="absolute top-3 left-2" />
          <button
            className="h-[100%] w-full flex justify-between items-center pl-10 font-sans font-[500] text-lg select-none rounded-t-md"
            onClick={() => setDropDown(!dropDown)}
          >
            Course
          </button>
          {dropDown ? (
            <IoIosArrowUp
              size={30}
              className="absolute  right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
          ) : (
            <IoIosArrowDown
              size={30}
              className="absolute  right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
          )}
          {dropDown ? <DropDown setDropDown={setDropDown} /> : null}
        </div>
        {/* Add student */}
        <div className="relative text-white h-[60px] mt-[10px] w-[270px] -right-3 xl:right-3 md:right-3 1000px:block bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          <Link to={"/admin/student/studentform"}>
              <button className="h-[100%] w-full flex  justify-between items-center pl-10 font-sans font-[500] text-lg "
             >
              <h1 className="absolute left-20">Add Student</h1>
              <FaUserPlus size={25} className="cursor-pointer" />
            </button>
          </Link>
        </div>
      </div>
      {/* student card */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px]  lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px]  mb-12 border-0">
        {
          student && student.map((data, index) => <StudentCard data={data} key={index} />)
        }
        
        </div>
        
    </div>
    </Framer>
  )
}

export default Student
