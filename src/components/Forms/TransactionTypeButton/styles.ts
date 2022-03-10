import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  isActive: boolean;
  type: 'run' | 'book' | 'other';
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  margin-bottom: 10px;
  
  border-width: ${({ isActive }) => isActive ? 0 : 0.4}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.title};
  border-radius: 5px; 

  ${({ isActive, type }) => isActive && type === 'run' && css`
    background-color: ${({ theme }) => theme.colors.success};
  `};

  ${({ isActive, type }) => isActive && type === 'book' && css`
    background-color: ${({ theme }) => theme.colors.success};
  `};

  ${({ isActive, type }) => isActive && type === 'other' && css`
    background-color: ${({ theme }) => theme.colors.success};
  `};

`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;