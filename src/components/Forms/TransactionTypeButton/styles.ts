import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isActive: boolean;
  type: 'run' | 'book' | 'other';
}

interface TextProps {
  isActive: boolean;
}

export const Container = styled.View<ContainerProps>`
  border-color: ${({ theme }) => theme.colors.title };
  border-radius: 5px;
  border-style: solid;
  border-width: ${({ isActive }) => isActive ? 0 : 0.4}px;
  margin-bottom: 10px;
  width: 100%;

  ${({ isActive, type }) => isActive && type === 'run' && css`
    background-color: ${({ theme }) => theme.colors.sub_title};
  `};

  ${({ isActive, type }) => isActive && type === 'book' && css`
    background-color: ${({ theme }) => theme.colors.sub_title};
  `};

  ${({ isActive, type }) => isActive && type === 'other' && css`
    background-color: ${({ theme }) => theme.colors.sub_title};
  `};

`

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  ${({ isActive }) => isActive && css`
    color: ${({ theme }) => theme.colors.secondary};
  `};
`;