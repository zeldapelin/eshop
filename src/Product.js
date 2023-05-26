import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

const Product = ({ id, title, imageUrl, price, rating}) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                imageUrl,
                price,
                rating
            }
        })
    }
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">{Array(rating).fill((<p> ⭐️</p>))}️</div>
                </div>
                <img src={imageUrl}
                     alt={""}
                />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    );
}

export default Product;