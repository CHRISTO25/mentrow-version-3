import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const IndividualCards = (props) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: props.delay,
        duration: 1,
        type: "tween",
        stiffness: 200,
      }}
      className="w-2/3 h-64 md:w-1/3 rounded-[30px] md:rounded-[60px] font-sen  shadow-inner m-4  bg-gradient-to-r from-[#7962FA] via-[#31266F] to-[#7962FA]  flex p-0.5"
    >
      <div className="flex flex-1 flex-col m-0 items-center bg-[#2D2D2D] shadow-inner rounded-[30px] md:rounded-[60px] hover:bg-[#222222] hover:cursor-pointer hover:transform ">
        <div className="w-1/5 h-1/3 mt-2 md:mt-4 object-cover">
          <img
            className="w-full h-full "
            loading="eager"
            alt=""
            src={props.imgsrc}
          />
        </div>

        <div className="flex flex-col mt-2  md:mt-4 text-center">
          <h3 className="text-white leading-5 font-bold text-2xl md:text-xl m-0">
            {props.title}
          </h3>
          <div className="self-stretch px-4 mt-2 text-md md:text-sm text-white font-thin">
            {props.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndividualCards;
