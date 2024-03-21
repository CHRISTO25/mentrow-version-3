import React, { useState } from "react";
import Navbar from "../../Components/Admin_panel/Layout/Navbar";
import Sidebar from "../../Components/Admin_panel/SidebarLayout/Sidebar";
import Framer from "../../Components/Admin_panel/Homeframer/Framer";

import StudentForm from "../../Components/Admin_panel/Routes/StudentPage/StudentForm";

const StudentFormPage = () => {
  const [sideBar, setSideBar] = useState(true);
  return (
    <div>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      <Framer children={<StudentForm/>}/>
    </div>
  )
}

export default StudentFormPage
