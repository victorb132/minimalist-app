import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
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
  route: RouteProp<{ params: { 
    category: string;
    date: string;
    id: string;
    timer: number;
    times: number;
    timesDone: number;
    title: string;
    type: string;
   } }, 'params'>;
}
interface HabitProps {
  id: string;
  timesDone: number;
}
interface RemainingProps {
  remainingTime: number;
}

export function Timer({ route }: TimerProps){
  const storageKeyHabits = '@minimalistapp:habits_user'
  
  const navigation = useNavigation();

  const habit = route.params

  async function handleUpdateTimes(){
    try {

      const dataKey = `${storageKeyHabits}:userId`;

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const updateTimesDone = currentData.map((data: HabitProps) => data.id === habit.id ? {...data, timesDone: data.timesDone + 1} : data)

      await AsyncStorage.setItem(dataKey, JSON.stringify(updateTimesDone))

      navigation.navigate('Home')

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível concluir');
    }
  }

  const children = ({ remainingTime }: RemainingProps) => {
    const minutesChildren = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const secondsWithZero = String(seconds).padStart(2, '0')

    if(remainingTime === 0) {
      Alert.alert('Parabéns', 'Você finalizou seu hábito', [
        {
          text: "Concluir o hábito",
          onPress: () => handleUpdateTimes()
        }
      ])
    }

    return(
    <TimerText>
      {remainingTime === 0 ? '0' : `${minutesChildren}:${secondsWithZero}`}
    </TimerText>)
  }

  function handleBackButton() {
    Alert.alert('Atenção', 'Caso você volte o seu hábito contara como feito', [
      {
        text: 'Concluir o hábito',
        onPress: () => handleUpdateTimes()
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
          <Title>{habit.title}</Title>
        </ViewTitle>
        <CountdownCircleTimer
          isPlaying
          duration={Number(habit.timer)}
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