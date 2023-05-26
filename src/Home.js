import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

const Home = () => {
    return(
        <div>
            <Header />
            <div className="home">
                <div className="home__container">

                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                         alt=""
                         className="home__image" />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="Epsom Birkin"
                            price={35950}
                            rating={5}
                            imageUrl="https://prod-images.fashionphile.com/large/a69d57469d2bfc94e532e3c93a41e43b/2001456b244da3eff86a785f674eb5ef.jpg"
                        />
                        <Product
                            id="2"
                            title="Hermes Kelly Doll"
                            price={93970.00}
                            rating={4}
                            imageUrl="https://cdn-images.farfetch-contents.com/18/97/12/06/18971206_41452299_1000.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="3"
                            title="Hermes Ginza Tanaka"
                            price={1400000.00}
                            rating={5}
                            imageUrl="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4F08soFVNzH6Pztntyftd9M0q2Of1YqTJFuhTlTcAkljIH93E5cNvmKNCLGzOlK0hxx3vq5rD7l2ta-pyemIDaiE2uQl1&usqp=CAY"
                        />
                        <Product
                            id="4"
                            title="Dolce Gabbana"
                            price={1695.00}
                            rating={5}
                            imageUrl="https://media.bergdorfgoodman.com/f_auto,q_auto/01/bg_4225116_100602_m"
                        />
                        <Product
                            id="5"
                            title="Dolce Gabbana Shoes"
                            price={895.00}
                            rating={5}
                            imageUrl="https://cdna.lystit.com/520/650/n/photos/dolcegabbana/0b7d8a20/dolce-gabbana-Multicolor-Graffiti-print-Patent-Leather-Pumps.jpeg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="6"
                            title="Fendi Shoes"
                            price={1390.00}
                            rating={5}
                            imageUrl="https://media.bergdorfgoodman.com/f_auto,q_auto/01/bg_4293368_100550_m"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;