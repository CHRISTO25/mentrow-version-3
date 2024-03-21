import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 30 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setisOpen(!isOpen);
  };

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 5,
      },
    },
  };

  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div variants={navbarVariant} initial="hidden" animate="visible">
      <div
        className={`flex justify-between items-center px-6 fixed left-0 right-0 top-0 z-50  ${
          color ? "transition duration-500 ease-in bg-black" : "bg-transparent"
        }`}
      >
        <img src="/src/assets/logo.png" alt="Background" width={170} />
        <div className="hidden md:block space-x-10 text-white tracking-widest">
          <Link className="no-underline text-white hover:text-gray-400" to="/">
            HOME
          </Link>
          <Link
            className="no-underline text-white hover:text-gray-400"
            to="/courses"
          >
            COURSES
          </Link>
          <Link
            className="no-underline text-white hover:text-gray-400"
            to="/mentors"
          >
            MENTORS
          </Link>
          <Link
            className="no-underline text-white hover:text-gray-400"
            to="/contact"
          >
            CONTACT
          </Link>
        </div>
        <div>
          <button
            style={{ boxShadow: "inset -7px 8px 30px rgba(0, 0, 0, 0.5)" }}
            className="font-bold border-none tracking-widest bg-gradient-to-r from-[#7F68FF] to-[#7962FA]  md:block hidden px-10 py-1 rounded-[17px] text-white "
          >
            Login
          </button>
        </div>
        <h1 className="cursor-pointer text-white md:hidden" onClick={openMenu}>
          {isOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </h1>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={mobNavVariant}
            exit="exit"
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center tracking-widest h-screen gap-14 bg-black text-white  fixed left-0 right-0 top-0 z-40 md:hidden"
          >
            <Link
              className="no-underline text-white hover:text-gray-400"
              to="/"
            >
              HOME
            </Link>
            <Link
              className="no-underline text-white hover:text-gray-400"
              to="/courses"
            >
              COURSES
            </Link>
            <Link
              className="no-underline text-white hover:text-gray-400"
              to="/mentors"
            >
              MENTORS
            </Link>
            <Link
              className="no-underline text-white hover:text-gray-400"
              to="/contact"
            >
              CONTACT
            </Link>

            <button
              style={{ boxShadow: "inset -7px 8px 30px rgba(0, 0, 0, 0.5)" }}
              className="font-bold border-none tracking-widest bg-gradient-to-r from-[#7F68FF] to-[#7962FA]   px-10 py-1 rounded-[17px] text-white   "
            >
              Login
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
