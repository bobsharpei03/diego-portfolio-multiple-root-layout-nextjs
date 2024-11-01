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
