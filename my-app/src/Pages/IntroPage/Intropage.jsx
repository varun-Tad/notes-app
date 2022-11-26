import React from "react";
import Button from "../../Components/Button";
import Introimg from "../../images/intro-image.svg";
import { useNavigate, Link } from "react-router-dom";
import "../../dist/css/main.css";

const Intropage = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="intro-page-container">
        <div className="left-side">
          <div className="left-side-inner">
            <div className="heading">
              <h1>
                Take <span>Note</span>
              </h1>
            </div>

            <div className="para">
              <h2>Meet your modern</h2>
              <h2 className="colored-h2">note taking App</h2>
              <p>
                Manage your daily tasks and workflow in a modern way and boost
                your efficiency without any efforts.
              </p>
            </div>

            <div className="footer">
              <Button text={"Join Now"} classname={"joinNow-btn"} />
              <Link to="/Login">Already have an account ?</Link>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="intro-img-container">
            <img src={Introimg} alt="intro" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intropage;
