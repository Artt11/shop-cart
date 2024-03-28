import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import "./cartItem.css";

export const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart">
      <div className="cartItems">
        {PRODUCTS.map(
          (product) =>
            cartItems[product.id] > 0 && (
              <div className="cartItem">
                <img src={product.productImage} alt="productImage" />
                <div className="name">
                  <p>{product.productName}</p>
                </div>
                <span>${product.price}</span>
                <div>
                  <button onClick={() => removeFromCart(product.id)}>-</button>
                  <input
                    type="number"
                    value={cartItems[product.id]}
                    className="input"
                  />
                  <button onClick={() => addToCart(product.id)}>+</button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
