import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Button } from '../../components/Forms/Button';

import {
  Container,
  TimerText,
  Title,
  ViewTitle,
  ViewButton,
  AlignVerticalView
} from './styles';

interface TimerProps {
  minutes?: number;
}
interface RemaningProps {
  remainingTime: number;
}

export function Timer({ minutes = 100 }: TimerProps){

  const navigation = useNavigation();

  const children = ({ remainingTime }: RemaningProps) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const secondsWithZero = String(seconds).padStart(2, '0')

    console.log('remainingTime', remainingTime)

    if(remainingTime === 0) {
      Alert.alert('Parabéns', 'Você finalizou seu hábito', [
        {
          text: "Concluir o hábito",
          onPress: () => navigation.navigate('Home')
        }
      ])
    }

    return(
    <TimerText>
      {remainingTime === 0 ? '0' : `${minutes}:${secondsWithZero}`}
    </TimerText>)
  }

  function handleBackButton() {
    Alert.alert('Atenção', 'Caso você volte o seu hábito contara como feito', [
      {
        text: 'Concluir o hábito',
        onPress: () => navigation.navigate('Home')
      },
      {
        text: 'Cancelar',
        onPress: () => {}
      }
    ])
  }

  return (
    <Container>
      <AlignVerticalView>
        <ViewTitle>
          <Title>Habito!</Title>
        </ViewTitle>
        <CountdownCircleTimer
          isPlaying
          duration={minutes}
          colors={['#000', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {children}
        </CountdownCircleTimer>

        <ViewButton>
          <Button title="Voltar" onPress={() => handleBackButton()} />
        </ViewButton>
      </AlignVerticalView>
    </Container>
  );
}