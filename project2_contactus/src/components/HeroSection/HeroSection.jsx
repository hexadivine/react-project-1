import React from "react";
import FormText from "./FormText/FormText";
import Form from "./Form/Form";
import style from "./HeroSection.module.css";

function HeroSection() {
    return (
        <div className={`container ${style.hero_section}`}>
            <FormText />
            <Form />
        </div>
    );
}

export default HeroSection;
