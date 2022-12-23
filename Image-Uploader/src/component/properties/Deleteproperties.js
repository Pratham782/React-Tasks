import { useDispatch, useSelector } from "react-redux";
import { deletePropertyData } from "../../redux component/imageDataSlice";

export default function Deleteproperties() {
  let { propertyConfig, imageData } = useSelector((state) => state.imageDataReducer);
  let dispatch = useDispatch();

  function submitSelectedData() {
    let selectedDeleteOptions = document.getElementById("chooseDeleteOption").value;

    imageData != null &&
      imageData.map((dataImageData) => {
        dataImageData.map((data) => {
          let [metadataValue] = data.metadata;
          let propertyName = metadataValue.trait_type;
          if (selectedDeleteOptions == propertyName) {
            dispatch(
              deletePropertyData({
                trait_type: propertyName,
              })
            );
          }
        });
      });
  }
  return (
    <>
      <select className="form-select text-uppercase" aria-label="Default select example" id="chooseDeleteOption">
        <option>Open this select menu</option>
        {propertyConfig != null &&
          propertyConfig.map((propertiesData, index) => {
            return (
              <option value={propertiesData.trait_type} key={index}>
                {propertiesData.trait_type}
              </option>
            );
          })}
      </select>
      <input type="submit" value="SUBMIT" className="btn btn-outline-dark mt-2" onClick={submitSelectedData} />
    </>
  );
}
