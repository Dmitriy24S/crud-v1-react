import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        exact
        to="/crud-v1-react/read"
        activeStyle={{ color: "red" }}
        style={{ paddingRight: 30 }}
      >
        Create & Read
      </NavLink>
      <NavLink
        to="/crud-v1-react/update"
        activeStyle={{ color: "red" }}
        style={{ paddingRight: 30 }}
      >
        Update
      </NavLink>
    </div>
  );
}

export default Navbar;
