import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .interact {
        h1 {
            font-size: 96px;
            font-weight: 800;
        }
    }
`;

const H1 = styled.h1``;

const Button = styled.button`
    all: unset;
    padding: 10px 73px;
    border-radius: 5px;
    background-color: black;
    color: white;
    float: right;
    border: 2px solid transparent;

    transition: 0.4 background ease-out;

    &:hover {
        background: transparent;
        color: black;
        border: 2px solid black;

        transition: 0.3 background ease-in;
    }
`;
