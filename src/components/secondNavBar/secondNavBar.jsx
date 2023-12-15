import style from "./secondNavBar.module.css";

const SecondNavBar = () => {
  return (
    <div className={style.navBarList}>
      <li className={style.listItem}>SALE</li>
      <li className={style.listItem}>LIVE NOW</li>
      <li className={style.listItem}>WINTERWEAR</li>
      <li className={style.listItem}>MEN</li>
      <li className={style.listItem}>WOMEN</li>
      <li className={style.listItem}>ACCESSORIES</li>
      <li className={style.listItem}>HEAVY DUTY</li>
      <li className={style.listItem}>BEWAKOOF AIR</li>
      <li className={style.listItem}>OFFICIAL MERCH</li>
      <li className={style.listItem}>PLUS SIZE</li>
    </div>
  );
};

export default SecondNavBar;
