import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = ({ data }) => {

    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[data.id];

    return (
        <div className="product">
            <img src={data.productImage} alt="productImage" />
            <div className="description">
                <p>
                    <b>{data.productName}</b>
                </p>
                <p>${data.price}</p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(data.id)}>
                Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}</button>
        </div>
    )
}