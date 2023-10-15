import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Main;
