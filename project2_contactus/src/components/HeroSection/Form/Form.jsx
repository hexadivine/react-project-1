import React, { useState } from "react";
import style from "./Form.module.css";
import Button from "./Button/Button";
import NotificationMessage from "../../NotificationMessage/NotificationMessage";

import { BiSolidMessageAltDetail } from "react-icons/bi";

function Form() {
    const [showMsg, setShowMsg] = useState(false);
    const [msg, setMsg] = useState();

    function showNotification(text) {
        setMsg(text);
        setShowMsg(true);
        setTimeout(() => {
            setShowMsg(false);
        }, 3000);
    }

    function onViaSupportChat() {
        showNotification("Support via chat inititated");
    }

    function onViaCall() {
        showNotification("Support via call inititated");
    }

    function onViaEmail() {
        showNotification("Support via email initiated");
    }

    function onSubmit(event) {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const text = event.target[2].value;
        console.log(name, email, text);

        showNotification(
            `Thanks ${name}, for reaching out to us. \n We have noted your message - \n\n ${text} \n\nWe will reach out to given email - ${email}`
        );
    }

    return (
        <>
            {showMsg ? <NotificationMessage text={msg} /> : null}
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.contact_btns}>
                        <div className={style.top_btn}>
                            <Button
                                text={"VIA SUPPORT CHAT"}
                                icon={
                                    <BiSolidMessageAltDetail fontSize="24px" />
                                }
                                isPrimary={true}
                                onClick={onViaSupportChat}
                            />
                            <Button
                                text={"VIA CALL"}
                                icon={
                                    <BiSolidMessageAltDetail fontSize="24px" />
                                }
                                isPrimary={true}
                                onClick={onViaCall}
                            />
                        </div>

                        <Button
                            text={"VIA EMAIL FORM"}
                            icon={<BiSolidMessageAltDetail fontSize="24px" />}
                            onClick={onViaEmail}
                        />
                    </div>

                    <form action="" onSubmit={onSubmit}>
                        <div className={style.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" autoComplete="on" />
                        </div>
                        <div className={style.form_control}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" autoComplete="on" />
                        </div>
                        <div className={style.form_control}>
                            <label htmlFor="text">Text</label>
                            <textarea type="text" id="text" rows={8} />
                        </div>
                        <div
                            style={{
                                float: "right",
                                marginTop: "17px",
                            }}
                        >
                            <Button text={"SUBMIT"} isPrimary={true} />
                        </div>
                    </form>
                </div>
                <div className="img">
                    <img src="/images/service_24_7.svg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Form;
