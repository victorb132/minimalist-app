import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_light};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 18px 16px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
`;