import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";

const ReviewComments = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 2,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-4 md:m-0 md:px-4 md:w-full lg:w-[70%] ">
      <Slider {...settings} className=" my-8">
        {reviews.map((review, index) => (
          <div key={index} className="md:w-full">
            <div className="mx-2">
              <div className="bg-[#4D4F5C33] p-3 rounded-2xl mb-4 space-y-3 lg:py-8 xl:p-3">
                <div className="flex gap-3">
                  <div>
                    <img src={review.image} width={40} alt="" />
                  </div>
                  <div>
                    <h1 className="underline font-semibold ">{review.name}</h1>
                    <div className="flex gap-2 items-center">
                      <StarRating />

                      <h1 className="text-sm">{review.duration}</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-5 md:line-clamp-4 text-xs leading-5 ">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewComments;
