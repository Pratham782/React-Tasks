import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectMetadata, setPropertyConfig } from "../../redux component/imageslice";

export default function Addproperties() {
  let [properties, setProperties] = useState({
    trait_type: "",
    value: "",
    datatype: "number",
    defaultValue: "#00134",
  });
  let dispatch = useDispatch();
  let {propertyConfig} = useSelector((state) => state.imageDataReducer);
  console.log('propertyConfig: ', propertyConfig);
  
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(collectMetadata(Object.assign({}, properties)));
    //-----
    dispatch(setPropertyConfig([...propertyConfig, properties]))
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
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="proeprtyValue">Value</label>
          <input type="text" className="form-control" id="proeprtyValue" placeholder="Enter Text Here" onChange={handleChangePropertyValue} />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
}

// let [obj, setobj] = useState([]);

// useEffect(()=>{
//   dispatch(collectMetadata(obj));
// })

// function handleSubmit(event) {
//   event.preventDefault();
//   setobj([...obj,properties])
// }

// useEffect(() => {
//   arr.map((value)=>{
//   dispatch(collectMetadata(Object.assign({}, arr)));
//   })
// }, [det.length]);

// function handleSubmit(event) {
//   event.preventDefault();
//   setarr([...arr,properties]);
// }