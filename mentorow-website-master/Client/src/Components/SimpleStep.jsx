import Marquee from "react-fast-marquee";
import { simpleStep } from "../datas";
import { simpleImageList } from "../datas";

const SimpleStep = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/src/assets/bgImage.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Marquee className="pt-4">
          {simpleImageList.map((data, index) => (
            <img
              className="self-stretch mx-8 w-24 object-cover"
              alt=""
              src={data.image}
              key={index}
            />
          ))}
        </Marquee>
        <div className=" text-center pt-16 ">
          <h1 className="inline-block font-bold text-4xl bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text ">
            Simple Steps
          </h1>
          <h1 className="text-2xl">Start Your Learning Journey</h1>
        </div>
        <div className=" flex justify-center">
          <div className="card flex flex-col  justify-center items-center gap-8 pt-16 md:gap-0 md:flex-row">
            {simpleStep.map((simpleStep, index) => (
              <div
                key={index}
                className="max-w-xs flex flex-col items-center justify-center p-2"
              >
                <div>
                  <img width={150} src={simpleStep.image} alt="" />
                </div>
                <div className="p-5 text-center text-balance">
                  <p className="mb-2 text-xl font-bold tracking-tight">
                    {simpleStep.title}
                  </p>
                  <p className="mb-3 text-sm">{simpleStep.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </>
  );
};

export default SimpleStep;
