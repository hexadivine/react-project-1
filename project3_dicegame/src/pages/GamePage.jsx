import Scorecard from "../components/Scorecard";
import NumberSelector from "../components/NumberSelector";
import { TopBar } from "./styled/GamePage.module";
import { Container } from "../styled/Container.module";
// import { Button } from "../styled/Button.module";

function GamePage(props) {
    return (
        <>
            <TopBar>
                <Scorecard />
                <NumberSelector />
            </TopBar>
            <Container heightOffset={"220px"}>
                <img src="" alt="" onClick={}/>
            </Container>
        </>
    );
}

export default GamePage;
