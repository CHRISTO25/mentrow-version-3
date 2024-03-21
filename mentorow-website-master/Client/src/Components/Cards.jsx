import React from "react";
import IndividualCards from "./IndividualCards";
import { data } from "../datas";

const Cards = () => {
  return (
    <div className="bg-black w-full h-full font-sen overflow-hidden pb-8 pt-4">
      <div className="max-w-full flex flex-col items-center justify-center">
        <h1 className=" bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text text-4xl mb-4 font-bold flex items-center justify-center text-center">
          Why learn with Mentorow?
        </h1>
        <div className="self-stretch  flex justify-center text-center text-sm px-2 text-darkgray">
          <p className="font-thin">Programs designed to meet industry demands and equip you with the
          right skills</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row mx-4 md:mx-4 mt-8 md:mt-12">
        {data.map((data, index) => (
          <IndividualCards
            title={data.title}
            description={data.description}
            imgsrc={data.imgsrc}
            delay={data.delay}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
