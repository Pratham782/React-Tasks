import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ProductSlides2(props) {
  let properties = {
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 2,
        slideBy: 2,
      },
      400: {
        items: 2,
        slideBy: 2,
      },
      600: {
        items: 2,
        slideBy: 2,
      },
      700: {
        items: 3,
        slideBy: 3,
      },
      1000: {
        items: 4,
        slideBy: 4,
      },
      1200: {
        items: 4,
        slideBy: 4,
      },
      1400: {
        items: 4,
        slideBy: 4,
      },
    },
  };

  return (
    <div className="d-flex pt-3" style={{ overflowX: "auto" }}>
      <div className="d-flex gap-3 inner-r-c-first text-center" style={{ width: "100%", height: "200px", flexShrink: "0" }}>
        {props?.givedatas?.length > 0 && (
          <OwlCarousel className="owl-theme" {...properties}>
            {props.givedatas.map((val, index) => {
              let { image, category, price } = val;
              return (
                <div key={index} style={{ color: "black" }}>
                  <div className="mb-3" style={{ padding: "10px", border: "1px solid #eee" }}>
                    <div
                      alt={category}
                      style={{
                        height: "190px",
                        background: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="product-slider-inner">
                    <div className="rating">
                      <i className="fa fa-star " data-index="0"></i> <i className="fa fa-star" data-index="1"></i>{" "}
                      <i className="fa fa-star" data-index="2"></i> <i className="fa fa-star" data-index="3"></i>{" "}
                      <i className="fa fa-star" data-index="4"></i>
                    </div>
                    <h3 style={{ fontSize: "15px" }} className="mt-1 product-slider-inner-subheading">
                      {category}
                    </h3>
                    <h5 className="mt-1 product-slider-inner-price">${price}</h5>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
}

{
  /* <div className="d-flex pt-3" style={{ overflowX: "auto" }}>
        <div className="row inner-r-c-first text-center" style={{ width: "100%", height: "200px", flexShrink: "0" }}>
          {props.givedatas.map((val, index) => {
            let { image, rating, category, price, id } = val;
            return id < 5 ? (
              <div className="col-6 col-lg-3" key={index} style={{ color: "black" }}>
                <div className="mb-3">
                  <img src={image} alt={category} style={{ height: "100px", width: "100px" }} />
                </div>
                <div>
                  <h6>Rating : {rating.rate}</h6>
                  <h3 style={{ fontSize: "15px" }}>{category}</h3>
                  <h5>${price}</h5>
                </div>
              </div>
            ) : (
              <></>
            );
          })}
        </div>
        <div className="row inner-r-c-second text-center" style={{ width: "100%", height: "200px", flexShrink: "0" }}>
          {props.givedatas.map((val, index) => {
            let { image, rating, category, price, id } = val;
            return id > 6 && id < 11 ? (
              <div key={index} className="col-6 col-lg-3" style={{ color: "black" }}>
                <div className="mb-3">
                  <img src={image} alt={category} style={{ height: "100px", width: "100px" }} />
                </div>
                <div>
                  <h6>Rating : {rating.rate}</h6>
                  <h3 style={{ fontSize: "15px" }}>{category}</h3>
                  <h5>${price}</h5>
                </div>
              </div>
            ) : (
              <></>
            );
          })}
        </div>
      </div> */
}

// loop= {true}
//         margin= {20}
//         dots= {false}
//         autoplay= {true}
//         autoplayHoverPause={ true}
//         autoplayTimeout= {2000}
//         responsive={{
//         0: {
//           items: 2,
//           slideBy: 2,
//         },
//         400: {
//           items: 2,
//           slideBy: 2,
//         },
//         600: {
//           items: 2,
//           slideBy: 2,
//         },
//         700: {
//           items: 3,
//           slideBy: 3,
//         },
//         1000: {
//           items: 4,
//           slideBy: 4,
//         },
//         1200: {
//           items: 4,
//           slideBy: 4,
//         },
//         1400: {
//           items: 4,
//           slideBy: 4,
//         }
//     }}
