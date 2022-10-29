import bubble_1 from "../../../img/3_blue_1.png";
import bubble_2 from "../../../img/3_blue_2.png";
import bubble_3 from "../../../img/3_blue_3.png";
import bubble_4 from "../../../img/3_blue_4.png";
import bubble_5 from "../../../img/3_blue_5.png";
import pink_1 from "../../../img/3_pink_1.png";
import pink_2 from "../../../img/3_pink_2.png";
import pink_3 from "../../../img/3_pink_3.png";
import "./bubbles.css";

const Bubbles = () => {
  return (
    <>
      <img src={bubble_1} alt="bubble" className="bubble bubble1" />
      <img src={bubble_2} alt="bubble" className="bubble bubble2" />
      <img src={bubble_3} alt="bubble" className="bubble bubble3" />
      <img src={bubble_4} alt="bubble" className="bubble bubble4" />
      <img src={bubble_5} alt="bubble" className="bubble bubble5" />
      <img src={pink_1} alt="bubble" className="bubble pink1" />
      <img src={pink_2} alt="bubble" className="bubble pink2" />
      <img src={pink_3} alt="bubble" className="bubble pink3" />
    </>
  );
};

export default Bubbles;
