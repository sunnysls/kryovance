import React from "react";
import Logo from "../assets/logo.svg";
import Footerproduct from "../assets/footer-product.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer__maintext-box">
                <figure>
                  <a href="#">
                    <img src={Logo} alt="FunduPedia" />
                  </a>
                </figure>
                <p>
                  Kryovance is a trusted destination for top-quality electronics
                  and accessories. Our commitment is to deliver innovation,
                  reliability, and exceptional value to every customer.
                </p>
                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Hot Products</div>
              <div className="footerproduct">
                <div className="footerPimg">
                  <figure>
                    <img src={Footerproduct} alt="" />
                  </figure>
                </div>
                <div className="footerproduct-text">
                  <h3>
                    <a href="#">HP Smart Tank 670 AI...</a>
                  </h3>
                  <p>₹18000</p>
                </div>
              </div>
              <div className="footerproduct">
                <div className="footerPimg">
                  <figure>
                    <img src={Footerproduct} alt="" />
                  </figure>
                </div>
                <div className="footerproduct-text">
                  <h3>
                    <a href="#">HP Smart Tank 670 AI...</a>
                  </h3>
                  <p>₹18000</p>
                </div>
              </div>
              <div className="footerproduct">
                <div className="footerPimg">
                  <figure>
                    <img src={Footerproduct} alt="" />
                  </figure>
                </div>
                <div className="footerproduct-text">
                  <h3>
                    <a href="#">HP Smart Tank 670 AI...</a>
                  </h3>
                  <p>₹18000</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Useful Links</div>
              <ul className="footer_tabs">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="footer_heading">Get Contact</div>
              <form action="" className="newsletter">
                <div className="form-floating">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <button aria-label="submit" value="submit" type="button">
                  Submit
                </button>
              </form>

              <ul className="footer_tabs">
                <li>
                  <a href="tel:+91 97118 76094">Phone: +91 97118 76094</a>
                </li>
                <li>
                  <a href="mailto:sales@slsyn.com">E-mail: sales@slsyn.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="last-footer">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <ul className="privacy_list">
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12">
                <p>
                  Copyright@ 2025 <span>Kryovance</span>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
