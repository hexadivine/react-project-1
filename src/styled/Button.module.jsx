import styled from "styled-components";

export const Button = styled.button`
    all: unset;
    padding: 10px 73px;
    border: 2px solid black;
    border-radius: 5px;

    float: right;

    transition: ${(props) =>
        props.$animate ? "0.4 background ease-out;" : ""};

    ${(props) =>
        props.$type === "primary"
            ? `background-color: black;
        color: white`
            : `background-color: transparent;
        color: black`};

    ${(props) =>
        props.$animation === "true" && props.$type === "primary"
            ? `
        &:hover {
            background: transparent;
            color: black;
            border: 2px solid black;
            transition: 0.3 background ease-in;
        }`
            : ""};
`;
