import React, { useState } from "react"

import { MdOutlineReadMore } from "react-icons/md"
import Details from "../DetailsCard.jsx/Details"

import Swal from "sweetalert2"


const StudentCard = ({data,index}) => {
  const [open, setOpen] = useState(false)
  console.log(data)
  
    const handleDelete = async () => {
     await Swal.fire({
        title: "Do you want to delete this?",
     
        showCancelButton: true,
        confirmButtonText: "Delete",
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  
  return (
    <div class="bg-gray-100 p-4 h-[370px ] w-full xlrelative ">
      {/* <!-- Card --> */}
      {/* COURSES */}
      
      <div className="flex my-2">
        <div className=" p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* <!-- Image --> */}
          <img
            className="h-60 object-cover rounded-xl"
            src={"course1"}
            alt=""
          />
          <div className="p-2">
            {/* <!-- Heading --> */}
            <h2 className="font-bold text-lg mb-2 ">{ data.firstname}</h2>
            {/* <!-- Description --> */}
            <p className="text-sm text-gray-600">
              Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>
          {/* <!-- CTA --> */}
          <div className="flex justify-between">
            <button className=" text-white bg-purple-600   px-3 py-1 rounded-md  hover:bg-purple-700  ">
              <p className=" text-sm font-semibold "
                onClick={() => setOpen(!open)}>MORE INFO</p>
              
            </button>
            <button className=" text-white bg-red-600   px-3 py-1 rounded-md  hover:bg-red-700 ">
              <p className=" text-sm font-semibold "
                onClick={ handleDelete}>DELETE</p>
              
            </button>
           
          </div>
        </div>
      </div>
      {open ? <Details data={data} setOpen={setOpen}/> : null}
    </div>
  )
}

export default StudentCard
