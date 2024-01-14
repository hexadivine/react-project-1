import React, { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import GamePage from "./Components/GamePage";

function App() {
    const [startGame, setStartGame] = useState(false);

    return (
        <div>
            {startGame ? (
                <GamePage />
            ) : (
                <HomePage startGame={() => setStartGame(true)} />
            )}
        </div>
    );
}

export default App;
