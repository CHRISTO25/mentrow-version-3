import React, { Component } from "react";
import StarRating from "./StarRating";
import ReviewComments from "./ReviewComments";
import { reviews } from "../datas";
import Question from "./Question";

const ContactUs = () => {
  return (
    <div style={{backgroundImage: "url('/src/assets/image.png')", backgroundPosition: "center",backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    {/* // <div className="bg-[url('/src/assets/image.png')] bg-cover bg-no-repeat w-full h-screen"> */}
      <div className=" flex flex-col justify-center items-center lg:flex-row gap-12 md:gap-2 mr-4 mt-8 mb-0 z-5 pt-4">
        <div className="flex justify-center items-center flex-col w-1/2">
          <div className="flex  justify-center w-full md:w-2/3 gap-4 ">
            <div className="flex justify-center flex-col items-start gap-6">
              <p className=" md:text-4xl text-xl font-semibold py-3">
                Still Confused About Your Career Choice? Consult With Our
                Experts...
              </p>
              <button
                style={{ boxShadow: "inset -7px 8px 30px rgba(0, 0, 0, 0.5)" }}
                className="block text-xs sm:text-md cursor-pointer px-10 py-1 md:py-2 bg-gradient-to-r from-[#070707] to-[#0f073d]  text-white rounded-full border-2 border-[#3b277d] font-extralight  hover:bg-gradient-to-b hover:bg-transparent hover:from-[#6a54b0] hover:to-[#000000] lg:mb-16"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-end">
          <div className="bg-round flex justify-center items-center w-[300px] h-[400px]  sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-t from-[#101012] to-[#00000a]  relative top-0">
            <img
              className="bg-image w-full h-[280px]  sm:h-[400px] md:max-h-full md:max-w-full lg:w-[400px] absolute inset-8 mx-auto object-cover"
              src="/src/assets/successful-black-student-girl-using-laptop-learnin-2021-09-14-17-37-12-utc 1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* //Reviews */}
      <div
        // style={{ backgroundImage: "url('/src/assets/IMAGE.png')" }}
        className="flex justify-center items-center px-2 md:px-4 relative bottom-28"
      >
        <div className="bg-[#171717] space-y-4 my-6 py-4 max-w-[362px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1266px] 2xl:max-w-[1900px] rounded-2xl  text-white w-full md:flex-col lg:flex lg:flex-row md:justify-center md:items-center">
          <div className="px-8 py-2 md:px-6 md:w-full  lg:w-[30%] ">
            <div className="flex ">
              <div>
                <img
                  src="/src/assets/google.svg"
                  alt=""
                  className="w-10 h-10 mr-3"
                />
              </div>
              <div>
                <h1 className="">Google Rating</h1>
                <div className="flex flex-row gap-1 items-center">
                  <h1 className="text-[#FFBB0D] text-sm font-medium">4.4</h1>
                  <div className="flex w-4 h-4">
                    <StarRating />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-3 lg:space-y-2 xl:space-y-3 xl:mt-3">
              <h1 className="text-4xl lg:text-2xl xl:text-4xl font-bold">
                Your best institute <br /> for learning
              </h1>
              <p className="text-sm">
                Mentorow is a dynamic upskilling platform that transforms
                aspiring students into job- ready professionals
              </p>
            </div>
          </div>
          <ReviewComments reviews={reviews} />
        </div>
      </div>
      <Question />
    {/* // </div> */}
    </div>
  );
};

export default ContactUs;
