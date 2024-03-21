import React from "react";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { imglist } from "../datas";

const Caption = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center text-left pb-20 pt-4 font-sen leading-8">
      <div className="self-stretch flex flex-row justify-center items-center mb-6 md:mb-12">
        <Marquee className="h-24">
          {imglist.map((data, index) => (
            <img
              className="self-stretch mx-8 w-24 object-cover"
              alt={data.title}
              src={data.imgsrc}
              key={index}
            />
          ))}
        </Marquee>
      </div>

      <div className="flex items-start w-1/2 bg-black border-solid border-l-4 border-b-0 border-r-0 border-t-0  border-x-[#7962FA]">
        <div className="text-white mx-4">
          <BiSolidQuoteAltLeft />
        </div>

        <div className="sm:text-sm text-white justify-center flex items-center">
          <p className="m-0 pt-4">
            Simply pursuing an education or enrolling in random programs may not
            be enough to land a job in a reputable company. Mentorow’s programs
            are tied up with top-notch companies and led by industry experts,
            who can guide and equip you with the latest skills, making you
            job-ready and increasing your chances of being placed in your
            dream organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Caption;
