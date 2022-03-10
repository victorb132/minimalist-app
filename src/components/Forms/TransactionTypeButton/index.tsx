import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Text } from 'react-native';

import {
  Container,
  Title,
  Button
} from './styles';

const icons = {
  run: '🏃🏾‍♂️',
  book: '📚',
  other: '⏳'
}

interface Props extends TouchableOpacityProps {
  type: 'run' | 'book' | 'other';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
      <Text>{icons[type]}</Text>
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  )
}