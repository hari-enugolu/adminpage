import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [state, setstate] = useState(false);
  const showDropdown = () => {
    setstate(true);
  };
  const hideDropdown = () => {
    setstate(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-menu"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        People
        {state ? (
          <ul className="dropdown-list" onMouseEnter={showDropdown}>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/suppliers">Suppliers</Link>
            </li>
            <li>
              <Link to="/deliveries">Deliveries</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
