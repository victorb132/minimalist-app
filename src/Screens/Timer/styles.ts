import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TimerText = styled.Text.attrs({
  accessibilityRole: 'timer',
  accessibilityLiveRegion: 'assertive',
  importantForAccessibility: 'yes',
})`
  font-size: 24px;
`;

export const ViewTitle = styled.View`
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const ViewButton = styled.View`
  width: 100%;
`;

export const AlignVerticalView = styled.View`
  flex: 1;
  width: 100%;
  padding: 100px;
  justify-content: space-between;
`;