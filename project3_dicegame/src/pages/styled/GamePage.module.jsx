import styled from "styled-components";

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 1280px;
    margin: 64px 80px 0;
`;

export const GameContainer = styled.div`
    max-width: 1280px;
    height: calc(100vh - ${(props) => props.$heightoffset});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    Button {
        margin-bottom: 15px;
    }

    p {
        margin: 20px 0;
    }
`;
