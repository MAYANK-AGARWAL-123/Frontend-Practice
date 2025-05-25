import { useState, useEffect, useCallback } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  }, [isRunning]);

  const stopTimer = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
      setIntervalId(null);
    }
  }, [isRunning, intervalId]);

  const resetTimer = useCallback(() => {
    stopTimer();
    setTimer(0);
  }, [stopTimer]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;