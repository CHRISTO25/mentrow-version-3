import React from "react";
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

const Collection = () => {
  return (<div className="bg-black md:flex md:justify-center pt-2">
    <div className=" bg-black  pt-0 ">
      <div className="p-0 ">
        <h1 className="heading text-center text-white text-2xl pb-4 font-sen">
          Explore Our Programs
        </h1>
        <div className="container flex justify-center items-center text-white mr-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={-60}
            slidesPerView={5}
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
          >
            {Course_Details.map((data) => (
              <SwiperSlide key={data.index} className="text-center">
                <Explore_Card
                  
                  title={data.title}
                  lesson={data.lesson}
                  imgsrc={data.imgsrc}
                  students={data.students}
                  level={data.level}
                />
              </SwiperSlide>
            ))}

            <div className="slider-controler relative pt-10 md:pt-6 pb-10 mx-10 sm:mx-24">
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
  );
};

export default Collection;
