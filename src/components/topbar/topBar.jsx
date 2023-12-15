import style from "./topBar.module.css";

const TopBar = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.list}>
        <li className={style.listItem}>Offer</li>
        <li className={style.listItem}>Fanbook</li>
        <li className={style.listItem}>Download App</li>
        <li className={style.listItem}>TriBe Member</li>
      </div>
      <div className={style.list}>
        <li className={style.listItem}>Contact Us</li>
        <li className={style.listItem}>Teack Order</li>
      </div>
    </div>
  );
};

export default TopBar;
