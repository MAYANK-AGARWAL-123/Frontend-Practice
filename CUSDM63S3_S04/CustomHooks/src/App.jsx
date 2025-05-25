import React from 'react';
import useTimer from './useTimer';
import useToggleItems from './useToggleItems';

function App() {
  // Using the timer hook
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();
  
  // Using the toggle items hook
  const [currentItem, toggleItem] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div>
      <h1>Timer Demo</h1>
      <p>Timer: {timer} seconds</p>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      
      <h1>Item Toggler</h1>
      <p>Current Item: {currentItem}</p>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
}

export default App;