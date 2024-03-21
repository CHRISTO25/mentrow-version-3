import React from "react";

const Question = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mb-24">
        <div className="space-y-4  text-white w-[80%] text-center flex justify-center items-center flex-col">
          <h1 className="text-4xl pb-6 text-[#9A7BFF] font-semibold bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text">
            Frequently Asked Questions...
          </h1>
         <div className="flex justify-start items-start s-2/3 md:w-1/2 text-left  flex-col gap-6">
         <p className="text-xl">will this program aid in my career growth?</p>
          <p className="text-sm text-balance">
            Certainly, Mentorow's program can help you build a successful career
            in the IT field with higher remuneration. The program is designed to
            provide you with the necessary skills and knowledge required to
            excel in the IT industry. You will gain expertise in the latest
            technologies and tools, which will be beneficial for
            your career growth.
          </p>
         </div>
        </div>
      </div>
    </>
  );
};

export default Question;