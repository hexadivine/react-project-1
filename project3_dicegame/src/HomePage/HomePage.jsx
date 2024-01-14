import React from "react";
import styled from "styled-components";

function HomePage() {
    return (
        <div className="container">
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    );
}

export default HomePage;

const H1 = styled.h1``;

const Button = styled.button`
    all: unset;
    padding: 10px 73px;
    border-radius: 5px;
    background-color: black;
    color: white;
`;
