import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
  Button
} from './styles';

interface Props extends TouchableOpacityProps {
  type: 'run' | 'book' | 'other';
  title: string;
  isActive: boolean;
  onPress(): void
}

export function TransactionTypeButton({ type, title, isActive, onPress }: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <Button onPress={(onPress)}>
        <Title isActive={isActive}>
          {title}
        </Title>
      </Button>
    </Container>
  )
}