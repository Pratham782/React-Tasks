import { useDispatch, useSelector } from "react-redux";
import { resetPropertyData } from "../../redux component/imageDataSlice";

export default function ResetProperties() {
  let { propertyConfig } = useSelector((state) => state.imageDataReducer);
  let dispatch = useDispatch();

  function submitSelectedData() {
    let selectedOptions = document.getElementById("chooseOption").value;

    propertyConfig.map((propertiesData) => {
      let defaultValueOfProperty = propertiesData.defaultValue;

      let propertyName = propertiesData.trait_type;

      if (selectedOptions == propertiesData.trait_type) {
        dispatch(
          resetPropertyData({
            trait_type: propertyName,
            defaultValue: defaultValueOfProperty,
          })
        );
      }
    });
  }
  return (
    <>
      <select className="form-select text-uppercase" aria-label="Default select example" id="chooseOption">
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
