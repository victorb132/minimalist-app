import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  TouchableOpacityProps,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  EmojiContainer,
  Emoji,
  TaskContainer,
  TaskTitle,
  TaskSubTitle,
  ButtonRemove
} from './styles';

interface CardHabitProps extends TouchableOpacityProps {
  title: string;
  times: string;
  timesDone: number;
  name: string;
  handleRemove: () => void;
}

export function CardHabit({
  title,
  times,
  timesDone,
  name,
  handleRemove,
  ...rest
}: CardHabitProps) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (Number(timesDone) >= Number(times)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [timesDone])

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={'#FFF'} />
            </ButtonRemove>
          </View>
        </Animated.View>

      )}
    >
      <Container disabled={disable} {...rest}>
        <EmojiContainer>
          {name === 'run' && <Emoji disabled={disable}>{'🏃🏾‍♂️'}</Emoji>}
          {name === 'book' && <Emoji disabled={disable}>{'📚'}</Emoji>}
          {name === 'other' && <Emoji disabled={disable}>{'⏳'}</Emoji>}
        </EmojiContainer>
        <TaskContainer>
          <TaskTitle disabled={disable}>{title}</TaskTitle>
          <TaskSubTitle disabled={disable}>{timesDone} / {times} {Number(times) > 1 ? 'vezes' : 'vez'} hoje</TaskSubTitle>
        </TaskContainer>
      </Container>
    </Swipeable>
  );
}