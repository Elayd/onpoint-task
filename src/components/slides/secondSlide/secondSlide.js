import React, { useState, useRef } from "react";
import Header from "../../main/header/header";
import "./secondSlide.css";
import Onpoint from "../../main/onPoint/onPoint";
import second_sperms from "../../../img/second_sperms.png";

const MAX_SCROLL_VALUE = 100;

const SecondSlide = ({ currentpage, setCurrentPage }) => {
  const myRef = useRef();
  const [inputState, setInputState] = useState(0);
  const [textState, setTextState] = useState(0);

  const handleChange = (e) => {
    let value = e.target.value;

    const {
      scrollHeight: containerScrollHeight,
      offsetHeight: containerOffsetHeight,
      scrollTop: containerScrollTop,
    } = myRef.current;

    const scrollValue =
      (containerScrollHeight - containerOffsetHeight) *
      (value / MAX_SCROLL_VALUE);

    const scrollDifference = Math.ceil(scrollValue - containerScrollTop);

    myRef.current.scrollBy({
      top: scrollDifference,
      behavior: "smooth",
    });

    setInputState(value);
  };

  const handleTouchMove = (e) => {
    const value = textState;

    const {
      scrollHeight: containerScrollHeight,
      offsetHeight: containerOffsetHeight,
      scrollTop: containerScrollTop,
    } = myRef.current;

    const scrollValue =
      containerScrollHeight -
      containerOffsetHeight * (value / MAX_SCROLL_VALUE);

    const textScroll = Math.floor(scrollValue - containerScrollTop);

    myRef.current.scrollBy({
      top: textScroll,
      behavior: "smooth",
    });

    setTextState(textScroll);
  };

  return (
    <section className="slide" id="second" currentpage={currentpage}>
      <Header currentpage={currentpage} setCurrentPage={setCurrentPage} />
      <div className="title">
        <p className="title__text">Текст</p>
        <p className="title__text">сообщения</p>
      </div>
      <div>
        <input
          type="range"
          className="range"
          onInput={handleChange}
          value={inputState}
          max={MAX_SCROLL_VALUE}
        />
        <div
          className="spermtext"
          ref={myRef}
          onTouchMove={handleTouchMove}
          text={textState}
        >
          <p className="spermtext__paragraph">
            <span className="spermtext__name">Lorem ipsum dolor sit amet</span>{" "}
            consectetur adipiscing elit. Aenean ornare urna ut lorem laoreet
            pretium. Aliquam eleifend nulla enim, sed ultricies lorem lacinia
            fermentum. Pellentesque turpis diam, laoreet ac vulputate vitae,
            gravida eget nisl. Nunc efficitur imperdiet sem, non consectetur
            orci maximus ut. Proin euismod dolor lectus, ut pharetra nisl ornare
            a. Morbi sed laoreet ante. Aliquam non leo condimentum, tincidunt
            nulla vel, posuere sapien. Nulla sit amet eleifend nisi.
          </p>
          <p className="spermtext__paragraph">
            Ut eu nulla pretium, semper ipsum nec, tempor leo. Sed nibh sapien,
            sollicitudin vitae purus vel, pellentesque efficitur est. Praesent
            eget sapien at leo porta gravida quis vel nibh. Morbi euismod diam
            sit amet justo vehicula euismod. Etiam eleifend vel sapien quis
            interdum. Aenean orci mi, convallis ut velit eu, fringilla
            pellentesque est. Nam lobortis dui vitae lorem viverra pellentesque.
          </p>
          <p className="spermtext__paragraph">
            Vivamus placerat ut mauris et rutrum. Cras ipsum nulla, venenatis
            sed nisl eu, tincidunt tincidunt lectus. Curabitur orci lorem,
            malesuada quis enim vel, vestibulum egestas ligula. Cras viverra
            egestas fermentum. Sed vulputate porta felis, sed ullamcorper ipsum
            consectetur eget. In sodales lacinia pretium. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Suspendisse potenti. Fusce
            ut dignissim sapien. Nullam vel euismod quam, eget mollis nisi.
            Vivamus eleifend lobortis malesuada. Pellentesque euismod pretium
            tortor, eu luctus lacus accumsan eu. Aliquam erat volutpat. Cras
            auctor tortor nec dui tristique, non porttitor nibh placerat.
            Suspendisse mattis lacinia tortor vitae suscipit.
          </p>
          <p className="spermtext__paragraph">
            Cras sodales ipsum in accumsan luctus. Mauris tincidunt odio a metus
            pharetra imperdiet. Quisque finibus neque vel malesuada lobortis.
            Praesent scelerisque suscipit nisi, quis finibus lacus cursus vitae.
            Phasellus elementum erat at aliquet pharetra. Aenean viverra
            eleifend sollicitudin. Mauris imperdiet in diam non accumsan.
          </p>
          <p className="spermtext__paragraph">
            Suspendisse potenti. Quisque eu arcu a purus laoreet suscipit.
            Pellentesque a purus est. Sed vitae eros rhoncus, posuere nisl non,
            ornare risus. In a leo nec nisl tempor ultricies eget ac metus.
            Aenean purus dui, varius non orci et, condimentum aliquet orci.
            Pellentesque in bibendum dui. Nulla elementum, odio in interdum
            viverra, arcu ligula iaculis tortor, sed lobortis nisi nunc quis
            massa. Mauris iaculis, libero non lacinia dignissim, ipsum arcu
            mollis est, ac porta nulla libero sit amet dui. Proin faucibus,
            dolor vitae interdum pharetra, justo leo iaculis est, pellentesque
            gravida odio nibh vitae ex. Curabitur non leo bibendum augue mattis
            euismod nec id nunc. Nullam in ultrices mi. Nulla interdum interdum
            nisi non facilisis. Vestibulum at convallis tortor.
          </p>
        </div>
      </div>
      <img
        src={second_sperms}
        alt="sperms"
        className={currentpage === 1 ? "second_sperms" : "none"}
      />
      <Onpoint />
    </section>
  );
};

export default SecondSlide;
