import { useDispatch } from "react-redux";
import { useState } from "react";
import { collectImage } from "../redux component/imageslice";
import Imagelist from "./Imagelist";
import Propertiesbtn from "./Propertiesbtn";

export default function Home() {
  let dispatch = useDispatch();

  function getFiles(e) {
    let fil = e.target.files;
    let fileArray = Array.from(fil);
    let imageurl = fileArray.map((file, index) => {
      return { id: index, name: file.name, url: URL.createObjectURL(file) };
      // yaha pe url ma url and extra name jee image no hoy tee obejct rite mokal vano like : return {id:index,name:file.name,url:URL.createObjectURL(file)};
    });
    dispatch(collectImage(Object.assign({}, imageurl)));
  }

  return (
    <div>
      <div className="btn-section m-3">
        <label className="btn btn-outline-dark custom-file-upload">
          <input type="file" id="get-file" accept={".png,.jepg,.jpg"} onChange={getFiles} multiple />
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
