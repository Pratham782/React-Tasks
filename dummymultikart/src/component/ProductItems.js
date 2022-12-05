export default function ProductItems(props) {
  return props.newData.map((val, index) => {
    let { price, image, category, title, id } = val;
    return (
      id > props.minitems &&
      id < props.maxitems && (
        <div className="row" key={index} style={{ padding: "10px 5px" }}>
          <div className="col-4 col-md-2 col-lg-4 text-center parent-aside-product-slider">
            <div
              alt={title}
              style={{
                height: "100px",
                width: "100px",
                background: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="col-8 col-md-10 col-lg-8 d-flex justify-content-end flex-column aside-product-slider  " style={{ textAlign: "start" }}>
            <div className="rating">
              <i className="fa fa-star " data-index="0"></i> <i className="fa fa-star" data-index="1"></i>{" "}
              <i className="fa fa-star" data-index="2"></i> <i className="fa fa-star" data-index="3"></i>{" "}
              <i className="fa fa-star" data-index="4"></i>
            </div>
            <h3 style={{ fontSize: "20px" }} className="aside-product-slider-heading">
              {category}
            </h3>
            <h5 style={{ fontSize: "15px" }} className="aside-product-slider-price">
              ${price} <span style={{ textDecoration: "line-through", color: "var(--light)" }}>{price * 2}</span>
            </h5>
          </div>
        </div>
      )
    );
  });
}

// items per page = 4
// number of items = 15
// current page = 0,1,2,3
// total pages = MATH.floor(number of items / items per page) + (0 || 1) // ref modulo for adding extra slide

// what to show per slide in case of Sliders

// > ((currentpage + 1) * items per page) - items per page //min limit
// < ((currentpage + 1) * items per page) //max limit
