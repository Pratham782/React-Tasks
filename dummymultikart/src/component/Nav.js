import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "./Fontawesome";

export default function Nav(props) {
  // let drop-show = (e) => {
  //   // e.target.nextSibling.classList.toggle("show-dropdown");

  // };

  // let drop-show2 = (e) => {
  //   // console.log(e.target.nextSibling.classList.toggle("show-dropdown"));
  // };

  return (
    <div className="container navbar">
      <div className="nav-header">
        <div className="nav-logo">
          <a href="#" className="nav-link">
            <img src={require("../images/logo.png")} className="nav-logo-img" />
          </a>
        </div>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        {props.datas.map((value, index) => {
          let arr2 = [];
          arr2 = Object.values(Object.values(value)[0]);
          let arr = [];
          arr = Object.keys(Object.values(value)[0]);
          return (
            <div className="dropdown" data-items={index} key={index}>
              <a className="dropBtn nav-links-anchor" href="#" style={{ textTransform: "uppercase" }}>
                {Object.keys(value)}
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" style={{ fontSize: "12px" }} />
              </a>
              <div className="drop-content">
                {arr.map((value, index) => {
                  return (
                    <div className="dropdown2" key={index}>
                      <a className="dropBtn2 nav-links-anchor drop-content-anchor" href="#">
                        {value}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="nav-icons">
        <div className="nav-btn">
          <label htmlFor="nav-check" className="nav-btn-lable">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul className="nav-icons-list">
          <li className="nav-icons-list-items">
            <div>
              <img src={require("../images/search_icon.png")} />
            </div>
          </li>
          <li className="nav-icons-list-items">
            <div>
              <img src={require("../images/gear_icon.png")} />
            </div>
          </li>
          <li className="nav-icons-list-items">
            <div>
              <img src={require("../images/junkbox_icon.png")} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
