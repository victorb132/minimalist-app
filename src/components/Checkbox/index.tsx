import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container
} from './styles'

import { TouchableOpacityProps } from 'react-native'

interface CheckBoxProps extends TouchableOpacityProps {
  selected: boolean;
  size?: number;
  color?: string;
  onPress(): void
}

export function CheckBox({ selected, onPress, size = 20, color = '#000' }: CheckBoxProps) {
  return (
    <Container onPress={onPress}>
      <Feather
        size={size}
        color={color}
        name={selected ? 'check-square' : 'square'}
      />
    </Container>
  )
}