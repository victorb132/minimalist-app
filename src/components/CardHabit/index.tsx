import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  EmojiContainer,
  Emoji,
  TaskContainer,
  TaskTitle,
  TaskSubTitle,
} from './styles';

interface CardHabitProps extends TouchableOpacityProps {
  title: string;
  times: string;
  name: string;
}

export function CardHabit({
  title,
  times,
  name,
  ...rest
}: CardHabitProps) {
  return (
    <Container {...rest}>
      <EmojiContainer>
        {name === 'run' && <Emoji>{'🏃🏾‍♂️'}</Emoji>}
        {name === 'book'&& <Emoji>{'📚'}</Emoji>}
        {name === 'other'&& <Emoji>{'⏳'}</Emoji>}
      </EmojiContainer>
      <TaskContainer>
        <TaskTitle>{title}</TaskTitle>
        <TaskSubTitle>{times} vezes hoje</TaskSubTitle>
      </TaskContainer>
    </Container>
  );
}