"use client"; // This is a client component
import "../../../styles/globals.css";
import { Inter } from "next/font/google";
import { Fragment, useEffect, useState } from "react";
import CopyRight from "../../components/CopyRight";
import ImageView from "../../components/popup/ImageView";
import VideoPopup from "../../components/popup/VideoPopup";
import Cursor from "../Layout/Cursor";
import Header from "../Layout/Header";
import MobileMenu from "../Layout/MobileMenu";
import PreLoader from "../Layout/PreLoader";
import Progressbar from "../Layout/Progressbar";
import {aTagClick, dataImage, fatchData, scrollTop, scroll_, stickyNav, wowJsAnimation} from "../../utilits";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children , dark} ) => {
  const [siteInfo, setSiteInfo] = useState({});
  const myFunction = async () => {
    setSiteInfo( await fatchData("/static/siteSetting.json"));   
  }
  useEffect(() => {
    myFunction();
    dataImage();
  }, []);
  useEffect(() => {
    wowJsAnimation();
    aTagClick();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
  }, []);
  return (
   <html lang="en">
    <body className={inter.className}>
    <Fragment>
      <PreLoader />
      <ImageView /> 
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu logo={siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]}/>
        {/*<MobileMenu logo={siteInfo && siteInfo.logo && siteInfo.logo[light ? "light" : "light"]}/>*/}
        <Header logo={siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]}/>
        {/*<Header logo={siteInfo && siteInfo.logo && siteInfo.logo[light ? "light" : "light"]}/>*/}
             {children}      
        <CopyRight brandName={siteInfo && siteInfo.brandName} developerName={siteInfo && siteInfo.developerName} />
        <Cursor /> 
        <Progressbar />
      </div>
    </Fragment>
    </body>
</html>
  );  
};
export default Layout;