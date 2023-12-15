import style from "./productCard.module.css";

const ProductCard = ({ itemdata }) => {
  const registerEvent = () => {
    window.dataLayer.push({
      event: "testEvent",
      productTitle: itemdata.image,
    });
  };
  return (
    <div className={style.pdpViweSection}>
      <img
        src={itemdata.image}
        className={style.productImage}
        alt="productImage"
      />
      <div className={style.productDiscDiv}>
        <h5>{itemdata.title}</h5>
        <p className={style.para}>{itemdata?.rating?.rate}⭐️</p>
        <p className={style.price}>₹ {(itemdata?.price * 82.14).toFixed(2)}</p>
      </div>
      <div className={style.atcButtonDiv}>
        <button className={style.atcButton} onClick={registerEvent}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
