import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import {loginToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import React, { useState } from 'react';


const Header = ({ loginToggle}) => {
  useEffect(() => {
    stickyNav();
  }, []);

  

const [theme, setTheme] = useState("dark-theme");

const toggleTheme = ()=>{
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
};

useEffect(()=>{

    document.body.className = theme;
}, [theme]);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul> 
            <li>
                <Link href="/#what_is_twai">
                  <a className="creative_link">What&apos;s TWAI</a>
                </Link>
              </li>
              <li>
                <Link href="/#our_mission">
                  <a className="creative_link">Our Mission</a>
                </Link>
              </li>
              <li>
                <Link href="/#why_twai">
                  <a className="creative_link">Why TWAI</a>
                </Link>
              </li>
              <li>
                <Link href="/#topics">
                  <a className="creative_link">Topics</a>
                </Link>
              </li>
              <li>
                <Link href="/#featured">
                  <a className="creative_link">Featured</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                loginToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Join Us</span>
            </a>



          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginToggle })(
  Header
);
