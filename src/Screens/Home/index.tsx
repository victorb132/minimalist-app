import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CheckBox } from '../../components/Checkbox';
import { CardHabit } from '../../components/CardHabit'

import avatar from '../../../assets/avatar.png';

import {
  Container,
  Header,
  ProfileAvatar,
  AvatarImage,
  ContentText,
  Title,
  SubTitle,
  Habits,
  HabitsTitle,
  MiniTask,
  TitleMiniTask,
  MiniTaskTitle,
  WrapperCards,
  ContentTask
} from './styles';

interface HabitProps {
  category: string;
  timer: string;
  times: number;
  title: string;
  type: string;
}

export function Home(){
  const [miniTask, setMiniTask] = useState(false);
  const [habits, setHabits] = useState<HabitProps[]>([]);

  const storageKeyHabits = '@minimalistapp:habits_user'

  function handleChangeMiniTask() {
    setMiniTask(!miniTask)
  }

  async function loadHabits() {

    const dataKey = `${storageKeyHabits}:userId`;

    const response = await AsyncStorage.getItem(dataKey);


    const habits = response ? JSON.parse(response) : []

    setHabits(habits);

    
    // const lastTransactionEntries = getLastTransactionDate(transactions, 'positive')
    // const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative')
    // const totalInterval = lastTransactionExpensives === 0 ? 'Não há transações' : `01 à ${lastTransactionExpensives}`
    

    // const total = entriesTotal - expensiveTotal

    // setHighlightData({
    //   entries: {
    //     amount: entriesTotal.toLocaleString('pt-BR', {
    //       style: 'currency',
    //       currency: 'BRL'
    //     }),
    //     lastTransaction: lastTransactionEntries === 0 ? 'Não há transações' : `Última entrada dia ${lastTransactionEntries}`
    //   },

    //   expensives: {
    //     amount: expensiveTotal.toLocaleString('pt-BR', {
    //       style: 'currency',
    //       currency: 'BRL'
    //     }),
    //     lastTransaction: lastTransactionExpensives === 0 ? 'Não há transações' : `Última saída dia ${lastTransactionExpensives}`,
    //   },

    //   total: {
    //     amount: total.toLocaleString('pt-BR', {
    //       style: 'currency',
    //       currency: 'BRL'
    //     }),
    //     lastTransaction: totalInterval
    //   }
    // });

    // setIsLoading(false);
  }

  useEffect(() => {
    loadHabits();
  }, [])

  useFocusEffect(useCallback(() => {
    loadHabits();
  }, []));
  
  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={avatar}/>
        </ProfileAvatar>
      </Header>

      <ContentText>
        <Title>Bom dia, Victor</Title>
        <SubTitle>Vamos enfrentar o dia.</SubTitle>
      </ContentText>

      {habits?.length > 0 && 
      <Habits>
        <HabitsTitle>HÁBITOS</HabitsTitle>
        <WrapperCards>
          {habits.map((habit) => {
            return <CardHabit key={habit.title} title={habit.title} times={String(habit.times)} name={habit.category} />
          })}
        </WrapperCards>

      </Habits>}

      
      <MiniTask>
        <MiniTaskTitle>MINI TAREFAS</MiniTaskTitle>
          <ContentTask onPress={handleChangeMiniTask}>
            <CheckBox  onPress={handleChangeMiniTask} selected={miniTask} style={{ marginRight: 5 }} />
            <TitleMiniTask>
              Grocery shopping
            </TitleMiniTask>
          </ContentTask>

          <ContentTask onPress={handleChangeMiniTask}>
            <CheckBox onPress={handleChangeMiniTask} selected={miniTask} style={{ marginRight: 5 }} />
            <TitleMiniTask>
              One concept design
            </TitleMiniTask>
          </ContentTask>
      </MiniTask>
    </Container>
  );
}