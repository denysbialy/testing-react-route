import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
        backgroundColor: "#87f0ff",
      }}
    >
      <form
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          height: "300px",
          width: "300px",
        }}
      >
        <h1>Registration</h1>
        <input type="text" placeholder="login" />
        <br />
        <br />
        <input type="text" placeholder="password" />
        <br />
        <br />
        <button>Sign up</button>
        <br />
        <br />
        <Link to="./login" style={{ textDecoration: "none" }}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default Registration;
