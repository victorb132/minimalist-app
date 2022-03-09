import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TaskProps {
  checked: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
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

  background-color: ${({ theme }) => theme.colors.primary};
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
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.sub_title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Habits = styled.View`
  padding-left: 20px;
  padding-top: 40px;
`;

export const HabitsTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.sub_title};
`;

export const WrapperCards = styled.View`
  padding: 0 40px 0px 0px;
`;

export const MiniTask = styled.View`
  padding-left: 20px;
  padding-top: 40px;
`;

export const MiniTaskTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.sub_title};
`;

export const ContentTask = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  
  align-items: center;
`;

export const TitleMiniTask = styled.Text<TaskProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: ${({ checked }) => checked && 'line-through'};
`;