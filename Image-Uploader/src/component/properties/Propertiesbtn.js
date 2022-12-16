import { useEffect } from "react";
import { useSelector } from "react-redux";
import Addproperties from "./Addproperties";
import Deleteproperties from "./Deleteproperties";
import Resetproperties from "./Resetproperties";

export default function Propertiesbtn() {
  let imagedata = useSelector((state) => state.count.value);

  useEffect(() => {
    let accordianBtn = document.querySelector(".accordion-button");
    let accordionDropdown = document.querySelector(".accordion-collapse");
    if (imagedata.length > 0) {
      accordianBtn.classList.remove("collapsed");
      accordionDropdown.classList.add("show");
      accordianBtn.setAttribute("data-bs-toggle", "collapse");
    } 
    // else {
    //   accordianBtn.classList.add("collapsed");
    //   accordionDropdown.classList.remove("show");
    //   accordianBtn.removeAttribute("data-bs-toggle", "collapse");
    // }
  });
  return (
    <>
      <div className="col-4">
        <div className="accordion " id="accordionExample" style={{ border: "2px solid balck" }}>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button "
                type="button"
                data-bs-target="#collapseOne"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Add Property
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Addproperties />
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3" style={{ borderTop: "1px solid #dee2e6" }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                // data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Reset Properties
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Resetproperties />
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3" style={{ borderTop: "1px solid #dee2e6" }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                // data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Delete Properties
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Deleteproperties />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
