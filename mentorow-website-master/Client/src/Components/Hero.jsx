import React from "react";
import icon1 from "/src/assets/icon1.svg";
import icon2 from "/src/assets/icon2.svg";
import icon3 from "/src/assets/icon3.svg";
import {motion} from "framer-motion"

const Home = () => {
  const heroVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 5,
      },
    },
  };
  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 5,
      },
    },
  };
  return (
    <motion.div variants={heroVariant}
    initial="hidden"
    animate="visible" className="mt-28 flex flex-col justify-between items-center font-extrabold px-14 md:mt-24">
      <motion.div className="flex flex-col justify-center sm:block">
        <div>
          <h1
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextFillColor: "transparent",
            }}
            className="text-4xl sm:text-3xl md:text-5xl font-sans "
          >
            LEARN
          </h1>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap md:gap-4 pb-0 md:pb-1">
          <h1 className="text-6xl sm:text-7xl mr-2">THE </h1>
          <h1 className=" inline-block text-6xl text-end sm:text-7xl uppercase bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text ">
            Future
          </h1>
        </div>
        <div className="">
          <h1
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextFillColor: "transparent",
            }}
            className="text-start font-sans text-4xl sm:text-3xl sm:text-end md:text-5xl "
          >
            WITH US
          </h1>
        </div>
      </motion.div>

      <motion.div variants={contentVariant}
    initial="hidden"
    animate="visible" className="second mt-14 md:px-28">
        <h2 className="text-xl font-thin  text-white">
          Learn From Experts Grab Your Career
        </h2>
        <div className="sm:space-x-2 md:space-x-4 space-y-2 mt-6">
          <button className="btn1 bg-transparent font-bold text-white mr-2">
            Enroll Now
          </button>
          <button className="btn2 bg-transparent text-white">
            Explore Our Programs
          </button>
        </div>
        <div className="flex flex-col gap-2 md:gap-8 md:flex-row text-white justify-start font-thin text-xs mt-8 ">
          <div className="flex items-center gap-4">
            <img className="" src={icon1} alt="alternate image" />
            <h1 className=" text-white">Practice on live projects</h1>
          </div>
          <div className="flex  items-center gap-4">
            <img src={icon2} alt="alternate image" />
            <h1 className="text-white ">Mentoring from industry veterans</h1>
          </div>
          <div className="flex items-center gap-4">
            <img src={icon3} alt="alternate image" />
            <h1 className="text-white ">Building strong community to grow</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
