import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mentorDetails } from "../datas";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaArrowLeft className="arrows" style={{ color: "white" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaArrowRight className="arrows" style={{ color: "white" }} />
    </div>
  );
}

const Mentors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center px-4 sm:px-24 md:px-28">
      <div className="flex justify-center items-center pt-8">
        <div className="text-center leading-7 tracking-widest">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text ">
            Our Mentors
          </h1>
          <h1 className="text-2xl">Meet Our Passionate Team</h1>
        </div>
        </div>
        
        <div className="w-[90%] mx-8">
          <Slider {...settings} className="my-12">
            {mentorDetails.map((mentor, index) => (
              <div key={index}>
                <div
                  className={`flex flex-col items-center justify-center w-full pt-32 pb-8 ${
                    index % 2 === 0 ? " md:mt-8" : null
                  }`}
                >
                  <div
                    style={{
                      boxShadow:
                        "0px 7.88px 15.759px 0px rgba(255, 255, 255, 0.05), 0px 23.639px 39.398px 0px rgba(255, 255, 255, 0.15)",
                    }}
                    className="flex  justify-center w-56 h-72 bg-gradient-to-r from-[#7962FA] via-[#31266F] to-[#7962FA]  rounded-2xl p-0.5"
                  >
                    <div className="flex-1 bg-gradient-to-r from-[#3D1b3c] via-[#412D46] to-[#25142B] rounded-xl relative drop-shadow-2xl ">
                      <img
                        className="w-full h-[420px] absolute bottom-0 object-cover rounded-2xl"
                        src={mentor.image}
                        alt="mentors"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-10 tracking-widest flex flex-col justify-center items-center">
                    <div className="flex gap-1 items-center">
                      <img
                        width={20}
                        src="/src/assets/linkedin.svg"
                        alt="linkedin icon"
                      />
                      <p className="font-bold ">{mentor.name}</p>
                    </div>
                    <p>{mentor.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Mentors;
