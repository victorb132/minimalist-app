import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DisabledProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.sub_title : theme.colors.primary};
  border-radius: 10px;
  flex-direction: row;
  margin-top: 10px;
  padding: 20px;
`;

export const EmojiContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  width: 40px;
`;

export const Emoji = styled.Text<DisabledProps>`
  font-size: ${RFValue(25)}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const TaskContainer = styled.View``;

export const TaskTitle = styled.Text<DisabledProps>`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const TaskSubTitle = styled.Text<DisabledProps>`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const ButtonRemove = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.attention};
  border-radius: 20px;
  height: 85px;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  right: 20px;
  width: 120px;
`;