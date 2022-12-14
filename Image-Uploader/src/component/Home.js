import { useDispatch, useSelector } from "react-redux";
import { imagearr } from "../redux component/imageslice";


export default function Home() {
    let dispatch = useDispatch();
    let imagedata = useSelector((state)=>console.log(state.imagedata));
  function getFiles(e) {
    let fil = e.target.files;
    let fileArray = Array.from(fil);
    let imageurl = fileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    dispatch(imagearr(imageurl));

  console.log(imageurl)
  }

  return (
    <div>
      <input type="file" id="get-file" accept={".png,.jepg,.jpg"} onChange={getFiles} multiple />
    </div>
  );
}
