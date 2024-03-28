import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  console.log(totalAmount);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })};
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
