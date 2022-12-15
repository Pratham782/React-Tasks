import { useSelector } from "react-redux";

export default function Imagelist() {
  let imagedata = useSelector((state) => state.count.value);

  function fun(id, e, value) {
    if (e.target.checked) {
      console.log(id === value.id);
      console.log("orr bhai");
    } else {
      console.log("failed");
    }
  }

  return (
    <>
      <div className="image-section col-8">
        {imagedata != null &&
          imagedata.map((file) => {
            let value = Object.values(file);
            let imageData = value.map((val, index) => {
              return (
                <div key={index} className="d-flex align-items-center mb-4" data-id={val.id}>
                  <input type="checkbox" className="form-check-input me-3" style={{ fontSize: "20px" }} onChange={(e) => fun(val.id, e, val)} />
                  <img src={val.url} className="me-2" style={{ height: "150px", width: "150px" }} />
                  <h5>{val.name}</h5>
                </div>
              );
            });
            return imageData;
          })}
      </div>
    </>
  );
}
