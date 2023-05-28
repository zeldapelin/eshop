import React from "react";
import "./Checkout.css";
import "./CheckoutProduct.css";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue()
    return(
        <div>
            <Header/>
            <div className={"checkout"}>
                <div className={"checkout__left"}>
                    <h2 className={"checkout__title"}>
                        YOUR SHOPPING BASKET
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                <div className={"checkout__right"}>
                    <Subtotal />
                </div>
            </div>

        </div>
    );
}

export default Checkout;