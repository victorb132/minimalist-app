import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

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

export const Form = styled.View`
  flex: 1;
  width: 100%;

  padding: 24px;
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  
  padding-left: 24px;
`;

export const ModalCategory = styled(Modal as any)`
  justify-content: flex-end;
  margin: 0px;
`;

export const ContainerCategory = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const TransactionsTypes = styled.View`
  margin-top: 8px;
  margin-bottom: 16px;
  width: 100%;
`