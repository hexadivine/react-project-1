import Scorecard from "../components/Scorecard";
import NumberSelector from "../components/NumberSelector";
import { TopBar, GameContainer } from "./styled/GamePage.module";
import { dices } from "../config/dices.module";
import { Button } from "../styled/Button.module";
import { useState } from "react";
import GameRules from "../components/GameRules";

function GamePage(props) {
    const [randomDiceNum, setRandomDiceNum] = useState(1);
    const [selectedDiceNum, setSelectedDiceNum] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    const [totalScore, setTotalScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [showRules, setShowRules] = useState(false);

    const randomDice = (min, max) => {
        if (selectedDiceNum === undefined) {
            setErrorMsg("You have not selected any number");
            return;
        } else setErrorMsg("");

        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        setRandomDiceNum(randomNumber);

        if (selectedDiceNum === randomNumber)
            setTotalScore((prev) => prev + 10);
        else setTotalScore((prev) => prev - 2);

        if (totalScore > maxScore) setMaxScore(totalScore);
        setSelectedDiceNum(undefined);
    };

    return (
        <>
            <TopBar>
                <Scorecard totalScore={totalScore} maxScore={maxScore} />
                <NumberSelector
                    errorMsg={errorMsg}
                    setSelectedDiceNum={setSelectedDiceNum}
                    selectedDiceNum={selectedDiceNum}
                />
            </TopBar>
            <GameContainer $heightoffset={"184px"} $flexdirection={"column"}>
                <img
                    onClick={() => randomDice(1, 7)}
                    src={dices[randomDiceNum - 1]}
                    alt="dice"
                    height={"100px"}
                    width={"100px"}
                />
                <p>Click on Dice to roll</p>
                <Button
                    onClick={() => setTotalScore(0)}
                    $type="primary"
                    $animation="true"
                >
                    Reset Score
                </Button>
                <Button onClick={() => setShowRules(!showRules)}>
                    {showRules ? "Hide" : "Show"} Rules
                </Button>
                {showRules ? <GameRules /> : ""}
            </GameContainer>
        </>
    );
}

export default GamePage;
