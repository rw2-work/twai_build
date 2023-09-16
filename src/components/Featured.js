import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <h3
          className="fn__maintitle big"
          // data-text="RoadMap"
          data-align="center"
        >
          {/* RoadMap */}
          FEATURED POSTS
        </h3>
        <div className="fn_cs_roadmap">
          {/* <div className="step_holder">
            <div className="step_in" />
          </div> */}
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">October 09, 2022</p>
                      <h3 className="title">Featured One</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">October 17, 2022</p>
                      <h3 className="title">Featured Two</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">October 28, 2022</p>
                      <h3 className="title">Featured Three</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">November 11, 2022</p>
                      <h3 className="title">Featured Four</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">November 23, 2022</p>
                      <h3 className="title">Featured Five</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Featured</span>
                    <div className="item_in">
                      <p className="date">December 02, 2022</p>
                      <h3 className="title">Featured Six</h3>
                      <p className="desc">
                        Twisting With AI Sample Data. Twisting With AI Sample
                        Data. Twisting With AI Sample Data. Twisting With AI
                        Sample Data. Twisting With AI Sample Data.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
