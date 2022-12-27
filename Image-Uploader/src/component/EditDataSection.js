import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPropertyData } from "../redux component/imageDataSlice";

export default function EditDataSection() {
  let { propertyConfig } = useSelector((state) => state.imageDataReducer);
  let dispatch = useDispatch();
  let [editedInputFieldValue, setInputFieldValue] = useState({
    changedPropertyDataId: "",
    value: "",
  });

  function handleButtonSubmittionData() {
    console.log(editedInputFieldValue);
    // dispatch(
    //   editPropertyData({
    //     value: editedInputFieldValue.value,
    //     changedPropertyDataId: editedInputFieldValue.changedPropertyDataId,
    //   })
    // );
    setInputFieldValue({ changedPropertyDataId: "", value: "" });
  }

  function handleEditData() {
    let editDataOuterSection = document.getElementsByClassName("edit-data-outer-section")[0];
    editDataOuterSection.classList.add("show");
  }
  function closeButtonOfEditdata() {
    let editDataOuterSection = document.getElementsByClassName("edit-data-outer-section")[0];
    editDataOuterSection.classList.remove("show");
  }

  function handleInputData(e, id) {
    setInputFieldValue({ value: e.target.value, changedPropertyDataId: id });
  }
  return (
    <>
      <button className="btn btn-outline-dark" onClick={handleEditData}>
        Edit Data
      </button>
      <div className="edit-data-outer-section">
        <div className="edit-data-section">
          <div className="d-flex justify-content-between p-3 mb-3" style={{ border: "1px solid black" }}>
            <h3>Edit Data</h3>
            <button className="btn btn-outline-dark" onClick={closeButtonOfEditdata}>
              X
            </button>
          </div>
          <div className="d-flex flex-column gap-3">
            {propertyConfig != null &&
              propertyConfig.map((proepertyData, index) => {
                return (
                  <div className="edit-data-properties-data row mt-2" key={index}>
                    <h5 className="me-3 text-capitalize col-4">{proepertyData.trait_type} :</h5>
                    <div className="col-6 p-0">
                      <input
                        type="text"
                        className=""
                        onChange={(e) => handleInputData(e, proepertyData.id)}
                        placeholder="                           Value         "
                        value={editedInputFieldValue.value}
                      />
                      <div style={{ textAlign: "end" }} className="mt-2">
                        <input type="checkbox" />
                        <label htmlFor="checkbox" className="mx-2">
                          Skip
                        </label>
                        <a href="#" style={{ textDecoration: "none", color: "black" }}>
                          Use Default
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="d-flex gap-3 justify-content-center mt-4">
            <button className="btn btn-outline-dark" onClick={handleButtonSubmittionData}>
              Save
            </button>
            <button className="btn btn-outline-dark" onClick={closeButtonOfEditdata}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
