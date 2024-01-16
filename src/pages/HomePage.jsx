import React from "react";
import { Interact } from "./styled/HomePage.module";
import { Button } from "../styled/Button.module";
import { Container } from "../styled/Container.module";

function HomePage({ startGame }) {
    return (
        <Container>
            <div className="dice_img">
                <img src="/images/dices.png" alt="dices" />
            </div>
            <Interact>
                <h1>DICE GAME</h1>
                <Button $type="primary" $animation="true" onClick={startGame}>
                    Play Now
                </Button>
            </Interact>
        </Container>
    );
}

export default HomePage;
