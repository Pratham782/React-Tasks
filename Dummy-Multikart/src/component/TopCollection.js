export default function TopCollection(props) {
  return (
    <div className="collection-main">
      <div className="collection-title container text-center">
        <h4 className="collection-title-subheading">Special Offer</h4>
        <h2 className="collection-title-heading">TOP COLLECTION</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="m-auto col-lg-6 top-collection-para">
            <p className="text-center inner-top-collection-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="products row">
          {props.setdata.map((val, index) => {
            let { category, image, price } = val;
            return (
              <div key={index} className="product-inner col-6 col-md mb-3">
                <div className="main-product-img">
                  <div alt={category} className="topcol-product-img m-auto" style={{ background: `url(${image})` }} />
                  <button className="btn topcol-add-to-cart-btn">ADD TO CART</button>
                </div>
                <div>
                  <div className="rating product-inner-rating">
                    <i className="fa fa-star " data-index="0"></i> <i className="fa fa-star" data-index="1"></i>{" "}
                    <i className="fa fa-star" data-index="2"></i> <i className="fa fa-star" data-index="3"></i>{" "}
                    <i className="fa fa-star" data-index="4"></i>
                  </div>
                  <h4 className="product-inner-subheading">{category}</h4>
                  <h5 className="product-inner-price">${Math.floor(price)}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
