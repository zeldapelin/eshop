import React from "react";
import "./Checkout.css";
import {useStateValue} from "./StateProvider";

const CheckoutProduct = ({id, price, imageUrl, title, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
            })
    };
    return(
        <div className={"checkoutProduct"}>
           <img src={imageUrl}
                alt={""} className={"checkoutProduct__image"}/>
            <div className={"product__info"}>
                <p className={"checkoutProduct__title"}>
                    {title}
                </p>
                <p className={"checkoutProduct__price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={"checkoutProduct__rating"}>
                    <div className="product__rating">{Array(rating).fill((<p> ⭐️</p>))}️</div>
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;