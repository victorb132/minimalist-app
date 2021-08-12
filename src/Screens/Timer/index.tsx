import React, { useEffect, useState } from 'react';

import { CircularProgress } from '../../components/CircularProgress';

import {
  Container
} from './styles';

interface TimerProps {
  minutes?: number;
}

export function Timer({ minutes = 60 }: TimerProps){
  const [timerCount, setTimer] = useState(minutes)

useEffect(() => {
  let interval = setInterval(() => {
    setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval)
        return lastTimerCount - 1
    })
  }, 1000) //each count lasts for a second
  //cleanup the interval on complete
  return () => clearInterval(interval)
}, []);

  return (
    <Container>
      <CircularProgress progress={timerCount}/>
    </Container>
  );
}