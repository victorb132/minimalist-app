import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
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

interface Props extends RectButtonProps {
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