import React from 'react';
import Play from './Play';

// guess: passes game turn (its state) as a prop to board
// guess: has a helper that it passes to board to change game turn
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

export default Game;
