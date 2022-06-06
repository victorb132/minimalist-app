import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

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

export const ModalCategory = styled(Modal as any)`
  justify-content: flex-end;
  margin: 0px;
`;

export const ContainerCategory = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
  padding: 22px;
`;

export const TransactionsTypes = styled.View`
  margin-bottom: 16px;
  margin-top: 8px;
  width: 100%;
`