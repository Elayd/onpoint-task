import React from "react";
import "./firstSlideText.css";

const firstSlideText = () => {
  return (
    <div className="text">
      <p className="text__hello">Привет,</p>
      <p className="text__main">
        ЭТО
        <span className="text__main text__not"> НЕ</span>
      </p>
      <p className="text__main">КОММЕРЧЕСКОЕ</p>
      <p className="text__main text__priority">ЗАДАНИЕ</p>
    </div>
  );
};

export default firstSlideText;
