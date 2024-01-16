import { ScoreCard } from "./styled/Scorecard.module";

function Scorecard({ totalScore, maxScore }) {
    return (
        <ScoreCard>
            <div className="your_score">Total Score</div>
            <div className="score">{totalScore}</div>
            <div> (High Score : {maxScore})</div>
        </ScoreCard>
    );
}

export default Scorecard;
