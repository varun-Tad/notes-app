import React from "react";

import Button from "../../Components/Button";
import Introimg from "../../images/intro-image.svg";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../dist/css/main.css";
import { changeUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Intropage = () => {
  let navigate = useNavigate();
  const signStatus = useSelector((state) => state.user.userState);
  const dispatch = useDispatch();

  const navigateToSignOut = () => {
    navigate("/SignUp");
  };

  const IntrosignOutHandler = () => {
    localStorage.removeItem("notes-login-token");
    console.log("log out successful");

    dispatch(changeUser(false));

    toast.success("Logout successful", {
      autoClose: 3000,
    });
  };

  const IntrosignInHandler = () => {
    navigate("/Login");
  };

  const takeNoteBtnHandler = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="intro-page-container">
        <div className="left-side">
          <div className="left-side-inner">
            <div className="heading">
              <h1>
                Take<span>Note</span>
              </h1>
            </div>

            <div className="para">
              <h2>Meet your modern</h2>
              <h2 className="colored-h2">note taking App</h2>
              <p>
                Manage your daily tasks and workflow in a modern way and boost
                your efficiency without any efforts.
              </p>
              <button onClick={takeNoteBtnHandler} className="takeNote-btn">
                Take notes ➜
              </button>
            </div>

            <div className="footer">
              <Button
                fn={navigateToSignOut}
                text="Join Now"
                classname="joinNow-btn"
              />
              <Link to="/Login">Already have an account ?</Link>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="signOut-btn-container">
            {signStatus ? (
              <Button
                fn={IntrosignOutHandler}
                text="Sign Out"
                classname="signOut-btn"
              />
            ) : (
              <Button
                fn={IntrosignInHandler}
                text="Sign In"
                classname="signIn-btn"
              />
            )}
          </div>

          <div className="intro-img-container">
            <img src={Introimg} alt="intro" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intropage;
