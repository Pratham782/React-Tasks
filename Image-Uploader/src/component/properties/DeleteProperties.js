import { useDispatch, useSelector } from "react-redux";
import { deleteAllPropertyData } from "../../redux component/imageDataSlice";

export default function DeleteProperties() {
  let { propertyConfig } = useSelector((state) => state.imageDataReducer);
  let dispatch = useDispatch();

  function submitSelectedData() {
    let selectedDeleteOptions = document.getElementById("chooseDeleteOption").value;

    propertyConfig != null &&
      propertyConfig.map((propertiesData) => {
        let propertyName = propertiesData.trait_type;
        if (selectedDeleteOptions == propertyName) {
          dispatch(deleteAllPropertyData({ trait_type: propertyName }));
        }
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
