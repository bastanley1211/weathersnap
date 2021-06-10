import React from "react";
import { Link } from "react-router-dom";
import logo from "../weathersnaplogo.png";

function Header(props) {
  return (
    <div className="row">
      <div className="col-12">
        <img
          src={logo}
          width="75px"
          alt="weathersnap logo a vector of a camera with a lightning bolt and snowflake on it"
        />
      </div>
      <div className="col-12">
        <Link to="/home" id="headerBrand">
          <h1>WeatherSnap</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
