import data from "../navdata.json";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "./Fontawesome";

export default function Navbar() {
  return (
    <>
      {/* <FontAwesomeIcon icon="chevron-down" /> */}
      <div className="align-items-center top-contact-section py-3">
        <div className="container d-flex inner-top-contact-section">
          <div className="justify-content-between top-level-header">
            <span className="header-discription">Welcome to our store DKart</span>
            <span className="header-discription">Call Us: 123-456-7890</span>
          </div>
          <div className="top-account-section">
            <span>
              <FontAwesomeIcon icon={faHeart} className="icons pe-2" /> Wishlist
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} className="icons pe-2" />
              My Account
            </span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "1000" }} className="nav-padding">
        <Nav datas={data} />
      </div>
    </>
  );
}
