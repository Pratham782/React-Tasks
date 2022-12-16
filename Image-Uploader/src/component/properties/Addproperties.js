import { useState } from "react";

export default function Addproperties() {
  let [properties, setproperties] = useState({
    trait_type: "",
    value: "",
    datatype: "number",
    defaultValue: "#00134",
  });
  let [objArr, setObjArr] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    console.log(properties);
    setObjArr((prev) => {
      return [...prev, properties];
    });
    console.log(objArr);
  }

  function handleChangeText(e) {
    setproperties((properties) => {
      return { ...properties, trait_type: e.target.value };
    });
  }

  function handleChange(e) {
    setproperties((properties) => {
      return { ...properties, value: e.target.value };
    });
  }
  return (
    <>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Property Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Text Here"
            onChange={handleChangeText}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputPassword1">Value</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Text Here" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}
