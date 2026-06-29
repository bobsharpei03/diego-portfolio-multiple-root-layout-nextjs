"use client";
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
import usePreloader from "../hooks/usePreloader";
import useWow from "../hooks/useWow";
import useCursor from "../hooks/useCursor";
import useDisableEmptyLinks from "../hooks/useDisableEmptyLinks";
import useSkillProgress from "../hooks/useSkillProgress";
import useDataImage from "../hooks/useDataImage";
import useScrollSpy from "../hooks/useScrollSpy";
import useStickyNav from "../hooks/useStickNav";
import useScrollProgress from "../hooks/useScrollProgress";
import usePortfolioHover from "../hooks/usePortfolioHover";
import { fatchData } from "../../utilits";
/*
import {
  aTagClick,
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "../../../utilits";
*/
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, dark }) {

  //usePreloader();
  useWow();
  useCursor();
  useDisableEmptyLinks();
  useSkillProgress();
  useDataImage();
  useScrollSpy();
  useStickyNav();
  useScrollProgress();
  usePortfolioHover();

  const [siteInfo, setSiteInfo] = useState(null);

  useEffect(() => {
    const loadSettings = async () => {
      const data = await fatchData("/static/siteSetting.json");
      setSiteInfo(data);
    };

    loadSettings();
    //dataImage();
    //UseDataImage();
  }, []);

  /*
  useEffect(() => {
    wowJsAnimation();
    aTagClick();

    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);

    return () => {
      window.removeEventListener("scroll", scroll_);
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scrollTop);
    };
  }, []); */
  const logo = siteInfo?.logo?.[dark ? "dark" : "light"] ?? null;

  return (
    <Fragment>
    {/*}  <PreLoader />*/}
      <ImageView />
      <VideoPopup />

      <div className={`dizme_tm_all_wrap ${inter.className}`} data-magic-cursor="show">
        <MobileMenu logo={logo} />
        <Header logo={logo} />

        {children}

        <CopyRight
          brandName={siteInfo?.brandName}
          developerName={siteInfo?.developerName}
        />

        {/*<Cursor />*/}
       
        {/*<Progressbar />*/}
             </div>
    </Fragment>
  );
}