// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Imagelist from "./component/Imagelist";
import Home from "./component/Home";
// import Navlinks from "./component/Navlinks";


function App() {
  // let router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navlinks />,
  //     children: [
  //       {
  //         path: "/home",
  //         element: <Home />,
  //       }
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
    <Home/>
    </>
  );
}

export default App;
