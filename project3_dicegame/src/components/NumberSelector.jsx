import React, { useState } from "react";
import { NumberSelectorDiv, Box } from "./styled/NumberSelector.module";

function NumberSelector() {
    const [selectedNum, setSelectedNum] = useState();
    const nums = [1, 2, 3, 4, 5, 6];

    return (
        <NumberSelectorDiv>
            <div className="numbers">
                {nums.map((num, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedNum(num)}
                        selected={num === selectedNum}
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
