import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from "react-router";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return(
        <header className="navbar">
            <div className="global-nav">
                <div className="nav">
                    <div className="left">
                        <div className="logo">
                            <img src={LOGO_URL} />
                        </div>
                        <div className="location-div">
                            <span className="other">Other</span>
                            <span className="location">Delhi, India</span>
                            <span className="arrow-down"><i className="fa-solid fa-angle-down"></i></span>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="items">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <div>
                                        <span>Cart</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <button className="btn" onClick={() => {
                                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                                    }}>{btnName}</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;