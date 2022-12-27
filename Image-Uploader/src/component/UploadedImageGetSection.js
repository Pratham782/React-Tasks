import { useDispatch, useSelector } from "react-redux";
import { setImageData } from "../redux component/imageDataSlice";
import ShowImageDatas from "./ShowImageDatas";
import PropertiesButtonPanel from "./properties/PropertiesButtonPanel";
import EditDataSection from "./EditDataSection";
import { v4 as uuidv4 } from "uuid";

export default function UploadedImageGetSection() {
  let dispatch = useDispatch();
  let { imageData } = useSelector((state) => state.imageDataReducer);

  // let id = 0;
  function getImageFiles(e) {
    let file = e.target.files;
    let fileArray = Array.from(file);
    let imageFileUrlData = fileArray.map((files) => {
      // id++;
      let displayName = files.name;
      let sliceDisplayName = displayName.slice(0, 10);
      return { id: uuidv4(), name: sliceDisplayName, url: URL.createObjectURL(files) };
    });
    console.log();
    dispatch(setImageData(imageFileUrlData));
  }

  return (
    <div>
      <div className="btn-section m-3">
        <label className="btn btn-outline-dark custom-file-upload">
          <input type="file" id="get-file" accept={".png,.jepg,.jpg"} onChange={getImageFiles} multiple />
          +Upload Images
        </label>
        <EditDataSection />
      </div>
      <div className="row mx-2" style={{ height: "80vh" }}>
        <ShowImageDatas />
        <PropertiesButtonPanel />
      </div>
    </div>
  );
}
