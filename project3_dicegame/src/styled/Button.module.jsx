import styled from "styled-components";

export const Button = styled.button`
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
