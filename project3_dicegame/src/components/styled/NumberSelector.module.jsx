import styled from "styled-components";

export const NumberSelectorDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .error_msg {
        height: 36px;
        font-size: 24px;
        width: 100%;
        margin-bottom: 6.5px;
        text-align: right;
    }

    .numbers {
        display: flex;
        gap: 24px;
    }

    .select_num {
        margin-top: 10px;
        margin-left: auto;
        font-size: 24px;
        font-weight: 800;
    }
`;

export const Box = styled.button`
    all: unset;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    background: ${(props) => (props.selected ? "black" : "white")};
    color: ${(props) => (!props.selected ? "black" : "white")};
`;
