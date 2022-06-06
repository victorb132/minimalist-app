import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const TimerText = styled.Text.attrs({
  accessibilityRole: 'timer',
  accessibilityLiveRegion: 'assertive',
  importantForAccessibility: 'yes',
})`
  font-size: 24px;
`;

export const ViewTitle = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  text-align: center;
`;

export const ViewButton = styled.View`
  width: 100%;
`;

export const AlignVerticalView = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 100px;
  width: 100%;
`;