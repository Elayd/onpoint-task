import React, { useState } from "react";
import del from "../../img/icons/delete.png";
import Pages from "../pages/pages";
import "./Toast.css";

const PAGE_LIMIT = 3;

const ADVANTAGES = [
  { id: "01", text: "Ut eu nulla pretium, semper ip" },
  { id: "02", text: "Aed nibh sapien, sollicitudin vitae purus vel" },
  { id: "03", text: "Vivamus placerat ut mauris et rutrum" },
  { id: "04", text: "ed vulputate porta felis, sed ullamcorper" },
  { id: "05", text: "Cras sodales ipsum in accumsan luctus" },
  { id: "06", text: "Sed vitae eros rhoncus, posuere nisl non" },
];

const Toast = ({ toastState, setToastState }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const [advantagesPerPage] = useState(PAGE_LIMIT);

  const indexOfLastAdvantage = currentpage * PAGE_LIMIT;
  const indexOfFirstAdvantage = indexOfLastAdvantage - PAGE_LIMIT;
  const currentAdvantages = ADVANTAGES.slice(
    indexOfFirstAdvantage,
    indexOfLastAdvantage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const closeToast = () => {
    setToastState(false);
  };

  return (
    <div className="toast">
      <button className="toast__btn" onClick={closeToast}>
        <img src={del} alt="delete" />
      </button>
      <div className="toast__titles">
        <h2 className="toast__title">ПРЕИМУЩЕСТВА</h2>
        <h2 className="toast__title">
          BREND<span>XY</span>
        </h2>
      </div>
      <ul className="toast__list">
        {currentAdvantages.map((advantage, key) => (
          <>
            <li className="toast__number" key={key + advantage.id}>
              {advantage.id}
            </li>
            <li
              className="toast__advantage"
              key={`${key} ${advantage.id} text`}
            >
              {advantage.text}
            </li>
          </>
        ))}
      </ul>
      <Pages
        advantagesPerPage={advantagesPerPage}
        totalAdvantages={ADVANTAGES.length}
        paginate={paginate}
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Toast;
