import React, { useState } from "react"

import { RxCross1 } from "react-icons/rx"
import { Link } from "react-router-dom"

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai"
const Details = ({ data, setOpen }) => {
  const handleMessageSubmit = () => {}

  return (
    <div className="bg-white ">
      <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
        <div className="w-[90%]  md:w-[70%] xl:w-[40%] h-[50%] bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white overflow-y-scroll 800px:h-[75vh] rounded-md shadow-sm relative p-4 ">
          <RxCross1
            size={30}
            className="absolute right-3 top-3 z-50 "
            onClick={() => setOpen(false)}
          />

          <div className="block w-full 800px:flex">
            <div className="w-full rounded-md 800px:w-[50%] flex gap-2 flex-col items-center ">
              <div className="p-2">
                <h1 className="text-3xl text-black font-bold">
                  Student Details
                </h1>
              </div>
              <img 
                src={`{data.image_Url[0].url}`}
                alt=""
                height="200px"
                width="200px"
              />
              <div className=" ">
                <h3 className="pt-3 text-[15px] text-center font-bold pb-3">
                  {`Name:${data.firstname}  ${data.lastname}`}
                </h3>
                <div className="ml-5 flex items-center justify-center gap-5">
                  <div className="flex">
                    <div className="flex flex-col   ">
                      <h5 className="pb-3 text-[15px]">
                        {`Email:${data.email}`}
                      </h5>
                      <h5 className="pb-3 text-[15px] font-bold">
                        {`Phone:${data.phonenumber}`}
                      </h5>
                      <h5 className="pb-3 text-[15px]">
                        {`Qualification:${data.qualification}`}
                      </h5>
                    </div>

                    <div className="flex  flex-col px-5  ">
                      <h5 className="pb-3 text-red-600 text-[15px]">
                        {`Experience:${data.experience}`}
                      </h5>
                      <h5 className="pb-3  text-[15px]">
                        {`Joblocation:${data.joblocation}`}
                      </h5>
                      <h5 className="pb-3  text-[15px]">
                        {`YearOfPassout:${data.yearOfPassout}`}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center   justify-center gap-x-20 ">
                <div className="">
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-md px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={""}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
