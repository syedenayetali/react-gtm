import { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "../pdp/productCard";
import style from "./plp.module.css";
import Child from "./Child";

const Plp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const jsonedData = await fetchData.json();
      setData(jsonedData);
    })();
  }, []);

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const inc = () => {
    setNumber(number + 1);
  };
  const inc2 = () => {
    setNumber2(number2 + 1);
  };
  const newInc = useCallback(() => {
    console.log("Enayet");
  }, [number]);

  return (
    <div>
      <div className={style.viweSection}>
        {data.length > 0 && data.map((e) => <ProductCard itemdata={e} />)}
      </div>
      <h1>{number}</h1>
      <button onClick={inc}>Inc</button>
      <h1>{number2}</h1>
      <button onClick={inc2}>Inc</button>
      <Child setNumber={newInc} number={number} />
    </div>
  );
};

export default Plp;
