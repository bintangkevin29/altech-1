/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import igLogo from "../../assets/social/instagram-white.svg";
import fbLogo from "../../assets/social/facebook-white.svg";
import twitterLogo from "../../assets/social/twitter-white.svg";

import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          <a href="#">Home</a> | <a href="#">Terms and Conditions</a> |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Collection Statement</a>{" "}
          | <a href="#">Help</a> | <a href="#"> Manage Account</a>
        </div>
        <div className="footer__copyright">
          &copy; Demo Streaming. All Rights Reserved.
        </div>
        <div className="footer__bottom">
          <div className="footer__socials">
            <img src={fbLogo} alt="" />
            <img src={igLogo} alt="" />
            <img src={twitterLogo} alt="" />
          </div>
          <div className="footer__app-store">
            <img src={appStore} alt="" />
            <img src={windowsStore} alt="" />
            <img src={playStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
