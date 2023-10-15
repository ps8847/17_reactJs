import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productlist } from "../redux/productAction";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);
  const product = {
    name: "I Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
      <br />
      <button onClick={() => dispatch(removeFromCart(product.name))}>
        Remove from cart
      </button>
      <br />
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <br />
      <button onClick={() => dispatch(productlist())}>Get Product list</button>
    </div>
  );
}

export default Main;
