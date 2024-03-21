import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const RolesItems = (props) => {
  const [counterState, setCounterstate] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterstate(true)}
      onExit={() => setCounterstate(false)}
    >
      <div className="flex flex-col">
        <b className="text-center tex-xl sm:text-2xl">
          {counterState && (
            <CountUp start={0} end={props.count} delay={0}>
              {props.count}
            </CountUp>
          )}
          +
        </b>
        <h2 className="m-0 text-sm text-center font-light">{props.role}</h2>
      </div>
    </ScrollTrigger>
  );
};

export default RolesItems;
