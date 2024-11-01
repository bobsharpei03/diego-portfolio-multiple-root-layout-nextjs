"use client"; // This is a client component
import { useEffect } from "react";
import { preloader } from "../../utilits";
import dynamic from "next/dynamic";

const PreLoader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
//export default dynamic (()=> Promise.resolve(PreLoader), {ssr : false});
export default PreLoader;
