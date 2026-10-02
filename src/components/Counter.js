/*
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
//import VisibilitySensor from 'react-visibility-sensor/visibility-sensor'
import dynamic from "next/dynamic";

const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className="count-text"
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

//export default Counter;
export default dynamic (()=> Promise.resolve(Counter), {ssr : false});
*/
"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = ({ end = 100, decimals = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <span ref={ref} className="count-text">
      {inView ? (
        <CountUp end={end} duration={3} decimals={decimals} />
      ) : (
        0
      )}
    </span>
  );
};

export default Counter;
