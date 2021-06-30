import styled from 'styled-components/native';

export const Container = styled.View`
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
  justify-content: space-between;
  width: 100%;

  padding: 24px;
`;