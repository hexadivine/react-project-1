import React from "react";
import style from "./Form.module.css";
import Button from "./Button/Button";
import { BiSolidMessageAltDetail } from "react-icons/bi";

function Form() {
    function onViaSupportChat() {
        console.log("Support chat btn clicked");
    }

    function onViaCall() {
        console.log("call btn clicked");
    }

    function onViaEmail() {
        console.log("Via email clicked");
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.contact_btns}>
                    <div className={style.top_btn}>
                        <Button
                            text={"VIA SUPPORT CHAT"}
                            icon={<BiSolidMessageAltDetail fontSize="24px" />}
                            isPrimary={true}
                            onClick={onViaSupportChat}
                        />
                        <Button
                            text={"VIA CALL"}
                            icon={<BiSolidMessageAltDetail fontSize="24px" />}
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

                <form action="">
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
    );
}

export default Form;
