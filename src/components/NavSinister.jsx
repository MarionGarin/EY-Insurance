import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png";
import back from "../images/back.png";

const NavSinister = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="col-md-4 ms-4">
          <Link to={`/home`}>
            <img
              src={back}
              alt=""
              width="30"
              height="24"
              className="mt-3 ml-5 mb-3"
            />
          </Link>
        </div>

        <div className="col-auto me-4">
          <Link to={`/`}>
            <img
              src={home}
              alt=""
              width="30"
              height="24"
              className="mt-3 ml-5 mb-3"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavSinister;
