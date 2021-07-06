import React, { useEffect, useState } from 'react';

import { CircularProgress } from '../../components/CircularProgress';

import {
  Container
} from './styles';

export function Timer(){
  const [timer, setTimer] = useState(100);

  setInterval(() => setTimer(timer - 1), 10);

  return (
    <Container>
      <CircularProgress progress={timer}/>
    </Container>
  );
}