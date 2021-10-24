import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import style from "./Footer.module.css";
import vector from "./Vector.png";
import vector1 from "./Vector1.png";
import vector2 from "./Vector2.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={vector} alt="" />
      <div className={style.wrapper}>
        <a
          className={style.link}
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn fill="#696969" />
        </a>
        <a
          className={style.link}
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter fill="#696969" />
        </a>
        <a
          className={style.link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF fill="#696969" />
        </a>
        <a
          className={style.link}
          href="https://www.pinterest.ru/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPinterestP fill="#696969" />
        </a>
      </div>
      <img className={style.img1} src={vector1} alt="" />
      <img className={style.img2} src={vector2} alt="" />
    </div>
  );
};
export default Footer;
