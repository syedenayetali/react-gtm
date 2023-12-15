// import "./App.css";
import { Fragment, useEffect, useState } from "react";
import TopBar from "./components/topbar/topBar";
import FirstNavBar from "./components/firstNavBar/firstNabBar";
import SecondNavBar from "./components/secondNavBar/secondNavBar";
import style from "./App.module.css";
import Plp from "./components/plp/plp";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const jsonedData = await fetchData.json();
      setData(jsonedData);
    })();
  }, []);
  return (
    <Fragment>
      {data.length === 0 && (
        <div className={style.loaderBg}>
          <span className={style.loader}></span>
        </div>
      )}
      <TopBar />
      <FirstNavBar />
      <SecondNavBar />
      <Switch>
        <Route path="/" component={Dashboard}></Route>
        <Route path="/men" component={Plp}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
