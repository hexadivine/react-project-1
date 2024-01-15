import Scorecard from "../components/Scorecard";
import NumberSelector from "../components/NumberSelector";
import { TopBar } from "./styled/GamePage.module";
// import { Button } from "../styled/Button.module";

function GamePage(props) {
    return (
        <>
            <TopBar>
                <Scorecard />
                <NumberSelector />
            </TopBar>
        </>
    );
}

export default GamePage;
