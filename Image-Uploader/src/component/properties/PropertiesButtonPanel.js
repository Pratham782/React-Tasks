import { useEffect } from "react";
import AddProperties from "./AddProperties";
import DeleteProperties from "./DeleteProperties";
import ResetProperties from "./ResetProperties";

export default function PropertiesButtonPanel() {
  
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
                <AddProperties />
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3" style={{ borderTop: "1px solid #dee2e6" }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Reset Properties
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ResetProperties />
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3" style={{ borderTop: "1px solid #dee2e6" }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Delete Properties
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <DeleteProperties />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
