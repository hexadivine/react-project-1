import React, { useState } from "react";
import { NumberSelectorDiv, Box } from "./styled/NumberSelector.module";
import { nums } from "../config/dices.module";

function NumberSelector(props) {
    return (
        <NumberSelectorDiv>
            <div className="error_msg">{props.errorMsg}</div>
            <div className="numbers">
                {nums.map((num, index) => (
                    <Box
                        key={index}
                        onClick={() => props.setSelectedDiceNum(num)}
                        selected={num === props.selectedDiceNum}
                    >
                        {num}
                    </Box>
                ))}
            </div>

            <div className="select_num">Select Number</div>
        </NumberSelectorDiv>
    );
}

export default NumberSelector;
