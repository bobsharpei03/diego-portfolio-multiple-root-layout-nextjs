"use client"; // This is a client component
import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../../../components/About";
import Contact from "../../../components/Contact";
import News from "../../../components/News";
import Newsletter from "../../../components/Newsletter";
import Partners from "../../../components/Partners";
import Process from "../../../components/Process";
import Service from "../../../components/Service";
import Skills from "../../../components/Skills";
import Testimonial from "../../../components/Testimonial";

const Home = dynamic(() => import("../../../components/Home"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("../../../components/Portfolio"), {
  ssr: false,
});
const Layout = dynamic(() => import("../layout"), { ssr: false,});

const Page = () => {
  return (
    <Layout dark>
      <Head>
        <title>Diego Maquill | Home</title>
      </Head>   
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <Process dark />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills dark />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service dark />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners dark />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Page;
