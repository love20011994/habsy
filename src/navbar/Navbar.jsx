import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "./Mask-Group-Logo.png";
import HelpIcon from "./help-icon.svg";
import NotifiIcon from "./notification-icon.svg";
import SearchIcon from "./search-icon.svg";

function Navbar() {
  const [search, setSearch] = useState("");
  const [changes, setChanges] = useState(true);
  useEffect(() => {
    if (search == "") {
      setChanges(true);
    } else {
      setChanges(false);
    }
  }, [search]);

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="navbar-brand">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-items ">
          <div className="search ">
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <img src={SearchIcon} alt="search-icon" />
            {changes && <p>Search</p>}
          </div>
          <div className="icons-div">
            <div className="icons-right">
              <img src={NotifiIcon} alt="notification-icon" />
              <img src={HelpIcon} alt="help-icon" />
              <p>JA</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
