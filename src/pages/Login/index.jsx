import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
        backgroundColor: "lightgreen",
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
        <h1>login</h1>
        <input type="text" placeholder="login" />
        <br />
        <br />
        <input type="text" placeholder="password" />
        <br />
        <br />
        <button>Sign in</button>
        <br />
        <br />
        <Link to='./registration' style={{textDecoration: 'none'}}>Sign up</Link>
      </form>
    </div>
  );
};

export default Login;
