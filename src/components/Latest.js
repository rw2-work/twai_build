import Link from "next/link";
const Latest = () => {
  return (
    <section id="latest">
      <div className="container">
        <h3
          className="fn__maintitle big"
          // data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / AI and Society / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="#">
                      <a>Reasons Why People Use TwistingwithAI</a>
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="#">
                    <a>
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="read_more">
                  <Link href="#">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / AI in Economics and Business / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog-single">
                      <a>Growth of TwistingwithAI</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="#">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / AI in Economics and Business / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog-single">
                      <a>Growth of TwistingwithAI</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="#">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / AI and Society / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="#">
                      <a>Reasons Why People Use TwistingwithAI</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="#">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="#">
                <a className="metaportal_fn_button full">
                  <span>Read All Articles</span>
                </a>
              </Link>
            </div>
            <div className="right_bot">
              <p>
              We&apos;re a team passionate about the transformative power of AI. Join us on a journey through the ever-evolving world of artificial intelligence at Twisting with AI.
              </p>
            </div>
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default Latest;
