import style from "./dashboard.module.css";
import Plp from "../plp/plp";

const Dashboard = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/slider.png"}
        className={style.sliderImage}
        alt="slider"
      />
      <Plp />
    </div>
  );
};

export default Dashboard;
