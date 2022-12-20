import { useSelector } from "react-redux";

export default function Imagelist() {
  let imagedatas = useSelector((state) => state.imageData);

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
        {imagedatas != null &&
          imagedatas.map((file) => {
            let value = Object.values(file);
            let imageData = value.map((val, index) => {
              return (
                <div key={index} className="d-flex align-items-center mb-4" data-id={val.id}>
                  <input type="checkbox" className="me-3" onChange={(e) => fun(val.id, e, val)} />
                  <img src={val.url} className="me-2" style={{ height: "150px", width: "150px" }} />
                  <span className="text-uppercase" style={{fontWeight:"bolder",width:"150px"}}>{val.name}</span>
                  <table className="table m-0 text-center">
                    <tbody>
                      <tr>
                        {val.metadata.map((vals, index) => {
                          return (
                            <td scope="row" className="border-0 py-0 text-uppercase" key={index}>
                              {vals.value}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            });
            return imageData;
          })}
      </div>
    </>
  );
}
