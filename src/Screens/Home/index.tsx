import React from 'react';

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
  Card,
  EmojiContainer,
  Emoji,
  TaskContainer,
  TaskTitle,
  TaskSubTitle,
  MiniTask,
  CheckMiniTask,
  TitleMiniTask,
  MiniTaskTitle,
  WrapperCards,
  ContentTask
} from './styles';

export function Home(){
  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={{ uri: 'https://avatars.githubusercontent.com/u/32309553?v=4' }}/>
        </ProfileAvatar>
      </Header>

      <ContentText>
        <Title>Good Morning, Victor</Title>
        <SubTitle>Let's crush this day.</SubTitle>
      </ContentText>

      <Habits>
        <HabitsTitle>HABITS</HabitsTitle>
        {/* TODO - Transformar em componente */}
        <WrapperCards>
          <Card>
            <EmojiContainer>
              <Emoji>🏃🏾‍♂️</Emoji>
            </EmojiContainer>
            <TaskContainer>
              <TaskTitle>Read something</TaskTitle>
              <TaskSubTitle>0 / 2 times today</TaskSubTitle>
            </TaskContainer>
          </Card>

          <Card>
            <EmojiContainer>
              <Emoji>🏃🏾‍♂️</Emoji>
            </EmojiContainer>
            <TaskContainer>
              <TaskTitle>Read something</TaskTitle>
              <TaskSubTitle>0 / 2 times today</TaskSubTitle>
            </TaskContainer>
          </Card>
        </WrapperCards>

      </Habits>

      
      <MiniTask>
        <MiniTaskTitle>MINI TASKS</MiniTaskTitle>
          <ContentTask>
            <CheckMiniTask />
            <TitleMiniTask>
              Grocery shopping
            </TitleMiniTask>
          </ContentTask>

          <ContentTask>
            <CheckMiniTask />
            <TitleMiniTask>
              One concept design
            </TitleMiniTask>
          </ContentTask>
      </MiniTask>
    </Container>
  );
}