import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination, A11y } from "swiper/modules";
import { fatchData } from "../utilits";
import dynamic from "next/dynamic";

// Import Swiper styles for version 12.x
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [swiperOptions, setSwiperOptions] = useState(null);

  const myFunction = async () => {
    setData(await fatchData("/static/testimonial.json"));
  };

  useEffect(() => {
    myFunction();
    
    // Simulating options loading (keeping your original 1000ms delay structure)
    setTimeout(() => {
      setSwiperOptions({
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".owl-dots",
          clickable: true,
        },
      });
    }, 1000);
  }, []);

  return (
    <div className="dizme_tm_section" id="testimonial">
      <div className="dizme_tm_testimonials">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Testimonials</span>
            <h3>What My Clients Say</h3>
            <p>
              Most common methods for designing websites that work well on desktop is responsive and adaptive design
            </p>
          </div>
          
          <div className="list_wrapper">
            <div className="total">
              <div className="in">
                <div className="owl-dots"></div> 
                
                {swiperOptions && (
                  <Swiper 
                    {...swiperOptions} 
                    modules={[Autoplay, Navigation, Pagination, A11y]} // Core modules are explicitly passed here
                  >
                    {data && data.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div className="text">
                          <p>{item.details}</p>
                        </div>
                        <div className="short">
                          <div className="image">
                            <div className="main" data-img-url={item.img} />
                          </div>
                          <div className="detail">
                            <h3>{item.name}</h3>
                            <span>{item.profession}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              
              <div className="left_details">
                <span className="circle green animPulse" />
                <span className="circle yellow animPulse" />
                <span className="circle border animPulse" />
              </div>
              <div className="right_details">
                <span className="circle yellow animPulse" />
                <span className="circle purple animPulse" />
                <span className="circle border animPulse" />
              </div>
            </div>
          </div>
          
          <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
            <img src="img/brushes/testimonials/1.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Testimonial), { ssr: false });
