import style from "./firstNavBar.module.css";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FirstNavBar = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.navBarList}>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo192.png"}
            className={style.logoImage}
            alt="logo"
          />
        </Link>
        <li className={style.listItem}>
          <Link to="/men">Men</Link>
        </li>
        <li className={style.listItem}>Women</li>
        <li className={style.listItem}>Mobile Cover</li>
      </div>
      <div className={style.navBarList}>
        <input
          className={style.inputBox}
          placeholder="🔍 Search by product, categoryor collection"
        />
        <li className={style.listItem2}>Login</li>
        <li className={style.listItem2}>
          <div className={style.icons}>
            <FaRegHeart />
          </div>
        </li>
        <li className={style.listItem2}>
          <div className={style.icons}>
            <IoBagOutline />
          </div>
        </li>
        <li className={style.listItem2}>
          <img
            src={process.env.PUBLIC_URL + "/india-flag.jpeg"}
            className={style.indianFlag}
            alt="indian-flag"
          />
        </li>
      </div>
    </div>
  );
};

export default FirstNavBar;
