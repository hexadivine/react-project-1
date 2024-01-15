import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: calc(
        100vh - ${(props) => (props.heightOffset ? props.heightOffset : "0px")}
    );
    align-items: center;
    justify-content: center;
`;
