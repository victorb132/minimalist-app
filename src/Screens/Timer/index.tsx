import React from 'react';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import {
  Container,
  TimerText
} from './styles';

interface TimerProps {
  minutes?: number;
}
interface RemaningProps {
  remainingTime: number;
}

export function Timer({ minutes = 60 }: TimerProps){

  const children = ({ remainingTime }: RemaningProps) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const secondsWithZero = String(seconds).padStart(2, '0')

    return(
    <TimerText>
      {remainingTime === 0 ? '0' : `${minutes}:${secondsWithZero}`}
    </TimerText>)
  }

  return (
    <Container>
      <CountdownCircleTimer
        isPlaying
        duration={minutes}
        colors={['#000', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {children}
      </CountdownCircleTimer>
    </Container>
  );
}