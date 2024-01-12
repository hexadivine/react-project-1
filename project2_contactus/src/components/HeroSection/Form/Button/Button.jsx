import React from "react";
import style from "./Button.module.css";

function Button(props) {
    return (
        <>
            <button
                className={
                    props.isPrimary ? style.primary_btn : style.secondary_btn
                }
                onClick={props.onClick}
            >
                {props.icon} {props.text}
            </button>
        </>
    );
}

export default Button;
