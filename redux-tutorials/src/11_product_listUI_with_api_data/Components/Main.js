import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productlist } from "../redux/productAction";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(() => {
    dispatch(productlist());
  }, []);
  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        <br />
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.image} alt="" />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
