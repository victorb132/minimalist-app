import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

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
  ContentTask,
  ButtonRemove
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

export function Home() {
  const [habits, setHabits] = useState<HabitProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const navigation = useNavigation();

  const storageKeyHabits = '@minimalistapp:habits_user'
  const storageKeyTasks = '@minimalistapp:task_user'


  function handleChangeCheckbox(idTask: string) {
    setTasks(tasks.map(task => task.id === idTask ? { ...task, checked: !task.checked } : task))
  }

  async function loadHabits() {

    const dataKey = `${storageKeyHabits}:userId`;

    const response = await AsyncStorage.getItem(dataKey);


    const habits = response ? JSON.parse(response) : []

    setHabits(habits);
  }

  async function loadTasks() {

    const dataKey = `${storageKeyTasks}:userId`;

    const response = await AsyncStorage.getItem(dataKey);


    const tasks = response ? JSON.parse(response) : []

    setTasks(tasks);
  }

  async function handleTimer(habit: any) {
    navigation.navigate('Timer', habit)
  }

  async function handleRemoveHabits(habitId: string) {

    Alert.alert('Remover', `Deseja remover este hábito?`, [
      {
        text: 'Não 🙏🏼',
        style: 'cancel'
      },
      {
        text: 'Sim 😄',
        onPress: async () => {
          try {
            const dataKey = `${storageKeyHabits}:userId`;

            const response = await AsyncStorage.getItem(dataKey);
            const habits = response ? JSON.parse(response) : []

            const removeIndex = habits.findIndex((item: HabitProps) => item.id === habitId)

            habits.splice(removeIndex, 1);

            await AsyncStorage.setItem(
              dataKey,
              JSON.stringify(habits)
              );

            setHabits((oldData) =>
              oldData.filter((item) => item.id !== habitId)
            );
          } catch (error) {
            Alert.alert('Não foi possível remover! 🥲');
          }
        }
      }
    ])
  }

  async function handleRemoveTasks(taskId: string) {

    Alert.alert('Remover', `Deseja remover esta Task?`, [
      {
        text: 'Não 🙏🏼',
        style: 'cancel'
      },
      {
        text: 'Sim 😄',
        onPress: async () => {
          try {
            const dataKey = `${storageKeyTasks}:userId`;

            const response = await AsyncStorage.getItem(dataKey);
            const tasks = response ? JSON.parse(response) : []

            const removeIndex = tasks.findIndex((item: TaskProps) => item.id === taskId)

            tasks.splice(removeIndex, 1);

            await AsyncStorage.setItem(
              dataKey,
              JSON.stringify(tasks)
              );

            setTasks((oldData) =>
              oldData.filter((item) => item.id !== taskId)
            );
          } catch (error) {
            Alert.alert('Não foi possível remover! 🥲');
          }
        }
      }
    ])
  }

  useEffect(() => {
    loadHabits();
    loadTasks();
  }, [])

  useFocusEffect(useCallback(() => {
    loadHabits();
    loadTasks();
  }, []));

  const renderHabitsItem = ({ item }: { item: HabitProps }) => {
    return (
      <CardHabit
        key={item.id}
        title={item.title}
        times={String(item.times)}
        timesDone={item.timesDone}
        name={item.category}
        onPress={() => handleTimer(item)}
        handleRemove={() => handleRemoveHabits(item.id)}
      />
    )
  };

  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={avatar} />
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
          <WrapperCards
            data={habits}
            renderItem={renderHabitsItem}
            keyExtractor={item => item.id}
            nestedScrollEnabled
          >
          </WrapperCards>

        </Habits>}


      {tasks?.length > 0 &&
        <MiniTask>
          <MiniTaskTitle>MINI TAREFAS</MiniTaskTitle>
          {tasks.map((task) =>
            <ContentTask key={task.id} onPress={() => handleChangeCheckbox(task.id)}>
              <CheckBox 
                onPress={() => handleChangeCheckbox(task.id)}
                selected={task.checked}
                style={{ marginRight: 5 }}
              />
              <TitleMiniTask checked={task.checked}>
                {task.title}
              </TitleMiniTask>
              <ButtonRemove
              onPress={() => handleRemoveTasks(task.id)}
            >
              <Feather name="trash" size={20} color={'#000'} />
            </ButtonRemove>
            </ContentTask>
          )}
        </MiniTask>
      }
    </Container>
  );
}