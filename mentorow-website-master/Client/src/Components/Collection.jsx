import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import { GrLinkNext } from "react-icons/gr";
// import { GrLinkPrevious } from "react-icons/gr";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Explore_Card from "./Explore_Card";
import Course_Details from "./CourseDetails";
import Description from "./Description";

const Collection = () => {
 
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-black md:flex md:justify-center flex-col md:overflow-hidden pt-6 md:pt-12">
    <div className="bg-black md:flex md:justify-center md:items-center pt-4 mb-0">
      <div className=" bg-black  pt-0 ">
        <div className="">
          <div className=" flex justify-center">
          <h1 className="heading inline-block text-center font-bold  bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae]  text-transparent bg-clip-text text-4xl pb-8 md:pb-20 font-sen">
            Explore Our Programs
          </h1>
          </div>
          
          <div className="container flex justify-center items-center text-white mr-0">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              // spaceBetween={-60}
              slidesPerView={4}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
              onSlideChange={(swiper) => {
                setIndex(swiper.realIndex);
              }}
            >
              {Course_Details.map((data) => (
                <SwiperSlide key={data.index} className="">
                  <Explore_Card
                    title={data.title}
                    lesson={data.lesson}
                    imgsrc={data.imgsrc}
                    students={data.students}
                    level={data.level}
                  />
                </SwiperSlide>
              ))}

              <div className="slider-controler relative pt-10 md:pt-4 pb-10">
                <div>
                  <IoArrowBackCircleOutline className="swiper-button-prev text-center w-16 slider-arrow hover:text-gray-600 text-[#7962FA] opacity-65" />
                  {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                </div>
                <div>
                  <IoArrowForwardCircleOutline className="swiper-button-next slider-arrow w-16 hover:text-gray-600 text-[#7962FA] opacity-65" />
                  {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                </div>
                {/* <div className="swiper-pagination flex justify-center items-center text-white"></div> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Description index={index}/>
    
  </div>
  </div>
  );
};

export default Collection;
