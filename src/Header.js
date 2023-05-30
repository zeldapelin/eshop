import React from "react";
import "./Header.css";
import {Search, ShoppingBasket, Storefront} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {getAuth} from "firebase/auth";
import { app } from "./Firebase";

const Header = () => {

    const [{basket}, dispatch] = useStateValue();

    const auth = getAuth(app);
    const user = auth.currentUser ? auth.currentUser.email : null;


    return(
        <div className={"header"}>
            <Link to={"/"} style={{textDecoration:"none"}}>
                <div className={"header__logo"}>
                    <Storefront className={"header__logoImage"} fontSize={"large"}/>
                    <h2 className={"header__logoTitle"}>eShop</h2>
                </div>
            </Link>
            <div className={"header__search"}>
                <input type={"text"} className={"header__searchInput"} ></input>
                <Search className={"header__searchIcon"}/>
            </div>
            <div className={"header__nav"}>
                <Link to="/login">
                    <div className={"nav__item"}>
                        {user && <span className={"nav__itemLineOne"}>{user}</span>}
                        {!user && <span className={"nav__itemLineOne"}>Hello Guest</span>}
                    </div>
                    <div>
                        <span className={"nav__itemLineTwo"}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className={"nav__item"}>
                    <span className={"nav__itemLineOne"}>Your</span>
                    <span className={"nav__itemLineTwo"}>Shop</span>
                </div>
                <Link to={"/checkout"} style={{textDecoration:"none"}}>
                    <div className={"nav__itemBasket"}>
                        <ShoppingBasket className={"nav__itemBasket"}/>
                        <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header;