import React from "react";
import "./button.css";

const Button = ({ text, id, onClick }) => {
  return (
    <button className="btn" id={id} onClick={onClick}>
      <div className="btnArrow">
        <div></div>
      </div>
      <span id="btnText">{text}</span>
    </button>
  );
};
export default Button;
