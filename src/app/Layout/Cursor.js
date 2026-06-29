"use client"; // This is a client component
import { Fragment, useEffect } from "react";
//import { customCursor } from "../../utilits";
import useCursor, { customCursor } from "../hooks/useCursor";
import dynamic from "next/dynamic";

const Cursor = () => {
//  useEffect(() => {
    //customCursor();
    useCursor();
//}, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Cursor;
//export default dynamic (()=> Promise.resolve(Cursor), {ssr : false});