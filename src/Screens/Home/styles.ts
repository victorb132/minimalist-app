import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TaskProps {
  checked: boolean;
}

interface HabitProps {
  id: string;
  category: string;
  timer: string;
  times: number;
  timesDone: number;
  title: string;
  type: string;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;

export const Header = styled.View`
  align-items: flex-end;
  height: 113px;
  justify-content: flex-end;
  padding: 10px 24px;
  width: 100%;
`;

export const ProfileAvatar = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 90px;
  height: 50px;
  margin-top: 48px;
  width: 50px;
`;

export const AvatarImage = styled.Image`
  border-radius: 90px;
  height: 50px;
  width: 50px;
`;

export const ContentText = styled.View`
  padding-left: 20px;
  padding-top: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Habits = styled.View`
  padding-left: 20px;
  padding-top: 30px;
`;

export const HabitsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`;

export const WrapperCards = (styled.FlatList`
  padding: 0 30px 0px 0px;
` as unknown) as typeof FlatList;

export const MiniTask = styled.View`
  padding-left: 20px;
  padding-top: 40px;
`;

export const MiniTaskTitle = styled.Text`
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`;

export const ContentTask = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const TitleMiniTask = styled.Text<TaskProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  text-decoration: ${({ checked }) => checked && 'line-through'};
  width: 85% ;
`;

export const ButtonRemove = styled.TouchableOpacity``;
