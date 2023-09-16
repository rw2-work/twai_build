import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Social from "./Social";
import LoginPopUp from "./LoginPopUp";



const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (

    <Fragment>

      <Head>
        <title>Twisting with AI | {pageTitle}</title>
      </Head>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* !Preloader */}
      {/* Login Popup */}
      <LoginPopUp />
      {/* !Login Popup */}
      {/* Main */}
      <div className="metaportal_fn_main">
        {/* Mobile Navigation */}
        <MobileNavigation />
        {/* !Mobile Navigation */}
        {/* Header */}
        <Header />
        {/* !Header */}
        {/* Content */}
        <div className="metaportal_fn_content">
          {children}
          {/* Footer */}
          <Footer />
          {/* !Footer */}
        </div>
        {/* !Content */}
        {/* Social */}
        <Social />
        {/* !Social */}
        {/* Totop */}
        <ScrollTop />
        {/* /Totop */}
      </div>
    </Fragment>
  );
};
export default Layout;
