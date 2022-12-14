import { NavLink,Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="links" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className="links" to="/imagelist">Image List</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
