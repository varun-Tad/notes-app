import React from "react";
import axios from "axios";
import Button from "../../Components/Button";

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h3>Login</h3>
        <div className="inp-boxes">
          <label htmlFor="email"></label>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter email..."
            name="email"
            required
          ></input>
        </div>

        <div className="inp-boxes">
          <label htmlFor="password"></label>
          <input
            className="basic-inp-box"
            type="password"
            placeholder="Enter password..."
            name="password"
            required
          ></input>
          <div>
            <small>show password</small>
          </div>
        </div>
        <Button classname={"login-btn"} text={"Login"} btnType={"submit"} />
      </form>
    </div>
  );
};

export default LoginPage;
