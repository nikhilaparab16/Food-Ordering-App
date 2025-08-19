import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';

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
                                <div className="nav-item">
                                    <div>
                                        <span>Search</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <div>
                                        <span>Offers</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <div>
                                        <span>Help</span>
                                    </div>
                                </div>
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