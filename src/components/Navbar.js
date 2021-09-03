import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        exact
        to="/"
        activeStyle={{ color: "red" }}
        style={{ paddingRight: 30 }}
      >
        Create & Read
      </NavLink>
      <NavLink
        to="/update"
        activeStyle={{ color: "red" }}
        style={{ paddingRight: 30 }}
      >
        Update
      </NavLink>
    </div>
  );
}

export default Navbar;
