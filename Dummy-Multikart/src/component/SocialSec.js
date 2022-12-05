import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock, faTruck } from "./Fontawesome";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function SocialSec() {
  let serviceItems = [
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "FREE SHOPPING",
      discription: "Free Shipping World Wide",
    },
    {
      icon: <FontAwesomeIcon icon={faClock} />,
      title: "24 X 7 SERVICE",
      discription: "Online Service For New Customer",
    },
    {
      icon: <FontAwesomeIcon icon={faBullhorn} />,
      title: "FESTIVAL OFFER",
      discription: "New Online Special Festival Offer",
    },
  ];

  let options = {
    margin: 0,
    responsiveClass: true,
    dots: false,
    autoplay: false,
    loop: true,
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      1400: {
        items: 7,
      },
    },
  };

  return (
    <>
      <div style={{ backgroundColor: "white", overflow: "hidden" }}>
        <div className="container">
          <section className="section-border adjustment">
            <div className="row">
              {serviceItems.map((data, index) => {
                return (
                  <div className="col-md-4 d-flex align-items-center justify-content-center extra-border" key={index}>
                    <div className="services">
                      <div className="services-image">{data.icon}</div>
                      <div className="services-body">
                        <h4 className="services-body-heading">{data.title}</h4>
                        <p className="services-body-para">{data.discription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <h2 className="pt-4 pb-3 pt-md-5 pb-md-5 text-center" style={{ fontWeight: "bold" }} id="instagram">
          #INSTAGRAM
        </h2>

        {/* IMPORTANT :- If you want to use autoplay in owl carousel then use (autoplay in lowercase instead of capitalized)*/}

        <OwlCarousel className="owl-theme" {...options}>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/first.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/second.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/third.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/first.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/second.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/third.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/second.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/third.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/first.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
          <div style={{ padding: "0px" }} className="social-sec-carousel">
            <img src={require("../images/social/second.jpeg")} style={{ height: "100%", width: "100%" }} />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
