import React, { useState } from "react";
import axios from "axios";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, printUser } from "../../features/user/userSlice";

const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [pwdType, setPwdType] = useState(false);

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("notes-login-token", response.data.encodedToken);
      resetFormFields();
      navigate("/");
      dispatch(changeUser(true));

      toast.success("You are logged in !", {
        autoClose: 3000,
      });
    } catch (err) {
      console.log(err);
      toast.error("Error in login.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signUp = () => {
    navigate("/SignUp");
  };

  const showPwdHandler = () => {
    setPwdType(!pwdType);
  };

  return (
    <>
      <nav className="login-navbar">
        <h1>
          Take<span>Note</span>
        </h1>
        <p onClick={signUp}>Sign Up</p>
      </nav>
      <div className="login-page">
        <form className="login-form" onSubmit={loginSubmitHandler}>
          <div className="form-header">
            <h2>Login</h2>
            <p>Hey there ! Enter your details to sign into your account</p>
          </div>

          <div className="inp-boxes">
            <label htmlFor="email"></label>
            <input
              className="basic-inp-box"
              type="email"
              placeholder="Enter email..."
              name="email"
              value={email}
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="inp-boxes">
            <label htmlFor="password"></label>
            <input
              className="basic-inp-box"
              type={pwdType ? "text" : "password"}
              placeholder="Enter password..."
              name="password"
              value={password}
              required
              onChange={handleChange}
            ></input>
            <div>
              <small onClick={() => showPwdHandler()} className="showPwd-text">
                {pwdType ? "hide password" : "show password"}
              </small>
            </div>
          </div>
          <Button classname="login-btn" text="Login" btnType="submit" />
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
