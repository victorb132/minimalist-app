import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px 24px;
`;

export const ProfileAvatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 90px;

  background-color: #000;
  margin-top: 48px;
`;

export const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 90px;
`;

export const ContentText = styled.View`
  padding-left: 20px;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #9C9C9C;
  font-weight: 300;
`;

export const Habits = styled.View`
  padding-left: 20px;
  padding-top: 40px;
`;

export const HabitsTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  color: #9C9C9C;
  font-weight: bold;
`;

export const WrapperCards = styled.View`
  padding: 0 40px 0px 0px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;

  /* border-width: 0.2px; */
  border-radius: 10px;

  background-color: #000;

  padding: 20px;

  margin-top: 20px;
`;

export const EmojiContainer = styled.View`
  height: 40px;
  width: 40px;

  background-color: #F0F0F0;

  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-right: 20px;
`;

export const Emoji = styled.Text`
  font-size: ${RFValue(25)}px;
`;

export const TaskContainer = styled.View``;

export const TaskTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const TaskSubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #FFFFFF;
`;

export const MiniTask = styled.View`
  padding-left: 20px;
  padding-top: 40px;
`;

export const MiniTaskTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #9C9C9C;
    font-weight: bold; 
`;

export const ContentTask = styled.View`
  flex-direction: row;
  margin-top: 20px;
  
  align-items: center;
`;

export const CheckMiniTask = styled.View`
  height: 20px;
  width: 20px;

  border-radius: 10px;

  background-color: #9C9C9C;

  margin-right: 10px;
`;

export const TitleMiniTask = styled.Text`
    font-size: ${RFValue(15)}px;
    font-weight: 500;
`;