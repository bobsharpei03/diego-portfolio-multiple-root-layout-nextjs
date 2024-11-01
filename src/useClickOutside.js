import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
//export default useClickOutside;
export default dynamic (()=> Promise.resolve(useClickOutside), {ssr : false});
