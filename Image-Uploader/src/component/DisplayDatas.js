import { useDispatch, useSelector } from "react-redux";
import { setPropertyToImageData, editPropertyData } from "../redux component/imageDataSlice";

export default function DisplayDatas() {
  let { imageData, propertyConfig,editedData } = useSelector((state) => state.imageDataReducer);
  let dispatch = useDispatch();
  dispatch(setPropertyToImageData(propertyConfig));

  function handleCheckboxData(id, e, value) {
    if (e.target.checked) {
      if (id === value.id) {
        // let {value,changePropertyDataId} = editedData
        dispatch(editPropertyData({getId: id}));
      }
    }
  }

  return (
    <>
      <div className="image-section col-8">
        {/* <div className="d-flex justify-content-end text-uppercase">
          <div className="d-flex align-items-center justify-content-around" style={{width: "65%" }}>
            {propertyConfig.map((propertyData) => {
              return <h4>{propertyData.trait_type}</h4>;
            })}
          </div>
        </div> */}
        {imageData != null &&
          imageData.map((file) => {
            let showGetData = file.map((imageFilesData, index) => {
              return (
                <>
                  <div key={index} className="d-flex align-items-center mb-4" style={{ border: "1px solid black", padding: "10px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      style={{ width: "18px", height: "18px" }}
                      onChange={(e) => handleCheckboxData(imageFilesData.id, e, imageFilesData)}
                    />
                    <img src={imageFilesData.url} className="me-2" style={{ height: "100px", width: "100px" }} />
                    <span className="text-uppercase" style={{ fontWeight: "bolder", width: "150px" }}>
                      {imageFilesData.name}
                    </span>
                    <div style={{ overflow: "scroll", width: "300px", height: "50px" }} key={index}>
                      <table className="table m-0 text-center">
                        <tbody>
                          <tr>
                            {imageFilesData.metadata != null &&
                              imageFilesData.metadata.map((propertyData, index) => {
                                return (
                                  <td scope="row" className="border-0 py-0 text-uppercase" key={index}>
                                    {propertyData.value}
                                  </td>
                                );
                              })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-outline-dark">Delete</button>
                  </div>
                </>
              );
            });
            return showGetData;
          })}
      </div>
    </>
  );
}
