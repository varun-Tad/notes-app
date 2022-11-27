import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props.fn}
        type={props.btnType}
        className={props.classname}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
