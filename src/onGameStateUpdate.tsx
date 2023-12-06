import React, { useState } from 'react';

const OnGameState : React.FC = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'Dylan',
        },
    });

    const handleClick = () => {
        setGame({
            ...game,
            player: {
                name: 'Stephen Curry', 
            },
        });
    };

    return (
        <>
            <p>Player Name: {game.player.name}</p>
            <button onClick={handleClick}>Change Player Name</button>
        </>
    );
};

export default OnGameState;