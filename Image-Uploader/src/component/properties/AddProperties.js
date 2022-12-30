import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyConfig } from "../../redux component/imageDataSlice";
import { v4 as uuidv4 } from "uuid";

export default function AddProperties() {
  let [properties, setProperties] = useState({
    id: uuidv4(),
    trait_type: "",
    value: "",
    datatype: "Datatype",
    defaultValue: "",
  });
  let dispatch = useDispatch();

  let { propertyConfig } = useSelector((state) => state.imageDataReducer);

  function handleSubmit(event) {
    event.preventDefault();
    if (properties.trait_type !== "" && properties.value !== "") {
      dispatch(setPropertyConfig([...propertyConfig, { ...properties, id: uuidv4() }]));
      setProperties({ ...properties, trait_type: "", value: "", defaultValue: "" });
    }
  }

  function handleChangePropertyName(e) {
    setProperties((properties) => {
      return { ...properties, trait_type: e.target.value };
    });
  }

  function handleChangePropertyValue(e) {
    setProperties((properties) => {
      return { ...properties, value: e.target.value };
    });
  }

  function handleChangePropertyDefaultValue(e) {
    setProperties((properties) => {
      return { ...properties, defaultValue: e.target.value };
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="propertyName">Property Name</label>
          <input
            type="text"
            className="form-control"
            id="propertyName"
            aria-describedby="propertyHelp"
            placeholder="Enter Text Here"
            onChange={handleChangePropertyName}
            value={properties.trait_type}
            autoComplete="off"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="proeprtyValue">Value</label>
          <input
            type="text"
            className="form-control"
            value={properties.value}
            id="proeprtyValue"
            placeholder="Enter Text Here"
            onChange={handleChangePropertyValue}
            autoComplete="off"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="proeprtyValue">Default Value</label>
          <input
            type="text"
            className="form-control"
            value={properties.defaultValue}
            id="proeprtyValue"
            placeholder="Enter Text Here"
            onChange={handleChangePropertyDefaultValue}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
}
