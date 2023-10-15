import CartImage from "../images/addtocart.jpg";
import { useSelector } from "react-redux";
const Header = () => {
  //  const result = useSelector((state) => state);
  //  console.log("redux data in header", result);

  const result = useSelector((state) => state.cartData);
  console.log("redux data in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src={CartImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
