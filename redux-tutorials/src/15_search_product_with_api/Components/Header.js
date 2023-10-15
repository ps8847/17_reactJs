import CartImage from "../images/addtocart.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
  //  const result = useSelector((state) => state);
  //  console.log("redux data in header", result);

  const result = useSelector((state) => state.cartData);

  const dispatch = useDispatch();
  console.log("redux data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 style={{ float: "left", margin: "0px", padding: "20px" }}>
          E-Comm
        </h1>
      </Link>

      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search product"
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img src={CartImage} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
