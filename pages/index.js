import { Swiper, SwiperSlide } from "swiper/react";
import WhatIsTWAI  from "../src/components/WhatIsTWAI";
import Topics from "../src/components/Topics";
import Contact from "../src/components/Contact";
import WhyTWAI from "../src/components/WhyTWAI";
import Latest from "../src/components/Latest";
import Featured from "../src/components/Featured";
import Author from "../src/components/Author";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { hero6Slider } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <section id="full_slider">
        <div className="fn_cs_full_slider">
          <Swiper {...hero6Slider} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/Human_to_AI.png" />
                <h3 className="fn__maintitle big">
                  Slide 1
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/Kids_playing_on_Assi_Ghat.png" />
                <h3 className="fn__maintitle big">
                  Slide 2
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/Varanasi_Ghats.png" />
                <h3 className="fn__maintitle big">
                  Slide 3
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/4.jpg" />
                <h3 className="fn__maintitle big">
                  Slide 4
                </h3>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="bg_overlay" />
                <div className="abs_img" data-bg-img="/img/full_slider/5.jpg" />
                <h3 className="fn__maintitle big">
                  Slide 5
                </h3>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
      </section>
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <WhatIsTWAI />
      {/* !Section About */}
      {/* WhyTWAI */}
      <WhyTWAI />
      {/* !WhyTWAI */}
      {/* Topics Section */}
      <Topics />
      {/* !Topics Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section Featured */}
      <Featured />
      {/* !Section Featured */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section Latest */}
      <Latest />
      {/* !Section Latest */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      <Author />
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
