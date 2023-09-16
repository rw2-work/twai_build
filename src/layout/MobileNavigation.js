import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { loginToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ loginToggle, }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fb.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => loginToggle(true)}
            >
              <span>Join Us</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="#what_is_twai">
                What&apos;s Twai
              </a>
            </li>
            <li>
              <a className="creative_link" href="#our_mission">
                Our Mission
              </a>
            </li>
            <li>
              <a className="creative_link" href="#why_twai">
                Why TWAI
              </a>
            </li>
            <li>
              <a className="creative_link" href="#topics">
                Topics
              </a>
            </li>
            <li>
              <a className="creative_link" href="#featured">
                Featured
              </a>
            </li>
            <li>
              <a className="creative_link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { loginToggle, })(
  MobileNavigation
);
