import React from "react";
import { Container } from "./styled/HomePage.module";
import { Button } from "../styled/Button.module";

function HomePage({ startGame }) {
    return (
        <Container>
            <div className="dice_img">
                <img src="/images/dices.png" alt="dices" />
            </div>
            <div className="interact">
                <h1>DICE GAME</h1>
                <Button onClick={startGame}>Play Now</Button>
            </div>
        </Container>
    );
}

export default HomePage;
