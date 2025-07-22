import React from "react";
import logo from "/imgs/logo.png";
import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src={logo} alt="" />
          <div className="email-box">
            <input placeholder="Enter Your Email" type="email" required />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-col">
          <h4>Foydali havolalar</h4>
          <ul>
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Loyihalar</a>
            </li>
            <li>
              <a href="#">Xizmatlar</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Foydali havolalar</h4>
          <ul>
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Loyihalar</a>
            </li>
            <li>
              <a href="#">Xizmatlar</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Foydali havolalar</h4>
          <ul>
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Loyihalar</a>
            </li>
            <li>
              <a href="#">Xizmatlar</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </footer>
  );
}

export default Footer;
