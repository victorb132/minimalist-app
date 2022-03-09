import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DisabledProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, disabled }) => disabled ? theme.colors.sub_title : theme.colors.primary};

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

export const Emoji = styled.Text<DisabledProps>`
  font-size: ${RFValue(25)}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const TaskContainer = styled.View``;

export const TaskTitle = styled.Text<DisabledProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const TaskSubTitle = styled.Text<DisabledProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 120px;
  height: 85px;
  background-color: ${({ theme }) => theme.colors.attention};
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
`;