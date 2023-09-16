import Link from "next/link";
const About = () => {
  return (
    <section id="author">
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in" data-bg-img="/img/about/1.jpg">
                  <img src="./img/about/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/about_author">
                    <a>About Author</a>
                  </Link>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-align="left"
              >
                Author
              </h3>
              <div className="desc">
                <p>
                  About Author of Twisting with AI. About Author of Twisting
                  with AI. About Author of Twisting with AI. About Author of
                  Twisting with AI. About Author of Twisting with AI. About
                  Author of Twisting with AI. About Author of Twisting with AI.
                  About Author of Twisting with AI. About Author of Twisting
                  with AI. About Author of Twisting with AI. About Author of
                  Twisting with AI. About Author of Twisting with AI. About
                  Author of Twisting with AI.
                </p>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
        </div>
      </div>
    </section>
  );
};
export default About;
