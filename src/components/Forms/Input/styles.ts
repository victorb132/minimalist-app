import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  background-color: ${({ theme }) => theme.colors.gray_light};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-bottom: 8px;
  padding: 16px 18px;
  width: 100%;

  ${({ active, theme }) => active && css`
  border-color: ${theme.colors.attention};
    border-width: 3px;
  `};
`;