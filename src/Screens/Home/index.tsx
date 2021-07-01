import React, { useState } from 'react';

import { CheckBox } from '../../components/Checkbox';
import { CardHabit } from '../../components/CardHabit'

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

export function Home(){
  const [miniTask, setMiniTask] = useState(false);

  function handleChangeMiniTask() {
    setMiniTask(!miniTask)
  }

  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={{ uri: 'https://avatars.githubusercontent.com/u/32309553?v=4' }}/>
        </ProfileAvatar>
      </Header>

      <ContentText>
        <Title>Bom dia, Victor</Title>
        <SubTitle>Vamos enfrentar o dia.</SubTitle>
      </ContentText>

      <Habits>
        <HabitsTitle>HÁBITOS</HabitsTitle>
        <WrapperCards>
          <CardHabit title="Correr de manhã" times='0 / 2' name="run" />
          <CardHabit title="Correr de tarde" times='0 / 4' name="run"/>
        </WrapperCards>

      </Habits>

      
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