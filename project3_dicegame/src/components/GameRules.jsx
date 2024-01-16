import React from "react";
import { GameComponent } from "./styled/GameRules";

function GameRules() {
    return (
        <GameComponent>
            <h1>How to play dice game</h1>
            <br />
            <ol>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>
                    If selected number is equal to dice number you will get same
                    10 points
                </li>
                <li>If you get wrong guess then 2 points will be dedcuted </li>
            </ol>
        </GameComponent>
    );
}

export default GameRules;
