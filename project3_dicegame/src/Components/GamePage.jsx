import { useState } from "react";
import styled from "styled-components";

function GamePage(props) {
    const [selectedNum, setSelectedNum] = useState();
    const nums = [1, 2, 3, 4, 5, 6];

    return (
        <TopBar>
            <ScoreCard>
                <div className="score">0</div>
                <div className="your_score">Total Score</div>
            </ScoreCard>
            <NumberSelector>
                <div className="numbers">
                    {nums.map((num, index) => (
                        <Button
                            key={index}
                            onClick={() => setSelectedNum(num)}
                            selected={num === selectedNum}
                        >
                            {num}
                        </Button>
                    ))}
                </div>

                <div className="select_num">Select Number</div>
            </NumberSelector>
        </TopBar>
    );
}

export default GamePage;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 1280px;
    margin: 64px 80px 0;
`;

const ScoreCard = styled.div`
    text-align: center;
    .score {
        font-size: 100px;
        font-weight: 500;
        height: 120px;
    }

    .your_score {
        font-size: 24px;
        font-weight: 500;
    }
`;

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .numbers {
        display: flex;
        gap: 24px;
    }

    .select_num {
        margin-top: 30px;
        margin-left: auto;
        font-size: 24px;
        font-weight: 800;
    }
`;

const Button = styled.button`
    all: unset;
    width: 72px;
    height: 72px;
    border: 1px solid black;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    background: ${(props) => (props.selected ? "black" : "white")};
    color: ${(props) => (!props.selected ? "black" : "white")};
`;
