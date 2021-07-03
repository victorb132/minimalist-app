import styled from 'styled-components/native';
import { Animated } from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';
const SIZE = 200;

export const CircleBase = styled(Animated.View)`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  border-width: 15px;
`;

export const EmptyCircle = styled(CircleBase)`
  border-color: ${EMPTY_COLOR};
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
`;

export const Indicator = styled(CircleBase)`
  position: absolute;
  border-left-color: ${PROGRESS_COLOR};
  border-top-color: ${PROGRESS_COLOR};
  border-right-color: transparent;
  border-bottom-color: transparent;
`;

export const CoverIndicator = styled(CircleBase)`
  position: absolute;
  border-left-color: ${EMPTY_COLOR};
  border-top-color: ${EMPTY_COLOR};
  border-right-color: transparent;
  border-bottom-color: transparent;
`;