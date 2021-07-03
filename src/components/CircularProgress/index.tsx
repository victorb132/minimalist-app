import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import {
  EmptyCircle,
  Indicator,
  CoverIndicator
} from './styles';

interface CircularProgressProps {
  progress?: number;
}

export function CircularProgress({ progress = 100 }: CircularProgressProps){
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef((toValue: number) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  })

  return (
    <EmptyCircle>
      <Indicator style={{ transform: [{ rotate: firstIndicatorRotate }] }}/>
      <CoverIndicator />
      <Indicator style={{ 
        transform: [{ rotate: secondIndicatorRotate }], 
        opacity: secondIndicatorVisibility 
      }} />
    </EmptyCircle>
  );
}