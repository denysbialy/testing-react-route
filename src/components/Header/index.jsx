import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header style={{ border: "1px solid gray", backgroundColor: "gray" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            height: "50px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
