import React from "react";
import FormText from "./FormText/FormText";
import style from "./HeroSection.module.css";

function HeroSection() {
    return (
        <div className={`container ${style.hero_section}`}>
            <FormText />
        </div>
    );
}

export default HeroSection;
