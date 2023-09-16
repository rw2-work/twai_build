import Link from "next/link";
const WhatIsTWAI = () => {
  return (
    <section id="what_is_twai">
      <div className="container">
        <h3 className="fn__title_counter" data-align="center">
          What &quot;Twisting with AI&quot; is all about?
        </h3>
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="steps_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">
                        Exploring AI&apos;s Impact
                      </h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">
                        Understanding Psychology of AI
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">AI and Creativity</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">
                        AI&apos;s Future Insights
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">
                        Ethical Considerations of AI
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">
                        Real-World Impacts of AI
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=G2fqAlgmoPo"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
      <div className="fn_cs_about" id="our_mission">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/about/1.jpg">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/about/bg.jpg" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle">Our Mission</h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                &quot;To inspire, educate, and engage a global community in
                exploring the intricate and transformative world of artificial
                intelligence. Our mission is to unravel the complexities of AI,
                foster a deeper understanding of its impact on society,
                creativity, and human psychology, and promote responsible and
                ethical AI development. Through thought-provoking content,
                interactive discussions, and collaborative initiatives, we aim
                to empower individuals to navigate the evolving landscape of AI,
                harness its potential for positive change, and ensure a future
                where AI and humanity coexist harmoniously.&quot;
              </p>
            </div>
            <a
              href="https://discord.com/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>READ MORE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatIsTWAI;
