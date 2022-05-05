import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ border: "1px solid gray", backgroundColor: "gray" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "145px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
              padding: "0",
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          ©denysbialy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
