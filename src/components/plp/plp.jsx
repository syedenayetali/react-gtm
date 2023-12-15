import { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "../pdp/productCard";
import style from "./plp.module.css";

const Plp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const jsonedData = await fetchData.json();
      setData(jsonedData);
    })();
  }, []);

  return (
    <div>
      <div className={style.viweSection}>
        {data.length > 0 && data.map((e) => <ProductCard itemdata={e} />)}
      </div>
    </div>
  );
};

export default Plp;
