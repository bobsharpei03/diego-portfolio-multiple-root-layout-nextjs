"use client"; // This is a client component
import { Fragment, useEffect } from "react";
import { customCursor } from "../../utilits";
import dynamic from "next/dynamic";

const Cursor = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Cursor;
//export default dynamic (()=> Promise.resolve(Cursor), {ssr : false});
