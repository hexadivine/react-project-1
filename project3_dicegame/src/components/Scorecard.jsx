import { ScoreCard } from "./styled/Scorecard.module";

function Scorecard() {
    return (
        <ScoreCard>
            <div className="score">0</div>
            <div className="your_score">Total Score</div>
        </ScoreCard>
    );
}

export default Scorecard;
