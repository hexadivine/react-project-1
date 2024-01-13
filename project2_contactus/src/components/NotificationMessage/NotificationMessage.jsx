import React from "react";
import style from "./NotificationMessage.module.css";

function NotificationMessage(props) {
    return (
        <div className={style.notification_container}>
            <pre>{props.text}</pre>
        </div>
    );
}

export default NotificationMessage;
