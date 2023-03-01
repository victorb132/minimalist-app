import React, { useState, useEffect } from 'react';
import {
  Animated,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';

import {
  ButtonRemove,
  Container,
  EmojiContainer,
  Emoji,
  TaskContainer,
  TaskTitle,
  TaskSubTitle
} from './styles';

interface CardHabitProps extends TouchableOpacityProps {
  title: string;
  times: string;
  timesDone: number;
  name: string;
  handleRemove: () => void;
  onPress: () => void;
}

export function CardHabit({
  title,
  times,
  timesDone,
  name,
  handleRemove,
  onPress,
}: CardHabitProps) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const disableButtonIfFinishedDayTimes = () => Number(timesDone) >= Number(times);

    if (disableButtonIfFinishedDayTimes()) {
      setDisable(true);
      return;
    }

    setDisable(false);
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
      <Container disabled={disable} onPress={onPress}>
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