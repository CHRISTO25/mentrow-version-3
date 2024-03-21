import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const StarRating = () => {
  return (
    <div className="flex text-[#FFBB0D]">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarHalf />
    </div>
  );
};

export default StarRating;
