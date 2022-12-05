import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "./Fontawesome";
import ProductSlides2 from "./ProductSlider2";
import ProductItems from "../component/ProductItems";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRef } from "react";

export default function Sliders(props) {
  let carouselRef = useRef();

  let properties = {
    loop: true,
    margin: 0,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    items: 1,
  };

  function leftBtn() {
    carouselRef.current.prev();
  }

  function rightBtn() {
    carouselRef.current.next();
  }

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="inner-left d-flex align-items-center">
              <h4 className="m-0 inner-left-heading"> UNDER $20 | FREE DELIVERY</h4>
              <div className="d-flex gap-2" id="forinner">
                <a style={{ cursor: "pointer" }} onClick={leftBtn}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                <a style={{ cursor: "pointer" }} onClick={rightBtn}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </div>
            <div className="d-flex inner-left-content position-relative">
              {props?.givedata?.length > 0 && (
                <OwlCarousel className="owl-carousel owl-theme" {...properties} ref={carouselRef}>
                  <div>
                    <ProductItems newData={props.givedata} minitems="0" maxitems="5" />
                  </div>
                  <div>
                    <ProductItems newData={props.givedata} minitems="4" maxitems="9" />
                  </div>
                  <div>
                    <ProductItems newData={props.givedata} minitems="8" maxitems="13" />
                  </div>
                  <div>
                    <ProductItems newData={props.givedata} minitems="12" maxitems="16" />
                  </div>
                </OwlCarousel>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-8">
            {/* inner right */}
            <div className="inner-right d-flex align-items-center px-3 py-1 py-md-0">
              <h4 className="m-0 inner-right-heading" style={{ fontWeight: 100 }}>
                RECOMMENDATIONS FOR YOU
              </h4>
              <div className="d-flex inner-right-recomm">
                <h6 className="disable m-0 inner-right-recomm-para">New Products</h6>
                <h6 className="disable m-0 inner-right-recomm-para">Featured Products</h6>
              </div>
            </div>
            {/* inner right content */}
            <div className="inner-right-content d-flex position-relative" style={{ color: "white", height: "70vh" }}>
              <ProductSlides2 givedatas={props.givedata} />

              {/* innner last banner */}
              <div className="inner-r-banner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
