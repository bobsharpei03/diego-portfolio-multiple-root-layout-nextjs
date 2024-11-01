"use client"; // This is a client component
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import Cursor from "./Layout/Cursor";
import PreLoader from "./Layout/PreLoader";
import NestedLayout from '../(lightLandingPage)/layout'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Diego Maquill | Intro</title>
      </Head>
      <PreLoader />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <div className="dizme_tm_intro">
          <div className="dizme_tm_intro_fixed_price">
            <span className="anim" />
            <span className="anim" />
            <span className="anim" />
            <a href="#" target="_blank" className="pricing-info anim">
              -20%
            </a>
          </div>
          <div className="short_info">
            <img src="img/logo/logo.png" alt="image" />
            <h3>Welcome to my Personal Portfolio</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          <div className="demos">
            <div className="left">
              <div className="desc">
                <img src="img/intro/light.png" alt="image" />
                <h3 className="title">My Light Portfolio</h3>
              </div>
              <Link className="intro_link" href="/lightLandingPage" ></Link>
            </div>
            <div className="right">
              <div className="desc">
                <img src="img/intro/dark.png" alt="image" />
                <h3 className="title">My Dark Portfolio</h3>
              </div>
              <Link className="intro_link" href="/darkLandingPage"></Link>
            </div>
          </div>
        </div>
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
}
/*
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}*/