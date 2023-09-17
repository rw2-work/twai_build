import Link from "next/link";
import { connect } from "react-redux";
import { loginToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import React, { useState, useEffect } from "react";
const Header = ({ loginToggle }) => {
  const [theme, setTheme] = useState("dark-theme");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const MoonIcon = () => (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      className="moon-icon"
    >
      <path d="M6.584.005c.576-.116 1.012.512.703 1.012-1.596 2.578-1.209 5.997.97 8.23 1.668 1.608 3.979 2.285 6.273 1.903a.67.67 0 0 1 .694.996c-.279.488-.687.989-1.182 1.484-3.158 3.148-8.268 3.148-11.427 0-3.15-3.15-3.15-8.277-.015-11.411h0l.183-.188A7.44 7.44 0 0 1 6.584.005zM5.433 1.79l-.148.071a6.17 6.17 0 0 0-1.721 1.292h0l-.141.145a6.75 6.75 0 0 0 .14 9.382 6.75 6.75 0 0 0 9.527 0h0l.083-.085-.142-.001a8.57 8.57 0 0 1-5.539-2.216h0l-.183-.172C5.104 7.933 4.424 4.665 5.416 1.835h0l.016-.046.001.001zm9.194.159c.631-.523 1.506.39.891 1.003h0l-.078.086c-.599.728-.573 2.343.078 2.993h0l.054.058c.523.631-.39 1.506-1.003.891h0l-.086-.078c-.728-.599-2.343-.573-2.993.078h0l-.058.054c-.631.523-1.506-.39-.891-1.003h0l.078-.086c.599-.728.573-2.343-.078-2.993h0l-.054-.058c-.523-.631.39-1.506 1.003-.891h0l.086.078c.728.599 2.343.573 2.993-.078h0l.058-.054zm-.905 1.849l-.095.015a4.42 4.42 0 0 1-1.195 0h0l-.096-.015.015.097a4.42 4.42 0 0 1 0 1.195h0l-.015.096.096-.015a4.42 4.42 0 0 1 1.195 0h0l.095.015-.021-.097a4.42 4.42 0 0 1 0-1.195h0l.015-.097.007.001z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      className="sun-icon"
    >
      <path d="M8.001 14.001c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078v-.667c0-.368.299-.667.667-.667zm5.142-1.8l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm-9.405.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 4a4 4 0 1 1 0 8.001 4 4 0 1 1 0-8.001zm0 1.333a2.67 2.67 0 0 0-2.667 2.667 2.67 2.67 0 0 0 2.667 2.667 2.67 2.67 0 0 0 2.667-2.667 2.67 2.67 0 0 0-2.667-2.667zm-6.667 2c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005H.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zm14.001 0c.353 0 .644.275.665.628s-.237.659-.587.701l-.078.005h-.667c-.353 0-.644-.275-.665-.628s.237-.659.587-.701l.078-.005h.667zM3.209 2.267l.063.055.467.467c.248.249.26.648.028.912s-.63.302-.908.086l-.063-.055-.467-.467c-.248-.249-.26-.648-.028-.912s.63-.302.908-.086zm10.464.055c.238.238.261.615.055.88l-.055.063-.467.467c-.249.248-.648.26-.912.028s-.302-.63-.086-.908l.055-.063.467-.467c.26-.26.682-.26.943 0h0zM8.001 0c.338 0 .623.253.662.589l.005.078v.667c0 .353-.275.644-.628.665s-.659-.237-.701-.587l-.005-.078V.667c0-.368.299-.667.667-.667z"></path>
    </svg>
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    stickyNav();
  }, []);

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

          {/* Header component JSX code */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="theme-toggle-container">
              <div className="theme__toggle__div">
                <label className="theme js-theme">
                  <input
                    className="theme__input"
                    type="checkbox"
                    onChange={toggleTheme} // Call toggleTheme when the checkbox changes
                    checked={theme === "light-theme"} // Set the checkbox state based on the theme
                  />
                  <span className="theme__inner">
                    <span className="theme__box"></span>
                    <span className="theme__icon">
                      {theme === "dark-theme" ? <MoonIcon /> : <SunIcon />}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          )}

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

export default connect(mapStateToProps, { loginToggle })(Header);
