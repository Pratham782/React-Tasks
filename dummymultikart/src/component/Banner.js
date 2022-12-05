import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Banner() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <OwlCarousel className="owl-theme" loop nav items={1} margin={8} dots={false}>
        <div className="banner-one">
          <div className="carousel-content">
            <h4 className="carousel-content-subheading">Headsets For all Styles</h4>
            <h1 className="carousel-content-heading">starting $19</h1>
            <button className="btn btn-outline-dark carousel-content-btn">SHOP NOW</button>
          </div>
        </div>
        <div className="banner-second">
          <div className="carousel-content-second">
            <h4 className="carousel-content-second-subheading">Furnishing Deals</h4>
            <h1 className="carousel-content-second-heading">UP TO 70% OFF</h1>
            <button className="btn btn-outline-dark  carousel-content-second-btn">SHOP NOW</button>
          </div>
        </div>
      </OwlCarousel>

      <div className="container-fluid">
        <div className="row discount-banner">
          <div className="col-md-6 col-lg-3 position-relative pb-3 ps-md-2 ps-0 pe-0 pe-md-2">
            <a href="#">
              <div className="collection-banner p-right text-right">
                <div className="img-part">
                  <img src={require("../images/collection_one.jpeg")} className="img-fluid blur-up lazyload bg-img media" />
                </div>
                <div className="contain-banner banner-4">
                  <div>
                    <h4 className="banner-4-subheading">save 30%</h4>
                    <h2 className="banner-4-heading">women</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 position-relative pb-3 ps-md-2 ps-0 pe-0 pe-md-2">
            <a href="#">
              <div className="collection-banner p-right text-right">
                <div className="img-part">
                  <img src={require("../images/collection_second.jpeg")} className="img-fluid blur-up lazyload bg-img media" />
                </div>
                <div className="contain-banner banner-4 banner-4-sec">
                  <div>
                    <h4 className="banner-4-subheading">save 60%</h4>
                    <h2 className="banner-4-heading">headsets</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 position-relative pb-3 ps-md-2 ps-0 pe-0 pe-md-2">
            <a href="#">
              <div className="collection-banner p-right">
                <div className="img-part">
                  <img src={require("../images/collection_third.jpeg")} className="img-fluid blur-up lazyload bg-img media" />
                </div>
                <div className="contain-banner banner-4">
                  <div>
                    <h4 className="banner-4-subheading">save 60%</h4>
                    <h2 className="banner-4-heading">women</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 position-relative pb-3 ps-md-2 ps-0 pe-0 pe-md-2">
            <a href="#">
              <div className="collection-banner p-left">
                <div className="img-part">
                  <img src={require("../images/collection_fourth.jpeg")} className="img-fluid blur-up lazyload bg-img media" />
                </div>
                <div className="contain-banner banner-5">
                  <div className="jewellery-banner">
                    <h4 className="banner-5-subheading">save 60%</h4>
                    <h2 className="banner-5-heading">jewellery</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
