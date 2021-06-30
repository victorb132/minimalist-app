import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const EmojiContainer = styled.View`
  height: 40px;
  width: 40px;

  background-color: ${({ theme }) => theme.colors.secondary};

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
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TaskSubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;
