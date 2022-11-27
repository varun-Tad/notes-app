import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../../features/user/userSlice";

const Signuppage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [pwdType, setPwdType] = useState(false);

  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, email, lastName, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignUpSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      navigate("/");
      localStorage.setItem(`tokens`, response.data.encodedToken);
      resetFormFields();
      dispatch(changeUser(true));
    } catch (error) {
      toast.error("Error in sign up.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const login = () => {
    navigate("/Login");
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
        <p onClick={login}>Login</p>
      </nav>
      <div className="login-page">
        <form className="login-form" onSubmit={SignUpSubmitHandler}>
          <div className="form-header">
            <h2>Sign Up</h2>
            <p>Hey there ! Enter your details to create your account</p>
          </div>

          <div className="inp-boxes">
            <label htmlFor="firstName"></label>
            <input
              className="basic-inp-box"
              type="text"
              placeholder="Enter first name..."
              name="firstName"
              value={firstName}
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="inp-boxes">
            <label htmlFor="lastName"></label>
            <input
              className="basic-inp-box"
              type="text"
              placeholder="Enter last name..."
              name="lastName"
              value={lastName}
              required
              onChange={handleChange}
            ></input>
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
              placeholder="Enter Password..."
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

export default Signuppage;
