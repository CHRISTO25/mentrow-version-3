import React, { useState } from "react";
import RolesItems from "./RolesItems";
import { roles_data } from "../datas";
import {motion} from "framer-motion"

const RolesDetails = () => {
  const roleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 5,
      },
    },
  };
  return (
    <motion.div variants={roleVariant}
    initial="hidden"
    animate="visible" className="hidden mt-14 overflow-hidden w-full bg-gradient-to-b from-[#09060F] to-[#140D21] md:flex md:flex-col md:items-center md:justify-center text-white pb-10 font-sen px-4">
      <p className="mb-8 mt-4 text-center">
        Opportunities Are waiting for you{" "}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-white">
        {roles_data.map((data, index) => (
          <RolesItems count={data.count} role={data.role} key={index} />
        ))}
      </div>
    </motion.div>
    
  );
};

export default RolesDetails;
