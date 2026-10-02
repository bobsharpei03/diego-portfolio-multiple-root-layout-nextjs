import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import dynamic from "next/dynamic";

const Partners = ({ dark }) => {
  const [data, setData] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false);

  const myFunction = async () => {
    setData(await fatchData("/static/partners.json"));
  }
  useEffect(() => {
    myFunction();
    setIsBrowser(true);
  }, []);
  if(!isBrowser){
    return null;
  }
  return (
    <div className="dizme_tm_section" id="partners">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Known Technologies</span>
            <h3>Platform and Framesworks</h3>
            <p>
            I Develop Skills Regularly to Keep Me Update
            </p>
            </div>
          <div className="partners_inner">
            <ul>
              {data && data.map((img, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                    {/*<div className="" id="">*/}
  {/*                    {parse(img.logo && img.logo[dark ? "dark" : "light"])} */}
                      {/*parse((img.logo?.[dark ? "dark" : "light"] || "").replace(/<\/?(html|body|head|script|link|meta)[^>]*>/gi, ""))*/}
                      <div className="svg_wrapper" dangerouslySetInnerHTML={{ __html: img.logo?.[dark ? "dark" : "light"] || "" }}></div>
                      <a className="dizme_tm_full_link" href={img.link}></a>
                    </div>
                  </li>
                ))}
            </ul>          
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="/img/brushes/partners/1.png" alt="image" />
        </div>      
      </div>
    </div>
  </div>
  );
};
//export default Partners;
export default dynamic (()=> Promise.resolve(Partners), {ssr : false});
