import { faEnvelope, faLocationDot, faPhone } from "./Fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="footer px-md-3 px-md-0">
        <div className="container inner-footer-sec px-0">
          {/* <div className="row" style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}>
            <div className="col-12 col-md-6 inner-sec-footer">
              <h4>KNOW IT ALL FIRST</h4>
              <p>Never Miss Anything From Dkart By Signing Up To Our Newsletter</p>
            </div>
            <div className="col" style={{ width: "500px" }}>
              <input type="text" className="me-2" style={{ padding: "10px", width: "60%" }} placeholder="Enter Your Email" />
              <button className="btn btn-dark" style={{ padding: "10px" }}>
                SUBSCRIBE
              </button>
            </div>
          </div> */}
          <div className="container">
            <section className="adjustment outer-subscribe border-section border-top-0">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="subscribe">
                    <div>
                      <h4 className="subscribe-heading">KNOW IT ALL FIRST!</h4>
                      <p className="subscribe-para">Never Miss Anything From Multikart By Signing Up To Our Newsletter. </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="form-inline subscribe-form">
                    <div className="mx-sm-3 form-group">
                      <input id="exampleFormControlInput1" placeholder="Enter your email" type="text" className="form-control pb-sm-3" />
                    </div>
                    <button type="submit" className="btn btn-solid btn btn-secondary subscribe-form-btn">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className="container">
            <section className="second-footer">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4  d-flex flex-column gap-3 pb-3 mb-3 pb-lg-0 mb-lg-0" id="bb-for-footer">
                  <p className="footer-c-title " id="about-sec-footer">
                    ABOUT
                  </p>
                  <div className="fot-header">
                    <div className="fot-logo">
                      <a href="#">
                        <img src={require("../images/logo.png")} />
                      </a>
                    </div>
                  </div>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam,
                  </p>
                  <div className="social-icons d-flex justify-content-between" style={{ width: "300px", fontSize: "20px" }}>
                    <a href="#" style={{ color: "black", cursor: "pointer" }}>
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" style={{ color: "black", cursor: "pointer" }}>
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" style={{ color: "black", cursor: "pointer" }}>
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" style={{ color: "black", cursor: "pointer" }}>
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#" style={{ color: "black", cursor: "pointer" }}>
                      <i className="fa fa-rss"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2 pb-1 mb-1 pb-md-3 mb-md-3 pb-lg-0 mb-lg-0" id="bb-for-footer">
                  <p className="footer-c-title">MY ACCOUNT</p>
                  <ol className="d-flex flex-column gap-2" style={{ listStyle: "none", color: "grey", padding: "0px" }}>
                    <li className="footer-list-item">Women</li>
                    <li className="footer-list-item">Clothing</li>
                    <li className="footer-list-item">Accessories</li>
                    <li className="footer-list-item">Featured</li>
                  </ol>
                </div>
                <div className="col-12 col-md-6 col-lg-3 pb-1 mb-1 pb-md-3 mb-md-3 pb-lg-0 mb-lg-0" id="bb-for-footer">
                  <p className="footer-c-title">WHY WE CHOOSE</p>
                  <ol style={{ listStyle: "none", color: "grey", padding: "0px" }} className="d-flex flex-column gap-2">
                    <li className="footer-list-item">Shipping & Return</li>
                    <li className="footer-list-item">Secure Shopping</li>
                    <li className="footer-list-item">Gallary</li>
                    <li className="footer-list-item">Affiliates</li>
                    <li className="footer-list-item">Contacts</li>
                  </ol>
                </div>
                <div className="col-12 col-md-6 col-lg-3 pb-md-0" id="bb-for-footer">
                  <p className="footer-c-title">STORE INFORMATION</p>
                  <ol style={{ listStyle: "none", color: "grey", padding: "0px" }} className="d-flex flex-column gap-2">
                    <li className="footer-list-item">
                      <FontAwesomeIcon icon={faLocationDot} /> Multikart Demo Store, Demo store India 345-659
                    </li>
                    <li className="footer-list-item">
                      <FontAwesomeIcon icon={faPhone} /> Call Us: 123-456-7898
                    </li>
                    <li className="footer-list-item">
                      <FontAwesomeIcon icon={faEnvelope} /> Email Us: Support@Fiot.com
                    </li>
                    <li className="footer-list-item">
                      <FontAwesomeIcon icon={faPhone} /> Fax : 12345
                    </li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff" }} className="copyright-section">
        <div style={{ height: "80px" }} className="container d-flex align-items-center inner-copyright-section">
          <p className="m-0 copyright-section-para">&copy; {year} All rights are reserved</p>
        </div>
      </div>
    </React.Fragment>
  );
}
