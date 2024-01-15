import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

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
