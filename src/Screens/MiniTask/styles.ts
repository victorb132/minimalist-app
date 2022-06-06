import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
`;

export const TitlePage = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  padding-left: 24px;
`;