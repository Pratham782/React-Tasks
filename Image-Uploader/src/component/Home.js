import { useDispatch } from "react-redux";
import { collectImage } from "../redux component/imageslice";
import Imagelist from "./Imagelist";
import Propertiesbtn from "./properties/Propertiesbtn";

export default function Home() {
  let dispatch = useDispatch();

  let id = 0;
  function getImagFiles(e) {
    let file = e.target.files;
    let fileArray = Array.from(file);
    let imageurl = fileArray.map((files) => {
      id++;
      return { id: id, name: files.name, url: URL.createObjectURL(files) };
    });
    dispatch(collectImage(Object.assign({}, imageurl)));
  }

  return (
    <div>
      <div className="btn-section m-3">
        <label className="btn btn-outline-dark custom-file-upload">
          <input type="file" id="get-file" accept={".png,.jepg,.jpg"} onChange={getImagFiles} multiple />
          +Upload Images
        </label>
        <button className="btn btn-outline-dark">Edit Data</button>
      </div>
      <div className="row mx-2" style={{ height: "80vh" }}>
        <Imagelist />
        <Propertiesbtn />
      </div>
    </div>
  );
}
