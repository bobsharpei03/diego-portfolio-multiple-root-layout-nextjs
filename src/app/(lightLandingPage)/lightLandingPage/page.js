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
const Layout = dynamic(() => import("../layout"), {
  ssr: false,
});

const Page = () => {
  return (
    <Layout>  
      <Head>
        <title>Diego Maquill | Home</title>
      </Head>   
      <Home />    
      {/* HERO */}
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PROCESS */}
      <Process />
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Page;
