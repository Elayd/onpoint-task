import React from "react";
import "./header.css";
import home from "../../../img/icons/home-2.svg";

const Header = ({ currentPage, setCurrentPage }) => {
  const svgPath = `${home}#svgView(preserveAspectRatio(none))`;

  const goToFirstSlide = () => {
    setCurrentPage(0);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li className="menu__item">
            <button className="menu__link" onClick={() => goToFirstSlide()}>
              <img src={svgPath} width="24px" height="24px" alt="home" />
            </button>
          </li>
          <li className="menu__item">PROJECT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
