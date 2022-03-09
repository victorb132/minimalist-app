import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

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
  id: string;
  category: string;
  timer: string;
  times: number;
  timesDone: number;
  title: string;
  type: string;
}

interface TaskProps {
  id: string;
  checked: boolean,
  title: string;
}

export function Home(){
  const [habits, setHabits] = useState<HabitProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const navigation = useNavigation();

  const storageKeyHabits = '@minimalistapp:habits_user'
  const storageKeyTasks = '@minimalistapp:task_user'


  function handleChangeCheckbox(idTask: string) {
    setTasks(tasks.map(task => task.id === idTask ? {...task, checked: !task.checked} : task))
  }

  async function loadHabits() {

    const dataKey = `${storageKeyHabits}:userId`;

    const response = await AsyncStorage.getItem(dataKey);


    const habits = response ? JSON.parse(response) : []

    setHabits(habits);

    // setIsLoading(false);
  }

  async function loadTasks() {

    const dataKey = `${storageKeyTasks}:userId`;

    const response = await AsyncStorage.getItem(dataKey);


    const tasks = response ? JSON.parse(response) : []

    setTasks(tasks);

    console.log('tasks', tasks)

    // setIsLoading(false);
  }

  async function handleTimer(habit: HabitProps) {
    navigation.navigate('Timer')
  }

  useEffect(() => {
    loadHabits();
    loadTasks();
  }, [])

  useFocusEffect(useCallback(() => {
    loadHabits();
    loadTasks();
  }, []));
  
  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={avatar}/>
        </ProfileAvatar>
      </Header>

      <ContentText>
        <Title>Bom dia</Title>
        <SubTitle>Vamos enfrentar o dia.</SubTitle>
      </ContentText>

      {habits?.length === 0 && tasks?.length === 0 && 
        <ContentText style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 200
        }}>
          <Title style={{
            fontSize: 18,
            textAlign: 'center',
          }}>Você não tem nenhum hábito ou tarefa</Title>
          <SubTitle style={{
            fontSize: 16,
            textAlign: 'center',
          }}>Crie um novo hábito ou tarefa para aparecer aqui.</SubTitle>
      </ContentText>
      }

      {habits?.length > 0 && 
      <Habits>
        <HabitsTitle>HÁBITOS</HabitsTitle>
        <WrapperCards>
          {habits.map((habit) => 
            <CardHabit key={habit.id} title={habit.title} times={String(habit.times)} timesDone={habit.timesDone} name={habit.category} onPress={() => handleTimer(habit)} />
          )}
        </WrapperCards>

      </Habits>}

      
      {tasks?.length > 0 &&
      <MiniTask>
        <MiniTaskTitle>MINI TAREFAS</MiniTaskTitle>
          {tasks.map((task) => 
            <ContentTask key={task.id} onPress={() => handleChangeCheckbox(task.id)}>
              <CheckBox  onPress={() => handleChangeCheckbox(task.id)} selected={task.checked} style={{ marginRight: 5 }} />
              <TitleMiniTask checked={task.checked}>
                {task.title}
              </TitleMiniTask>
            </ContentTask>
          )}
      </MiniTask>
      }
    </Container>
  );
}