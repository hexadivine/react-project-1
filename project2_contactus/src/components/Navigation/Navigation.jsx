import React from "react";
import style from "./Navigation.module.css";

function Navigation() {
    return (
        <nav>
            <div className={`container ${style.navigation}`}>
                <div>
                    <img src="/images/brand_logo.png" alt="brandlogo" />
                </div>
                <ul>
                    <li>HOME</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
